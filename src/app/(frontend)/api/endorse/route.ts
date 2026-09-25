import config from "@payload-config";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import { Resend } from "resend";
import type { ContactSettings } from "@/payload-types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const OPTIONS = [
  ["addToSupporters", "Add to supporters list"],
  ["yardSign", "Wants a yard sign"],
  ["volunteer", "Wants to volunteer"],
  ["canvass", "Wants to canvass"],
  ["emailUpdates", "Wants email updates"],
] as const;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = ((await request.json()) ?? {}) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const firstName = text(body.firstName);
  const lastName = text(body.lastName);
  const email = text(body.email);
  const title = text(body.title);
  const endorsementText = text(body.endorsementText);
  const options = Object.fromEntries(
    OPTIONS.map(([key]) => [key, body[key] === true]),
  ) as Record<(typeof OPTIONS)[number][0], boolean>;

  if (!firstName || !lastName || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your first name, last name, and a valid email." },
      { status: 400 },
    );
  }

  const payload = await getPayload({ config });

  // Always keep a record first, so the endorsement survives even if the
  // notification email fails to send below.
  const submission = await payload.create({
    collection: "endorsement-submissions",
    data: {
      firstName,
      lastName,
      email,
      title: title || undefined,
      endorsementText: endorsementText || undefined,
      ...options,
    },
  });

  // Same recipients as the contact form (Payload admin -> Contact Settings).
  const settings = (await payload.findGlobal({
    slug: "contact-settings",
  })) as ContactSettings;
  const recipients = (settings.notificationEmails || [])
    .map((entry) => entry.email)
    .filter((value): value is string => Boolean(value));

  let emailSent = false;
  if (recipients.length > 0 && process.env.RESEND_API_KEY) {
    const fullName = `${firstName} ${lastName}`;
    const selected = OPTIONS.filter(([key]) => options[key]).map(
      ([, label]) => `- ${label}`,
    );
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `DefeverTownCouncil <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: recipients,
        replyTo: email,
        subject: `New Endorsement from ${fullName} — defeverfortowncouncil.com`,
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          title ? `Title/Organization: ${title}` : null,
          "",
          endorsementText ? `Endorsement:\n${endorsementText}` : "(No endorsement text)",
          "",
          selected.length > 0 ? `Also:\n${selected.join("\n")}` : null,
          "",
          "Review it in Payload admin under Endorsement Submissions before adding it to the site.",
        ]
          .filter((line) => line !== null)
          .join("\n"),
      });
      emailSent = true;
    } catch (error) {
      console.error("Failed to send endorsement notification email", error);
    }
  }

  if (emailSent) {
    await payload.update({
      collection: "endorsement-submissions",
      id: submission.id,
      data: { emailSent: true },
    });
  }

  return NextResponse.json({ success: true });
}
