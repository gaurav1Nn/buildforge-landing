import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { AccentHeading } from "@/components/SectionHeading";

export const HeroSection = () => (
  <section className="relative h-svh flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover scale-105"
      poster="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
    >
      <source src="" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-background/60 backdrop-brightness-75" />

    <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
      <div className="mb-8 px-4 py-1.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-foreground">
        Cebu, Philippines · Cohort 1 · Applications Open
      </div>

      <AccentHeading level="h1">
        BuildForge is the entrepreneurship school of the *future.*
      </AccentHeading>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button variant="cta" className="px-8 py-6 text-base">
          Reserve Your Spot →
        </Button>
        <Button variant="cta-ghost" className="px-8 py-6 text-base">
          Learn More
        </Button>
      </div>

      <div className="mt-12">
        <Countdown />
      </div>
    </div>
  </section>
);
