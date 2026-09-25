import type { Payload } from "payload";

// Payload only auto-creates tables in local dev (SQLite), and this project
// doesn't use Payload migrations, so tables for collections added after
// launch are created here on startup instead. Every statement is a no-op
// once applied, so this is safe to run on every cold start.
//
// When adding a new collection, append its CREATE TABLE plus the matching
// `payload_locked_documents_rels` column (the admin panel errors without it).
const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS "endorsement_submissions" (
  "id" serial PRIMARY KEY NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "title" varchar,
  "endorsement_text" varchar,
  "add_to_supporters" boolean,
  "yard_sign" boolean,
  "volunteer" boolean,
  "canvass" boolean,
  "email_updates" boolean,
  "email_sent" boolean DEFAULT false,
  "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS "endorsement_submissions_updated_at_idx" ON "endorsement_submissions" USING btree ("updated_at");
CREATE INDEX IF NOT EXISTS "endorsement_submissions_created_at_idx" ON "endorsement_submissions" USING btree ("created_at");

ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "endorsement_submissions_id" integer;
DO $$ BEGIN
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_endorsement_submissions_fk" FOREIGN KEY ("endorsement_submissions_id") REFERENCES "public"."endorsement_submissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_endorsement_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("endorsement_submissions_id");
`;

export async function ensureProdSchema(payload: Payload) {
  if (payload.db.name !== "postgres") return;

  const pool = (payload.db as unknown as {
    pool?: { query: (sql: string) => Promise<unknown> };
  }).pool;
  if (!pool) return;

  try {
    await pool.query(SCHEMA_SQL);
  } catch (error) {
    // Two cold starts racing on CREATE TABLE can collide; the loser just
    // logs, and the next start finds everything already in place.
    payload.logger.error({ err: error }, "ensureProdSchema failed");
  }
}
