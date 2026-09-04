import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-paper py-24 lg:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-red">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-light"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
