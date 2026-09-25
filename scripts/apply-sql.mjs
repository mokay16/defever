// Runs a .sql file against a Postgres database, e.g. to add a new Payload
// collection's table in production (Payload only auto-creates tables in dev).
//
// Usage: node scripts/apply-sql.mjs "<postgres connection URL>" <file.sql>
import { readFile } from "node:fs/promises";
import pg from "pg";

const [url, file] = process.argv.slice(2);
if (!url?.startsWith("postgres") || !file) {
  console.error('Usage: node scripts/apply-sql.mjs "<postgres URL>" <file.sql>');
  process.exit(1);
}

const client = new pg.Client({ connectionString: url });
await client.connect();
try {
  await client.query(await readFile(file, "utf8"));
  console.log(`Applied ${file}`);
} finally {
  await client.end();
}
