import { handleBookDemo } from "./_lib/forms";

export default async function handler(req: unknown, res: unknown) {
  return handleBookDemo(req as Parameters<typeof handleBookDemo>[0], res as Parameters<typeof handleBookDemo>[1]);
}
