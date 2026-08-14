import type { GlobalConfig } from "payload";

export const ContactSettings: GlobalConfig = {
  slug: "contact-settings",
  label: "Contact Settings",
  access: {
    read: ({ req }) => Boolean(req.user),
  },
  admin: {
    description:
      "Add the email address(es) that should receive a copy whenever someone submits the contact form on the site.",
  },
  fields: [
    {
      name: "notificationEmails",
      label: "Notification Emails",
      type: "array",
      labels: {
        singular: "Email",
        plural: "Emails",
      },
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
        },
      ],
    },
  ],
};
