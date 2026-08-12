import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beyond the Council"
          title="Kathleen's work"
          light
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 lg:grid-cols-3">
          {work.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <div className="h-full bg-navy-deep p-8">
                <span className="font-mono text-sm text-red-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-paper/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
