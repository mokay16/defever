import Breadcrumbs from "./Breadcrumbs";
import PriorityPhoto from "./PriorityPhoto";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PriorityIcon } from "./icons";
import { priorities } from "@/lib/content";

export default function Priorities() {
  return (
    <section id="priorities" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Breadcrumbs label="Priorities" path="/priorities" />
        <SectionHeading
          eyebrow="On the Council"
          title="What Kathleen will champion"
          description="A platform built from over 8 years of showing up — on the Planning Commission, in the community, and for Tiburon's neighborhoods."
          headingLevel={1}
        />

        <ol className="mt-16 space-y-16 lg:space-y-24">
          {priorities.map((item, i) => (
            <Reveal key={item.title} as="li">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <PriorityPhoto
                  priority={item}
                  sizes="(min-width: 1024px) 536px, 100vw"
                  className={`aspect-[3/2] rounded-md shadow-sm ${i % 2 === 1 ? "lg:order-2" : ""}`}
                />
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-red text-white">
                      <PriorityIcon name={item.icon} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft/70">
                      Priority {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-ink sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
