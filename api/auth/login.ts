import { handleLogin } from "../_lib/auth.js";

export default async function handler(req: unknown, res: unknown) {
  return handleLogin(
    req as Parameters<typeof handleLogin>[0],
    res as Parameters<typeof handleLogin>[1],
  );
}
