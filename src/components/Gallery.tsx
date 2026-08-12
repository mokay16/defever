import Image from "next/image";
import config from "@payload-config";
import { getPayload } from "payload";
import Reveal from "./Reveal";

const gradients = [
  "from-navy/25 via-paper-alt to-red/18",
  "from-red/20 via-paper-alt to-navy/20",
  "from-navy/30 via-paper-alt to-navy/10",
];

export default async function Gallery() {
  const payload = await getPayload({ config });
  const { docs: photos } = await payload.find({
    collection: "gallery-photos",
    sort: "order",
    limit: 100,
  });

  return (
    <section className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-red">
            Life in Pictures
          </span>
        </Reveal>

        {photos.length === 0 ? (
          <Reveal delay={80}>
            <p className="mt-2 max-w-xl text-ink-soft">Photos coming soon.</p>
          </Reveal>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, i) => {
              const src = photo.sizes?.square?.url || photo.url;
              return (
                <Reveal key={photo.id} delay={(i % 4) * 70} className="h-full">
                  <figure className="group">
                    <div
                      className={`relative aspect-square overflow-hidden rounded-md border border-ink/10 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-300 group-hover:scale-[1.02]`}
                    >
                      {src && (
                        <Image
                          src={src}
                          alt={photo.caption}
                          fill
                          sizes="(min-width: 1024px) 22vw, 45vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <figcaption className="mt-2 text-xs leading-snug text-ink-soft/80">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
