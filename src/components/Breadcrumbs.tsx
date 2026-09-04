import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

export default function Breadcrumbs({
  label,
  path,
  light = false,
}: {
  label: string;
  path: string;
  light?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  };

  const linkClasses = light
    ? "text-paper/60 hover:text-red-light"
    : "text-ink-soft/70 hover:text-red";
  const currentClasses = light ? "text-paper/90" : "text-ink";
  const sepClasses = light ? "text-paper/30" : "text-ink-soft/30";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className={`transition-colors ${linkClasses}`}>
              Home
            </Link>
          </li>
          <li aria-hidden className={sepClasses}>
            /
          </li>
          <li aria-current="page" className={currentClasses}>
            {label}
          </li>
        </ol>
      </nav>
    </>
  );
}
