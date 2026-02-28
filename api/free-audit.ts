import { handleFreeAudit } from "./_lib/forms.js";

export default async function handler(req: unknown, res: unknown) {
  return handleFreeAudit(req as Parameters<typeof handleFreeAudit>[0], res as Parameters<typeof handleFreeAudit>[1]);
}
