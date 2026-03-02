import { handleSession } from "../_lib/auth.js";

export default async function handler(req: unknown, res: unknown) {
  return handleSession(
    req as Parameters<typeof handleSession>[0],
    res as Parameters<typeof handleSession>[1],
  );
}
