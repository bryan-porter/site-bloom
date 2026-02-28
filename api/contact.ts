import { handleContact } from "./_lib/forms";

export default async function handler(req: unknown, res: unknown) {
  return handleContact(req as Parameters<typeof handleContact>[0], res as Parameters<typeof handleContact>[1]);
}
