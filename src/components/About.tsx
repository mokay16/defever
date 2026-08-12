import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { introParagraphs } from "@/lib/content";

const stats = [
  { value: "10+", label: "Years serving the Tiburon community" },
  { value: "4", label: "Years on the Planning Commission, incl. Chair" },
  { value: "1st", label: "Firewise-certified neighborhood, co-founded" },
];

export default function About() {
  return (
    <section id="about" className="bg-paper-alt py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Community Leader"
          title="A decade of service, on the record"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {introParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <dl className="divide-y divide-ink/10 rounded-md border border-ink/10 bg-white">
              {stats.map((stat) => (
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
  );
}
