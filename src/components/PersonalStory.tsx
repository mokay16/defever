import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aboutKathleen } from "@/lib/content";

export default function PersonalStory() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get to Know Kathleen"
              title="From a Michigan farm to Tiburon"
            />
            <Reveal delay={120} className="mt-8 hidden lg:block">
              <div className="aspect-[4/5] w-full rounded-md border border-ink/10 bg-gradient-to-br from-navy/15 via-paper-alt to-red/15" />
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-ink-soft/70">
                Photo placeholder — Defever Farms, Michigan
              </p>
            </Reveal>
          </div>

          <div className="space-y-5">
            {aboutKathleen.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
