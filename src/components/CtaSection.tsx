import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { AccentHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";

export const CtaSection = () => {
  const ref = useGsapScrollReveal(".cta-content");

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-t border-border bg-foreground/[0.01]">
      <div className="cta-content max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="text-muted-foreground text-sm mb-6 block">
          Applications Open — June 2026
        </span>
        <AccentHeading level="h1">Change your *future.*</AccentHeading>
        <p className="text-muted-foreground mt-6 text-lg">
          The only school where tuition pays for itself.
        </p>
        <div className="flex flex-col items-center gap-8 mt-12">
          <Button variant="cta" className="px-12 py-6 text-lg">
            Reserve Your Spot →
          </Button>
          <Countdown />
          <span className="text-muted-foreground text-sm">
            See you in Cebu, Philippines.
          </span>
        </div>
      </div>
    </section>
  );
};
