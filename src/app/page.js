"use client";
import Features from "@/components/features/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Characteristics from "@/components/Characteristics";
import VideoShowcase from "@/components/VideoShowcase";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import FooterCTA from "@/components/FooterCTA";
import BackToTopButton from "@/components/ui/BackToTopButton";
import BackgroundBeamsWithCollision from "@/components/hero-components/BackgroundBeams";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full relative">
        <BackgroundBeamsWithCollision>
          <Hero />
        </BackgroundBeamsWithCollision>
        <Features />
        <Pricing />
        <Characteristics />
        <VideoShowcase />
        <FAQs />
        <Contact />
      </main>
      <FooterCTA />
      <BackToTopButton scrollThreshold={180} />
    </>
  );
}
