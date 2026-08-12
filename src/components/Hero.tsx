import Image from "next/image";
import Reveal from "./Reveal";
import { credentials, site } from "@/lib/content";
import { ArrowIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-navy-deep pt-36 pb-24 lg:min-h-[780px] lg:pt-48 lg:pb-32">
      <Image
        src="/kathleen-hero.png"
        alt="Kathleen DeFever holding a Tiburon Town Council campaign sign, with the San Francisco Bay behind her"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[78%_28%]"
      />
      {/* Scrim: darkens left for text legibility, keeps the photo visible on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(19,42,76,0.95) 0%, rgba(19,42,76,0.72) 40%, rgba(19,42,76,0.32) 68%, rgba(19,42,76,0.12) 100%), linear-gradient(180deg, rgba(19,42,76,0.05) 0%, rgba(19,42,76,0.12) 55%, rgba(19,42,76,0.9) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-red/40 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-red-light">
            {site.office} &middot; {site.electionYear}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {site.candidateName}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-xl font-display text-2xl uppercase tracking-wide text-red-light sm:text-3xl">
            For {site.office}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#priorities"
              className="inline-flex items-center gap-2 rounded-sm bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-light"
            >
              See the Priorities
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-red-light hover:text-red-light"
            >
              Get Involved
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <ul className="mt-16 grid gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-paper/70 sm:grid-cols-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-light" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
