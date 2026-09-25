import type { CollectionConfig } from "payload";

// Written only by the site's own /api/endorse route (via the Local API,
// which bypasses these access rules) -- never exposed for public REST
// writes. Submissions are NOT published automatically: review them here,
// then add the approved ones to `endorsements` in src/lib/content.ts.
export const EndorsementSubmissions: CollectionConfig = {
  slug: "endorsement-submissions",
  labels: {
    singular: "Endorsement Submission",
    plural: "Endorsement Submissions",
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["firstName", "lastName", "email", "title", "createdAt"],
    description:
      "Endorsements submitted through the website form. These are not shown on the site until they're reviewed and added.",
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => false,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: "row",
      fields: [
        { name: "firstName", type: "text", required: true },
        { name: "lastName", type: "text", required: true },
      ],
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "title",
      label: "Title or Organization",
      type: "text",
    },
    {
      name: "endorsementText",
      label: "Endorsement",
      type: "textarea",
    },
    { name: "addToSupporters", label: "Add to supporters list", type: "checkbox" },
    { name: "yardSign", label: "Wants a yard sign", type: "checkbox" },
    { name: "volunteer", label: "Wants to volunteer", type: "checkbox" },
    { name: "canvass", label: "Wants to canvass", type: "checkbox" },
    { name: "emailUpdates", label: "Wants email updates", type: "checkbox" },
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
