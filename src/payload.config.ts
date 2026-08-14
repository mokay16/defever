import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";
import { ContactSubmissions } from "./collections/ContactSubmissions";
import { GalleryPhotos } from "./collections/GalleryPhotos";
import { Users } from "./collections/Users";
import { ContactSettings } from "./globals/ContactSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Local dev: no Postgres URL is set -> SQLite, zero setup.
// Vercel/production: a Postgres connection string is present (e.g. from
// Neon, provisioned through Vercel's Storage tab) -> Postgres. Vercel's
// Neon integration names the variable differently depending on how it's
// connected, so check the common variants rather than requiring one exact
// name.
const databaseURI =
  process.env.DATABASE_URI ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL;
const db = databaseURI?.startsWith("postgres")
  ? postgresAdapter({
      pool: {
        connectionString: databaseURI,
      },
    })
  : sqliteAdapter({
      client: {
        url: databaseURI || "file:./payload.db",
      },
    });

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, GalleryPhotos, ContactSubmissions],
  globals: [ContactSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db,
  sharp,
  plugins: [
    // Uploads go to Vercel Blob when BLOB_READ_WRITE_TOKEN is set
    // (production); falls back to local disk automatically otherwise.
    vercelBlobStorage({
      collections: {
        "gallery-photos": true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
