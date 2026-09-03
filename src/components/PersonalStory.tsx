import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aboutKathleen } from "@/lib/content";

export default function PersonalStory() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get to Know Kathleen"
          title="From a Michigan farm to Tiburon"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal delay={120} className="max-w-xs lg:max-w-none">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md border border-ink/10">
              <Image
                src="/kathleen-standing.jpeg"
                alt="Kathleen Defever"
                fill
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>

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
