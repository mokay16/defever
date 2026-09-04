import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Endorsements from "@/components/Endorsements";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon, PriorityIcon } from "@/components/icons";
import { introParagraphs, priorities, stats } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "Kathleen Defever is running for Tiburon Town Council in 2026 — Planning Commissioner, Rotary President, and over 8 years of service to the Tiburon community.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const topPriorities = priorities.slice(0, 3);
  const topStats = stats.slice(0, 3);

  return (
    <>
      <Hero />

      <Endorsements />

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="On the Council"
            title="What Kathleen will champion"
            description="A platform built from eight years of showing up — on the Planning Commission, in the community, and for Tiburon's neighborhoods."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {topPriorities.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <div className="h-full rounded-md border border-ink/10 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-red/10 text-red">
                    <PriorityIcon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-10">
            <Link
              href="/priorities"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-red transition-colors hover:text-red-light"
            >
              See all priorities
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-alt py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Community Leader"
                title="A record of service, on the record"
              />
              <Reveal delay={80} className="mt-6 max-w-2xl">
                <p className="leading-relaxed text-ink-soft">
                  {introParagraphs[0]}
                </p>
              </Reveal>
              <Reveal delay={140} className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-red transition-colors hover:text-red-light"
                >
                  Meet Kathleen
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <dl className="divide-y divide-ink/10 rounded-md border border-ink/10 bg-white">
                {topStats.map((stat) => (
                  <div key={stat.label} className="p-6">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-4xl font-semibold text-red">
                      {stat.value}
                    </dd>
                    <p className="mt-1.5 text-sm text-ink-soft">{stat.label}</p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">
              Join the campaign
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-lg leading-relaxed text-paper/75">
              Every contribution and every conversation moves this campaign
              forward.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/donate"
                className="rounded-sm bg-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-light"
              >
                Donate
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-red-light hover:text-red-light"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
