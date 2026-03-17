import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { RealitySection } from "@/components/RealitySection";
import { MentorSection } from "@/components/MentorSection";
import { DeliverSection } from "@/components/DeliverSection";
import { LocationSection } from "@/components/LocationSection";
import { IncludedSection } from "@/components/IncludedSection";
import { PathsSection } from "@/components/PathsSection";
import { JourneySection } from "@/components/JourneySection";
import { OutcomeSection } from "@/components/OutcomeSection";
import { CtaSection } from "@/components/CtaSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        // Skip the hero — it animates on mount
        if (i === 0) return;

        // Check if section is already in view on load — skip animation if so
        const rect = section.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight;

        if (alreadyVisible) {
          gsap.set(section, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              // Fire as soon as the section top enters the bottom of the viewport
              start: "top 100%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <RealitySection />
      <MentorSection />
      <DeliverSection />
      <LocationSection />
      <IncludedSection />
      <PathsSection />
      <JourneySection />
      <OutcomeSection />
      <CtaSection />
      <ProcessSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
