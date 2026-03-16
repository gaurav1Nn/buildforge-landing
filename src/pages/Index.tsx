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

const Index = () => {
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
