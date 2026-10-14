import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { statement } from "@/lib/content";

// Kathleen's candidate statement, in her own words, laid out as a letter.
export default function Statement() {
  return (
    <section id="statement" className="bg-paper-alt py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Breadcrumbs label="Statement" path="/statement" />
        <SectionHeading
          eyebrow="In Her Own Words"
          title="A Statement from Kathleen"
          headingLevel={1}
        />

        <Reveal delay={80}>
          <article className="mt-12 max-w-3xl rounded-md border border-ink/10 bg-white p-7 shadow-sm sm:p-12">
            <p className="text-lg leading-relaxed text-ink">{statement.intro}</p>

            <ul className="mt-5 space-y-3">
              {statement.decisions.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-5">
              {statement.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-ink/10 pt-6">
              <p className="text-ink-soft">{statement.signOff}</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink">
                {statement.signature}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
