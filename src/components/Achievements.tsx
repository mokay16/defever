import LogoMarquee from "./LogoMarquee";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements, memberships } from "@/lib/content";

function ListBlock({
  title,
  items,
  delayStart,
}: {
  title: string;
  items: string[];
  delayStart: number;
}) {
  return (
    <div>
      <Reveal delay={delayStart}>
        <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
          {title}
        </h3>
      </Reveal>
      <ul className="mt-5 space-y-4 border-t border-ink/10 pt-5">
        {items.map((item, i) => (
          <Reveal key={item} delay={delayStart + 60 + i * 40} as="li">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              <span className="leading-relaxed text-ink-soft">{item}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-paper-alt py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Achievements & memberships"
        />

        <div className="mt-14 grid gap-12 sm:grid-cols-2">
          <ListBlock title="Achievements" items={achievements} delayStart={0} />
          <ListBlock title="Memberships" items={memberships} delayStart={80} />
        </div>
      </div>

      <Reveal delay={160} className="mt-16">
        <p className="mx-auto max-w-6xl px-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-red lg:px-8">
          Recognized By
        </p>
        <div className="mt-6">
          <LogoMarquee />
        </div>
      </Reveal>
    </section>
  );
}
