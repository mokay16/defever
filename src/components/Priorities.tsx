import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PriorityIcon } from "./icons";
import { priorities } from "@/lib/content";

export default function Priorities() {
  return (
    <section id="priorities" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="On the Council"
          title="What Kathleen will champion"
          description="A platform built from ten years of showing up — on the Planning Commission, in the community, and for Tiburon's neighborhoods."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="h-full">
              <div className="group h-full rounded-md border border-ink/10 bg-white p-7 transition-colors hover:border-red/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-red/10 text-red transition-colors group-hover:bg-red group-hover:text-navy-deep">
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
      </div>
    </section>
  );
}
