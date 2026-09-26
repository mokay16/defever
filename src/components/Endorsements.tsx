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

        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-md bg-navy-deep text-white shadow-sm lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src="/kathleen-fire-boots.jpg"
                alt="Kathleen Defever standing in tall grass among trees, wearing her yellow-and-black fire boots"
                fill
                sizes="(min-width: 1024px) 576px, 100vw"
                className="object-cover object-[57%_center]"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-red-light">
                Proudly Endorsed By
              </span>
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-md bg-white p-1.5">
                  <div className="relative h-14 w-14">
                    <Image
                      src="/marin-firefighters-logo.png"
                      alt="Marin Professional Firefighters logo"
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide sm:text-3xl">
                  Marin Professional Firefighters
                  <span className="mt-1 block text-base tracking-[0.12em] text-paper/70">
                    IAFF Local 1775
                  </span>
                </h3>
              </div>
              <p className="leading-relaxed text-paper/85">
                Kathleen is honored to have the endorsement of Marin&apos;s
                professional firefighters. In her work as a Public Insurance
                Adjuster, she investigates fire scenes and helps fire victims.
              </p>
              <p className="font-display text-lg font-semibold uppercase tracking-wide text-red-light">
                And yes, those are her real fire boots.
              </p>
            </div>
          </div>
        </Reveal>

        {organizations.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org, i) => (
              <Reveal key={org.name} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-5 rounded-md border-t-4 border-navy bg-white px-8 py-10 text-center shadow-sm">
                  {org.logo && (
                    // Wide enough for wordmark logos (e.g. the Marin IJ's);
                    // square logos still fill the full 112px height.
                    <div className="relative h-28 w-full max-w-64">
                      <Image
                        src={org.logo}
                        alt={`${org.name} logo`}
                        fill
                        sizes="256px"
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
