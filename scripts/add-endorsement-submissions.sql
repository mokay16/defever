-- Creates the Endorsement Submissions table in the production Postgres
-- database. Payload only auto-creates tables in local dev (SQLite), so run
-- this once against production. Safe to re-run: every statement is a no-op
-- if it has already been applied.
--
-- Run it with:  node scripts/apply-sql.mjs "<production postgres URL>" scripts/add-endorsement-submissions.sql
-- or paste it into your Postgres provider's SQL editor (e.g. Neon console).

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

-- Payload's admin panel tracks document locks per collection here.
ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "endorsement_submissions_id" integer;

DO $$ BEGIN
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_endorsement_submissions_fk" FOREIGN KEY ("endorsement_submissions_id") REFERENCES "public"."endorsement_submissions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_endorsement_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("endorsement_submissions_id");
