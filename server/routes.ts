import type { Express } from "express";
import type { Server } from "http";
import { randomUUID } from "crypto";
import nodemailer from "nodemailer";
import { storage } from "./storage";

type SubmissionDetails = Record<string, string | undefined>;
type AuthSession = {
  userId: string;
  email: string;
};

const authSessions = new Map<string, AuthSession>();

function getBearerToken(authorizationHeader?: string) {
  if (!authorizationHeader) {
    return null;
  }

  const [scheme, token] = authorizationHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
}

function logSubmissionStep(flow: string, step: string, details?: Record<string, unknown>) {
  if (details) {
    console.log(`[forms:${flow}] ${step}`, details);
    return;
  }

  console.log(`[forms:${flow}] ${step}`);
}

function getMailConfig() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const mailTo = process.env.CONTACT_FORM_TO || gmailUser;

  if (!gmailUser || !gmailAppPassword || !mailTo) {
    return null;
  }

  return {
    gmailUser,
    gmailAppPassword,
    mailTo,
  };
}

async function sendSubmissionEmail(subject: string, details: SubmissionDetails) {
  logSubmissionStep(subject, "loading mail configuration");
  const mailConfig = getMailConfig();

  if (!mailConfig) {
    logSubmissionStep(subject, "mail configuration missing");
    throw new Error(
      "Email is not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and optionally CONTACT_FORM_TO.",
    );
  }

  logSubmissionStep(subject, "creating mail transporter", {
    from: mailConfig.gmailUser,
    to: mailConfig.mailTo,
  });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailConfig.gmailUser,
      pass: mailConfig.gmailAppPassword,
    },
  });

  const text = Object.entries(details)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  logSubmissionStep(subject, "sending email");
  await transporter.sendMail({
    from: `"SiteBloom Forms" <${mailConfig.gmailUser}>`,
    to: mailConfig.mailTo,
    replyTo: details.email,
    subject,
    text,
  });
  logSubmissionStep(subject, "email sent successfully");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
      const password = typeof req.body?.password === "string" ? req.body.password : "";

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
      }

      if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters." });
      }

      const existingUser = await storage.getUserByEmail(email);

      if (existingUser) {
        return res.status(409).json({ message: "An account with that email already exists." });
      }

      const user = await storage.createUser({
        email,
        password,
      });
      const token = randomUUID();

      authSessions.set(token, {
        userId: user.id,
        email: user.email,
      });

      return res.status(201).json({
        token,
        user: {
          email: user.email,
        },
      });
    } catch (error) {
      console.error("[auth:signup] request failed", error);
      return res.status(500).json({ message: "Unable to create account." });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
      const password = typeof req.body?.password === "string" ? req.body.password : "";

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }

      const user = await storage.getUserByEmail(email);

      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const token = randomUUID();

      authSessions.set(token, {
        userId: user.id,
        email: user.email,
      });

      return res.status(200).json({
        token,
        user: {
          email: user.email,
        },
      });
    } catch (error) {
      console.error("[auth:login] request failed", error);
      return res.status(500).json({ message: "Unable to sign in." });
    }
  });

  app.get("/api/auth/session", async (req, res) => {
    try {
      const token = getBearerToken(req.headers.authorization);

      if (!token) {
        return res.status(401).json({ message: "Not signed in." });
      }

      const session = authSessions.get(token);

      if (!session) {
        return res.status(401).json({ message: "Session expired." });
      }

      const user = await storage.getUser(session.userId);

      if (!user) {
        authSessions.delete(token);
        return res.status(401).json({ message: "Session expired." });
      }

      return res.status(200).json({
        user: {
          email: user.email,
        },
      });
    } catch (error) {
      console.error("[auth:session] request failed", error);
      return res.status(500).json({ message: "Unable to validate session." });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    const token = getBearerToken(req.headers.authorization);

    if (token) {
      authSessions.delete(token);
    }

    return res.status(200).json({ success: true });
  });

  // Free Audit submission endpoint
  app.post("/api/free-audit", async (req, res) => {
    try {
      logSubmissionStep("free-audit", "request received", {
        bodyKeys: Object.keys(req.body || {}),
      });
      const { websiteUrl, name, email, phone, notes } = req.body;

      // Validate required fields
      if (!websiteUrl || !name || !email) {
        logSubmissionStep("free-audit", "missing required fields", {
          websiteUrl: Boolean(websiteUrl),
          name: Boolean(name),
          email: Boolean(email),
        });
        return res.status(400).json({
          message: "Missing required fields: websiteUrl, name, and email are required"
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        logSubmissionStep("free-audit", "email validation failed", { email });
        return res.status(400).json({ message: "Invalid email format" });
      }

      logSubmissionStep("free-audit", "validation passed", {
        name,
        email,
        hasPhone: Boolean(phone),
        websiteUrl,
      });
      await sendSubmissionEmail("New Free Audit Request", {
        type: "Free Audit",
        name,
        email,
        phone,
        websiteUrl,
        notes,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        message: "Audit request submitted successfully",
        data: { websiteUrl, name, email }
      });
    } catch (error) {
      console.error("[forms:free-audit] request failed", error);
      const message = error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  });

  // Book Demo / Bloom My Site submission endpoint
  app.post("/api/book-demo", async (req, res) => {
    try {
      logSubmissionStep("book-demo", "request received", {
        bodyKeys: Object.keys(req.body || {}),
      });
      const { name, email, phone, website, message } = req.body;

      if (!name || !email) {
        logSubmissionStep("book-demo", "missing required fields", {
          name: Boolean(name),
          email: Boolean(email),
        });
        return res.status(400).json({
          message: "Missing required fields: name and email are required"
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        logSubmissionStep("book-demo", "email validation failed", { email });
        return res.status(400).json({ message: "Invalid email format" });
      }

      logSubmissionStep("book-demo", "validation passed", {
        name,
        email,
        hasPhone: Boolean(phone),
        hasWebsite: Boolean(website),
        hasMessage: Boolean(message),
      });
      await sendSubmissionEmail("New Book Demo Request", {
        type: "Book Demo",
        name,
        email,
        phone,
        website,
        message,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        message: "Demo request submitted successfully",
        data: { name, email }
      });
    } catch (error) {
      console.error("[forms:book-demo] request failed", error);
      const message = error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  });

  // Contact page submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      logSubmissionStep("contact", "request received", {
        bodyKeys: Object.keys(req.body || {}),
      });
      const { name, email, phone, website, message } = req.body;

      if (!name || !email || !message) {
        logSubmissionStep("contact", "missing required fields", {
          name: Boolean(name),
          email: Boolean(email),
          message: Boolean(message),
        });
        return res.status(400).json({
          message: "Missing required fields: name, email, and message are required"
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        logSubmissionStep("contact", "email validation failed", { email });
        return res.status(400).json({ message: "Invalid email format" });
      }

      logSubmissionStep("contact", "validation passed", {
        name,
        email,
        hasPhone: Boolean(phone),
        hasWebsite: Boolean(website),
        messageLength: typeof message === "string" ? message.length : 0,
      });
      await sendSubmissionEmail("New Contact Form Message", {
        type: "Contact",
        name,
        email,
        phone,
        website,
        message,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        message: "Contact request submitted successfully",
        data: { name, email }
      });
    } catch (error) {
      console.error("[forms:contact] request failed", error);
      const message = error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  });

  return httpServer;
}
