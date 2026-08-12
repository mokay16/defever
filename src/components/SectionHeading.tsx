import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <span
          className={`font-display text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-red-light" : "text-red"
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-wide sm:text-4xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              light ? "text-paper/75" : "text-ink-soft"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
