import type { Metadata } from "next";
import About from "@/components/About";
import PersonalStory from "@/components/PersonalStory";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kathleen Defever: her record of service on the Tiburon Planning Commission, her personal story, and photos from the campaign.",
  alternates: { canonical: "/about" },
};

// Revalidate periodically so new gallery photos added in the CMS show up
// without requiring a full redeploy.
export const revalidate = 60;

export default function AboutPage() {
  return (
    <>
      <About />
      <PersonalStory />
      <Gallery />
    </>
  );
}
