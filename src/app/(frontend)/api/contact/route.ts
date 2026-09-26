import config from "@payload-config";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import { sendNotification } from "@/lib/sendNotification";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, website, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }
  const websiteValue = typeof website === "string" ? website.trim() : "";

  const payload = await getPayload({ config });

  // Always keep a record first, so the message survives even if the
  // notification email fails to send below.
  const submission = await payload.create({
    collection: "contact-submissions",
    data: {
      name: name.trim(),
      email: email.trim(),
      website: websiteValue || undefined,
      message: message.trim(),
    },
  });

  const emailSent = await sendNotification(payload, {
    label: "Contact",
    replyTo: email.trim(),
    subject: `New Message from ${name.trim()} — defever.vercel.app`,
    text: [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      websiteValue ? `Website: ${websiteValue}` : null,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (emailSent) {
    await payload.update({
      collection: "contact-submissions",
      id: submission.id,
      data: { emailSent: true },
    });
  }

  return NextResponse.json({ success: true });
}
