import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteTitle = "Kathleen Defever for Tiburon Town Council";
const siteDescription =
  "Kathleen Defever is running for Tiburon Town Council in 2026 — Planning Commissioner, Rotary President, and over 8 years of service to the Tiburon community.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description:
      "Planning Commissioner, Rotary President, and over 8 years of service to the Tiburon community.",
    url: SITE_URL,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Planning Commissioner, Rotary President, and over 8 years of service to the Tiburon community.",
  },
};

// Site-wide structured data. Schema.org has no dedicated "political
// campaign" type, so this pairs an Organization (the campaign, with the
// same name/address/url a LocalBusiness listing would carry) with a
// Person entry for the candidate herself.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteTitle,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address[0]}, ${site.address[1]}`,
    addressLocality: "Tiburon",
    addressRegion: "CA",
    postalCode: "94920",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: site.candidateName,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.candidateName,
  jobTitle: site.occupationTitle,
  url: SITE_URL,
  description: siteDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
