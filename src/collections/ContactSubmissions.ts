import type { CollectionConfig } from "payload";

// Written only by the site's own /api/contact route (via the Local API,
// which bypasses these access rules) -- never exposed for public REST
// writes, so this can't be used as a spam vector. Acts as a backup record
// of every message in case the notification email fails to send.
export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  labels: {
    singular: "Contact Submission",
    plural: "Contact Submissions",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "emailSent", "createdAt"],
    description:
      "A backup log of every contact form submission, in case the email notification ever fails to send.",
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => false,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "emailSent",
      label: "Notification Email Sent",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
