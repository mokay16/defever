import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { journey } from "@/lib/content";

export default function Journey() {
  return (
    <section id="journey" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Record"
          title="Eight years of steady bearings on this Council's biggest questions"
          description="A real record, plotted in order — not a slogan."
        />

        <div className="relative mt-16 max-w-2xl">
          {/* the connecting line running the length of the timeline */}
          <div
            aria-hidden
            className="absolute left-1.5 top-2 bottom-2 w-px bg-ink/15"
          />

          <ol className="space-y-12">
            {journey.map((entry, i) => (
              <Reveal key={i} delay={i * 90} as="li" className="relative pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-red ring-4 ring-paper"
                />
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-red">
                  {entry.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase tracking-wide text-ink">
                  {entry.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{entry.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
