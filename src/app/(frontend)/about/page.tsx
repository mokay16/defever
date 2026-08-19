import type { Metadata } from "next";
import About from "@/components/About";
import PersonalStory from "@/components/PersonalStory";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "About",
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
