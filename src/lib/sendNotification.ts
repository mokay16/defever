import nodemailer from "nodemailer";
import type { Payload } from "payload";
import { Resend } from "resend";
import type { ContactSettings } from "@/payload-types";

const SENDER_NAME = "DefeverTownCouncil";

// Emails a form submission to the addresses in Payload admin -> Contact
// Settings. Sends through Gmail when GMAIL_USER + GMAIL_APP_PASSWORD are set
// (works for any recipient, no domain needed); otherwise falls back to
// Resend. Returns whether the email actually went out -- never throws, since
// the submission is already saved by the time this runs.
export async function sendNotification(
  payload: Payload,
  {
    label,
    subject,
    text,
    replyTo,
  }: { label: string; subject: string; text: string; replyTo: string },
): Promise<boolean> {
  const settings = (await payload.findGlobal({
    slug: "contact-settings",
  })) as ContactSettings;
  const recipients = (settings.notificationEmails || [])
    .map((entry) => entry.email)
    .filter((value): value is string => Boolean(value));

  if (recipients.length === 0) {
    console.warn(
      `${label} notification skipped: no Notification Emails set in Contact Settings`,
    );
    return false;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  try {
    if (gmailUser && gmailPassword) {
      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        // App Passwords are shown with spaces ("abcd efgh ..."); strip them.
        auth: { user: gmailUser, pass: gmailPassword.replace(/\s+/g, "") },
      });
      await transport.sendMail({
        from: `${SENDER_NAME} <${gmailUser}>`,
        to: recipients,
        replyTo,
        subject,
        text,
      });
      return true;
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      // Resend reports failures (e.g. unverified sender domain) in the
      // returned `error` rather than throwing, so check it explicitly.
      const { error } = await resend.emails.send({
        from: `${SENDER_NAME} <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: recipients,
        replyTo,
        subject,
        text,
      });
      if (error) throw new Error(`Resend: ${error.name} — ${error.message}`);
      return true;
    }

    console.warn(
      `${label} notification skipped: set GMAIL_USER + GMAIL_APP_PASSWORD (or RESEND_API_KEY)`,
    );
    return false;
  } catch (error) {
    console.error(`Failed to send ${label.toLowerCase()} notification email`, error);
    return false;
  }
}
