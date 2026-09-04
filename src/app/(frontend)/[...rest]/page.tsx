import { notFound } from "next/navigation";

// Catches any URL that doesn't match a real route, so the branded
// not-found.tsx in this route group renders instead of Next's generic
// default 404 (which is what happens for unmatched paths otherwise,
// since this project has no root layout — see AGENTS.md).
export default function CatchAll() {
  notFound();
}
