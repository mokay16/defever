import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { endorsements } from "@/lib/content";

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {endorsements.map((person, i) => (
            <Reveal key={person.name} delay={i * 80} className="h-full">
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

        <Reveal delay={endorsements.length * 80 + 40} className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft/70">
            Endorsements updated weekly
          </p>
        </Reveal>
      </div>
    </section>
  );
}
