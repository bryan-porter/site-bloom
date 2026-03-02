import { createHmac, timingSafeEqual } from "crypto";

type JsonResponse = {
  status: (code: number) => JsonResponse;
  json: (body: unknown) => void;
};

type RequestLike = {
  body?: unknown;
  method?: string;
  headers?: Record<string, string | string[] | undefined>;
};

const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || "sitebloom-public-auth";

function methodNotAllowed(res: JsonResponse) {
  return res.status(405).json({ message: "Method not allowed" });
}

function getBody(req: RequestLike) {
  if (!req.body || typeof req.body !== "object") {
    return {};
  }

  return req.body as Record<string, unknown>;
}

function getHeaderValue(value?: string | string[]) {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value[0];
  }

  return "";
}

function getBearerToken(req: RequestLike) {
  const authorization = getHeaderValue(req.headers?.authorization);

  if (!authorization) {
    return null;
  }

  const [scheme, token] = authorization.split(" ");

  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createAuthToken(email: string) {
  const payload = JSON.stringify({
    email,
    issuedAt: Date.now(),
  });
  const encodedPayload = Buffer.from(payload, "utf8").toString("base64url");
  const signature = createHmac("sha256", AUTH_TOKEN_SECRET)
    .update(encodedPayload)
    .digest("base64url");

  return `${encodedPayload}.${signature}`;
}

function readEmailFromToken(token: string) {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = createHmac("sha256", AUTH_TOKEN_SECRET)
    .update(encodedPayload)
    .digest("base64url");
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const decodedPayload = Buffer.from(encodedPayload, "base64url").toString("utf8");
    const parsed = JSON.parse(decodedPayload) as { email?: unknown };

    if (typeof parsed.email !== "string" || !parsed.email) {
      return null;
    }

    return parsed.email;
  } catch {
    return null;
  }
}

export async function handleSignup(req: RequestLike, res: JsonResponse) {
  if (req.method !== "POST") {
    return methodNotAllowed(res);
  }

  const body = getBody(req);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters." });
  }

  const token = createAuthToken(email);

  return res.status(201).json({
    token,
    user: {
      email,
    },
  });
}

export async function handleLogin(req: RequestLike, res: JsonResponse) {
  if (req.method !== "POST") {
    return methodNotAllowed(res);
  }

  const body = getBody(req);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters." });
  }

  const token = createAuthToken(email);

  return res.status(200).json({
    token,
    user: {
      email,
    },
  });
}

export async function handleSession(req: RequestLike, res: JsonResponse) {
  if (req.method !== "GET") {
    return methodNotAllowed(res);
  }

  const token = getBearerToken(req);

  if (!token) {
    return res.status(401).json({ message: "Not signed in." });
  }

  const email = readEmailFromToken(token);

  if (!email) {
    return res.status(401).json({ message: "Session expired." });
  }

  return res.status(200).json({
    user: {
      email,
    },
  });
}

export async function handleLogout(req: RequestLike, res: JsonResponse) {
  if (req.method !== "POST") {
    return methodNotAllowed(res);
  }

  return res.status(200).json({ success: true });
}
