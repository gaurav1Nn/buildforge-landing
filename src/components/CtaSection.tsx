import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { AccentHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal, useGsapMagnetic, useGsapFloat } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReserveModal } from "@/lib/ModalContext";

// Floating background particles
const CtaParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll(".cta-particle");
    const ctx = gsap.context(() => {
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: (Math.random() - 0.5) * 60,
          x: (Math.random() - 0.5) * 60,
          opacity: 0.3 + Math.random() * 0.4,
          duration: 3 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="cta-particle absolute w-1.5 h-1.5 bg-foreground/5 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Magnetic CTA Button
const MagneticCtaButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  const ref = useGsapMagnetic(0.5);
  const floatRef = useGsapFloat(2, 3);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div ref={floatRef as React.RefObject<HTMLDivElement>}>
        <Button variant="cta" className="px-12 py-6 text-lg animate-glow" onClick={onClick}>
          {children}
        </Button>
      </div>
    </div>
  );
};

export const CtaSection = () => {
  const ref = useGsapScrollReveal(".cta-content");
  const { open } = useReserveModal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 border-t border-border bg-foreground/[0.01] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      <CtaParticles />

      <div className="cta-content max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <span className="text-muted-foreground text-sm mb-6 block animate-fade-in">
          Applications Open — June 2026
        </span>
        <AccentHeading level="h1" className="text-glow">
          Change your *future.*
        </AccentHeading>
        <p className="text-muted-foreground mt-6 text-lg max-w-xl">
          The only school where tuition pays for itself.
        </p>
        <div className="flex flex-col items-center gap-8 mt-12">
          <MagneticCtaButton onClick={open}>Reserve Your Spot →</MagneticCtaButton>
          <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-border backdrop-blur-sm">
            <Countdown />
          </div>
          <span className="text-muted-foreground text-sm animate-pulse">
            See you in Bali, Indonesia.
          </span>
        </div>
      </div>
    </section>
  );
};
