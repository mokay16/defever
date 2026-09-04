import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kathleen Defever's campaign for Tiburon Town Council.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
