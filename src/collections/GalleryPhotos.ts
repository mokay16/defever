import { randomBytes } from "node:crypto";
import path from "node:path";
import type { CollectionBeforeOperationHook, CollectionConfig } from "payload";

// Replace the uploaded file's name with an unguessable random one (keeping
// only the extension) before Payload saves it, so the URL served on the
// frontend never reveals the original filename or any predictable pattern.
const randomizeFilename: CollectionBeforeOperationHook = ({ req }) => {
  if (req.file) {
    const originalName = req.file.name;
    const dotIndex = originalName.lastIndexOf(".");
    const ext = dotIndex !== -1 ? originalName.slice(dotIndex) : "";
    req.file.name = `${randomBytes(16).toString("hex")}${ext}`;
  }
};

export const GalleryPhotos: CollectionConfig = {
  slug: "gallery-photos",
  admin: {
    useAsTitle: "caption",
    defaultColumns: ["thumbnail", "caption", "order"],
    description:
      "Photos shown in the \"Life in Pictures\" gallery on the About section. Set Order to control the display sequence (lower numbers show first).",
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeOperation: [randomizeFilename],
  },
  upload: {
    staticDir: path.resolve(process.cwd(), "gallery-uploads"),
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 400,
        position: "centre",
      },
      {
        name: "square",
        width: 900,
        height: 900,
        position: "centre",
      },
    ],
  },
  fields: [
    {
      name: "caption",
      type: "text",
      required: true,
      admin: {
        description: "Shown under the photo, e.g. \"Kathleen and Rick at the Angel Island Sunset Cruise.\"",
      },
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description: "Lower numbers appear first in the gallery.",
      },
    },
  ],
  defaultSort: "order",
};
