import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Priorities from "@/components/Priorities";
import About from "@/components/About";
import Work from "@/components/Work";
import PersonalStory from "@/components/PersonalStory";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Priorities />
        <About />
        <Work />
        <PersonalStory />
        <Gallery />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
