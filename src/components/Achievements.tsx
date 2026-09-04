import Breadcrumbs from "./Breadcrumbs";
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
        <Breadcrumbs label="Education & Qualifications" path="/achievements" />
        <SectionHeading
          eyebrow="Credentials"
          title="Education & Qualifications"
          headingLevel={1}
        />

        <div className="mt-14 grid gap-12 sm:grid-cols-2">
          <ListBlock title="Education & Qualifications" items={achievements} delayStart={0} />
          <ListBlock title="Memberships" items={memberships} delayStart={80} />
        </div>
      </div>
    </section>
  );
}
