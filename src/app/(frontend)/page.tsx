import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Priorities from "@/components/Priorities";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work";
import PersonalStory from "@/components/PersonalStory";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Revalidate periodically so new gallery photos added in the CMS show up
// without requiring a full redeploy.
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Priorities />
        <About />
        <Journey />
        <Work />
        <PersonalStory />
        <Gallery />
        <Achievements />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
