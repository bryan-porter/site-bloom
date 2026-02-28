import type { Express } from "express";
import type { Server } from "http";
import nodemailer from "nodemailer";

type SubmissionDetails = Record<string, string | undefined>;

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
  const mailConfig = getMailConfig();

  if (!mailConfig) {
    throw new Error(
      "Email is not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD, and optionally CONTACT_FORM_TO.",
    );
  }

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

  await transporter.sendMail({
    from: `"SiteBloom Forms" <${mailConfig.gmailUser}>`,
    to: mailConfig.mailTo,
    replyTo: details.email,
    subject,
    text,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Free Audit submission endpoint
  app.post("/api/free-audit", async (req, res) => {
    try {
      const { websiteUrl, name, email, notes } = req.body;

      // Validate required fields
      if (!websiteUrl || !name || !email) {
        return res.status(400).json({
          message: "Missing required fields: websiteUrl, name, and email are required"
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      // Validate URL format
      try {
        new URL(websiteUrl);
      } catch {
        return res.status(400).json({ message: "Invalid website URL format" });
      }

      await sendSubmissionEmail("New Free Audit Request", {
        type: "Free Audit",
        name,
        email,
        websiteUrl,
        notes,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        message: "Audit request submitted successfully",
        data: { websiteUrl, name, email }
      });
    } catch (error) {
      console.error("Error processing audit request:", error);
      const message = error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  });

  // Book Demo / Bloom My Site submission endpoint
  app.post("/api/book-demo", async (req, res) => {
    try {
      const { name, email, website, message } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          message: "Missing required fields: name and email are required"
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      if (website) {
        try {
          new URL(website);
        } catch {
          return res.status(400).json({ message: "Invalid website URL format" });
        }
      }

      await sendSubmissionEmail("New Book Demo Request", {
        type: "Book Demo",
        name,
        email,
        website,
        message,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        message: "Demo request submitted successfully",
        data: { name, email }
      });
    } catch (error) {
      console.error("Error processing demo request:", error);
      const message = error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  });

  // Contact page submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, website, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          message: "Missing required fields: name, email, and message are required"
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      if (website) {
        try {
          new URL(website);
        } catch {
          return res.status(400).json({ message: "Invalid website URL format" });
        }
      }

      await sendSubmissionEmail("New Contact Form Message", {
        type: "Contact",
        name,
        email,
        website,
        message,
        timestamp: new Date().toISOString(),
      });

      return res.status(200).json({
        message: "Contact request submitted successfully",
        data: { name, email }
      });
    } catch (error) {
      console.error("Error processing contact request:", error);
      const message = error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  });

  return httpServer;
}
