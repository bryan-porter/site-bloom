import nodemailer from "nodemailer";

type SubmissionDetails = Record<string, string | undefined>;

type JsonResponse = {
  status: (code: number) => JsonResponse;
  json: (body: unknown) => void;
};

type RequestLike = {
  body?: unknown;
  method?: string;
};

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

function getBody(req: RequestLike) {
  if (!req.body || typeof req.body !== "object") {
    return {};
  }

  return req.body as Record<string, unknown>;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function methodNotAllowed(res: JsonResponse) {
  return res.status(405).json({ message: "Method not allowed" });
}

export async function handleContact(req: RequestLike, res: JsonResponse) {
  if (req.method !== "POST") {
    return methodNotAllowed(res);
  }

  try {
    const body = getBody(req);
    logSubmissionStep("contact", "request received", {
      bodyKeys: Object.keys(body),
    });

    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const website = typeof body.website === "string" ? body.website : "";
    const message = typeof body.message === "string" ? body.message : "";

    if (!name || !email || !message) {
      logSubmissionStep("contact", "missing required fields", {
        name: Boolean(name),
        email: Boolean(email),
        message: Boolean(message),
      });
      return res.status(400).json({
        message: "Missing required fields: name, email, and message are required",
      });
    }

    if (!isValidEmail(email)) {
      logSubmissionStep("contact", "email validation failed", { email });
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (website && !isValidUrl(website)) {
      logSubmissionStep("contact", "website URL validation failed", { website });
      return res.status(400).json({ message: "Invalid website URL format" });
    }

    logSubmissionStep("contact", "validation passed", {
      name,
      email,
      hasWebsite: Boolean(website),
      messageLength: message.length,
    });

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
      data: { name, email },
    });
  } catch (error) {
    console.error("[forms:contact] request failed", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({ message });
  }
}

export async function handleBookDemo(req: RequestLike, res: JsonResponse) {
  if (req.method !== "POST") {
    return methodNotAllowed(res);
  }

  try {
    const body = getBody(req);
    logSubmissionStep("book-demo", "request received", {
      bodyKeys: Object.keys(body),
    });

    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const website = typeof body.website === "string" ? body.website : "";
    const message = typeof body.message === "string" ? body.message : "";

    if (!name || !email) {
      logSubmissionStep("book-demo", "missing required fields", {
        name: Boolean(name),
        email: Boolean(email),
      });
      return res.status(400).json({
        message: "Missing required fields: name and email are required",
      });
    }

    if (!isValidEmail(email)) {
      logSubmissionStep("book-demo", "email validation failed", { email });
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (website && !isValidUrl(website)) {
      logSubmissionStep("book-demo", "website URL validation failed", { website });
      return res.status(400).json({ message: "Invalid website URL format" });
    }

    logSubmissionStep("book-demo", "validation passed", {
      name,
      email,
      hasWebsite: Boolean(website),
      hasMessage: Boolean(message),
    });

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
      data: { name, email },
    });
  } catch (error) {
    console.error("[forms:book-demo] request failed", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({ message });
  }
}

export async function handleFreeAudit(req: RequestLike, res: JsonResponse) {
  if (req.method !== "POST") {
    return methodNotAllowed(res);
  }

  try {
    const body = getBody(req);
    logSubmissionStep("free-audit", "request received", {
      bodyKeys: Object.keys(body),
    });

    const websiteUrl = typeof body.websiteUrl === "string" ? body.websiteUrl : "";
    const name = typeof body.name === "string" ? body.name : "";
    const email = typeof body.email === "string" ? body.email : "";
    const notes = typeof body.notes === "string" ? body.notes : "";

    if (!websiteUrl || !name || !email) {
      logSubmissionStep("free-audit", "missing required fields", {
        websiteUrl: Boolean(websiteUrl),
        name: Boolean(name),
        email: Boolean(email),
      });
      return res.status(400).json({
        message: "Missing required fields: websiteUrl, name, and email are required",
      });
    }

    if (!isValidEmail(email)) {
      logSubmissionStep("free-audit", "email validation failed", { email });
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!isValidUrl(websiteUrl)) {
      logSubmissionStep("free-audit", "website URL validation failed", { websiteUrl });
      return res.status(400).json({ message: "Invalid website URL format" });
    }

    logSubmissionStep("free-audit", "validation passed", {
      name,
      email,
      websiteUrl,
    });

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
      data: { websiteUrl, name, email },
    });
  } catch (error) {
    console.error("[forms:free-audit] request failed", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({ message });
  }
}
