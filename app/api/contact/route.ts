export const runtime = "nodejs";

const failure = (error: string, status: number) => Response.json({ error }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return failure("Please send your message from this website.", 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return failure("Invalid request format.", 415);
  }

  let payload: Record<string, unknown>;
  try {
    // Limit the body while reading, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return failure("Please enter your message.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24000) {
        await reader.cancel();
        return failure("Your message is too long.", 413);
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return failure("Invalid message.", 400);
    payload = parsed;
  } catch {
    return failure("Invalid message format.", 400);
  }

  if (payload.website) return failure("Unable to accept this submission.", 400);
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (!name || name.length > 100 || /[\r\n]/.test(name)) return failure("Please enter a name under 100 characters.", 400);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return failure("Please enter a valid email address.", 400);
  if (!message || message.length > 5000) return failure("Please enter a message under 5,000 characters.", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "akulasatish405@gmail.com";
  if (!apiKey || !from) return failure("The contact form is temporarily unavailable. Please use the email link instead.", 503);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) return failure("Your message could not be sent. Please try again or use the email link.", 502);
    const result = await response.json();
    if (!result.id) return failure("We couldn't confirm your message was sent. Please use the email link.", 502);
    return Response.json({ success: true });
  } catch {
    return failure("The email service is unavailable. Please try again later or email me directly.", 502);
  }
}
