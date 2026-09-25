import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { endorsements } from "@/lib/content";

const organizations = endorsements.filter((e) => e.organization);
const individuals = endorsements.filter((e) => !e.organization);

export default function Endorsements({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section className="bg-paper-alt py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {standalone && <Breadcrumbs label="Endorsements" path="/endorsements" />}
        <SectionHeading
          eyebrow="Who's Behind Kathleen"
          title="Endorsements"
          description="Local leaders who know Kathleen's record and are backing her campaign."
          headingLevel={standalone ? 1 : 2}
        />

        {organizations.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org, i) => (
              <Reveal key={org.name} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-5 rounded-md border-t-4 border-navy bg-white px-8 py-10 text-center shadow-sm">
                  {org.logo && (
                    <div className="relative h-28 w-28">
                      <Image
                        src={org.logo}
                        alt={`${org.name} logo`}
                        fill
                        sizes="112px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-ink">
                      {org.name}
                    </p>
                    <p className="mt-2 text-ink-soft">{org.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {individuals.map((person, i) => (
            <Reveal
              key={person.name}
              delay={(organizations.length + i) * 80}
              className="h-full"
            >
              <div className="flex h-full items-center gap-4 rounded-md border border-ink/10 bg-white p-6">
                {person.logo && (
                  <div className="relative h-14 w-14 shrink-0">
                    <Image
                      src={person.logo}
                      alt={`${person.name} logo`}
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{person.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={endorsements.length * 80 + 40}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft/70">
            Endorsements updated weekly
          </p>
          <Link
            href="/endorsements#endorse"
            className="inline-block rounded-sm bg-red px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy-deep"
          >
            Add Your Endorsement
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
