import { handleLogout } from "../_lib/auth.js";

export default async function handler(req: unknown, res: unknown) {
  return handleLogout(
    req as Parameters<typeof handleLogout>[0],
    res as Parameters<typeof handleLogout>[1],
  );
}
