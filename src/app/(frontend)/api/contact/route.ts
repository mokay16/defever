import config from "@payload-config";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import { Resend } from "resend";
import type { ContactSettings } from "@/payload-types";

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

  const settings = (await payload.findGlobal({
    slug: "contact-settings",
  })) as ContactSettings;
  const recipients = (settings.notificationEmails || [])
    .map((entry) => entry.email)
    .filter((value): value is string => Boolean(value));

  let emailSent = false;
  if (recipients.length > 0 && process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
        to: recipients,
        replyTo: email.trim(),
        subject: `New message from ${name.trim()} via the campaign site`,
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
      emailSent = true;
    } catch (error) {
      console.error("Failed to send contact notification email", error);
    }
  }

  if (emailSent) {
    await payload.update({
      collection: "contact-submissions",
      id: submission.id,
      data: { emailSent: true },
    });
  }

  return NextResponse.json({ success: true });
}
