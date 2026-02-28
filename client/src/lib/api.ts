export async function readErrorMessage(response: Response, fallback: string) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await response.json()) as { message?: string };
    return body.message || fallback;
  }

  const text = (await response.text()).trim();

  if (!text) {
    return fallback;
  }

  if (text.startsWith("<")) {
    return "The form endpoint is not available on this deployment. The server returned an HTML page instead of the API response.";
  }

  return text;
}
