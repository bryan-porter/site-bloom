import { handleSignup } from "../_lib/auth.js";

export default async function handler(req: unknown, res: unknown) {
  return handleSignup(
    req as Parameters<typeof handleSignup>[0],
    res as Parameters<typeof handleSignup>[1],
  );
}
