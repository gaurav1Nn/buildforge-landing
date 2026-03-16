// import { Button } from "@/components/ui/button";
// import { Countdown } from "@/components/Countdown";
// import { AccentHeading } from "@/components/SectionHeading";
// import { useGsapHeroEntrance, useGsapMagnetic, useGsapFloat } from "@/hooks/useGsap";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// // Floating particles component
// const FloatingParticles = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const particles = containerRef.current.querySelectorAll(".particle");
//     const ctx = gsap.context(() => {
//       particles.forEach((particle) => {
//         const duration = 8 + Math.random() * 8;
//         const x = (Math.random() - 0.5) * 200;
//         const y = (Math.random() - 0.5) * 200;

//         gsap.to(particle, {
//           x,
//           y,
//           rotation: (Math.random() - 0.5) * 360,
//           duration,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           delay: Math.random() * 2,
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="particle absolute w-1 h-1 bg-foreground/10 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Magnetic button wrapper
// const MagneticButton = ({ children, variant = "cta", className = "" }: { children: React.ReactNode; variant?: string; className?: string }) => {
//   const ref = useGsapMagnetic(0.4);

//   return (
//     <div ref={ref} className="inline-block">
//       <Button variant={variant as any} className={className}>
//         {children}
//       </Button>
//     </div>
//   );
// };

// export const HeroSection = () => {
//   const ref = useGsapHeroEntrance();
//   const badgeRef = useGsapFloat(4, 5);

//   return (
//     <section className="relative h-svh flex items-center justify-center overflow-hidden">
//       {/* Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover scale-105"
//         poster="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
//       >
//         <source src="" type="video/mp4" />
//       </video>

//       {/* Gradient Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/95" />
//       <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent animate-pulse-slow" />
//       <div className="absolute inset-0 bg-gradient-mesh" />

//       {/* Floating Particles */}
//       <FloatingParticles />

//       {/* Main Content */}
//       <div ref={ref} className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
//         {/* Badge with float animation */}
//         <div ref={badgeRef} className="hero-badge mb-8 px-4 py-1.5 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-foreground animate-glow">
//           Cebu, Philippines · Cohort 1 · Applications Open
//         </div>

//         {/* Main Heading with glow effect */}
//         <div className="hero-heading">
//           <AccentHeading level="h1" className="text-glow">
//             BuildForge is the entrepreneurship school of the *future.*
//           </AccentHeading>
//         </div>

//         {/* Buttons with magnetic effect */}
//         <div className="hero-buttons flex flex-col sm:flex-row gap-4 mt-10">
//           <MagneticButton variant="cta" className="px-8 py-6 text-base animate-glow">
//             Reserve Your Spot →
//           </MagneticButton>
//           <MagneticButton variant="cta-ghost" className="px-8 py-6 text-base">
//             Learn More
//           </MagneticButton>
//         </div>

//         {/* Countdown */}
//         <div className="hero-countdown mt-12">
//           <Countdown />
//         </div>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/Countdown";
import { useGsapHeroEntrance, useGsapMagnetic, useGsapFloat } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// ─── Animated Grid Lines ───────────────────────────────────────────────────────
const GridLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--foreground)/0.08) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--foreground)/0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  </div>
);

// ─── Floating Orbs ─────────────────────────────────────────────────────────────
const FloatingOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const orbs = containerRef.current.querySelectorAll(".orb");
    const ctx = gsap.context(() => {
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: `${-40 - i * 10}px`,
          x: `${(Math.random() - 0.5) * 60}px`,
          duration: 6 + i * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.8,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ambient orb — top left */}
      <div className="orb absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
      {/* Medium orb — bottom right */}
      <div className="orb absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-cyan-400/8 blur-[100px]" />
      {/* Small accent orb — center */}
      <div className="orb absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-amber-400/6 blur-[80px]" />

      {/* Tiny glinting stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
};

// ─── Magnetic Button ───────────────────────────────────────────────────────────
const MagneticButton = ({
  children,
  variant = "cta",
  className = "",
}: {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}) => {
  const ref = useGsapMagnetic(0.4);
  return (
    <div ref={ref} className="inline-block">
      <Button variant={variant as any} className={className}>
        {children}
      </Button>
    </div>
  );
};

// ─── Scroll Indicator ──────────────────────────────────────────────────────────
const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
    <span className="text-[10px] tracking-[0.3em] uppercase text-foreground">Scroll</span>
    <div className="w-px h-10 bg-gradient-to-b from-foreground to-transparent animate-pulse" />
  </div>
);

// ─── Hero Section ──────────────────────────────────────────────────────────────
export const HeroSection = () => {
  const ref = useGsapHeroEntrance();
  const badgeRef = useGsapFloat(4, 5);

  return (
    <section className="relative h-svh flex items-center justify-center overflow-hidden bg-background">
      {/* Video / Poster Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-30"
        poster="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
      >
        <source src="" type="video/mp4" />
      </video>

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Visual Layers */}
      <GridLines />
      <FloatingOrbs />

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div
        ref={ref}
        className="relative z-10 max-w-5xl w-full px-6 text-center flex flex-col items-center pt-24"
      >
        {/* ── Eyebrow Badge ── */}
        <div
          ref={badgeRef}
          className="hero-badge mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     border border-foreground/15 bg-foreground/5 backdrop-blur-md
                     text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/70"
        >
          {/* Pulsing dot */}
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Cebu, Philippines · Cohort 1 · Applications Open
        </div>

        {/* ── Main Headline ── */}
        <div className="hero-heading mb-6">
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-foreground/35 mb-5">
            A New Kind of School
          </p>

          <h1 className="font-black leading-[0.9] tracking-tight">
            {/* Line 1 — ghost / outlined */}
            <span
              className="block text-[clamp(4rem,10vw,9rem)]"
              style={{
                WebkitTextStroke: "1.5px hsl(var(--foreground)/0.22)",
                color: "transparent",
              }}
            >
              Build the
            </span>

            {/* Line 2 — filled, slightly indented for visual tension */}
            <span
              className="block text-[clamp(4rem,10vw,9rem)] pl-[0.08em]
                         bg-gradient-to-br from-white via-white/90 to-white/50
                         bg-clip-text text-transparent drop-shadow-[0_2px_40px_rgba(255,255,255,0.15)]"
            >
              Future.
            </span>
          </h1>

          <p className="mt-7 max-w-lg mx-auto text-base sm:text-[17px] text-foreground/45
                        font-light leading-relaxed tracking-wide">
            BuildForge is where bold founders are forged —{" "}
            <em className="not-italic text-foreground/75 font-medium">
              12 weeks of raw, real-world entrepreneurship
            </em>{" "}
            in the heart of Southeast Asia.
          </p>
        </div>

        {/* ── Social Proof Strip ── */}
        <div className="hero-social flex items-center gap-6 my-8">
          {/* Avatars */}
          <div className="flex -space-x-2">
            {[
              "https://i.pravatar.cc/32?img=1",
              "https://i.pravatar.cc/32?img=5",
              "https://i.pravatar.cc/32?img=12",
              "https://i.pravatar.cc/32?img=20",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <div className="h-4 w-px bg-foreground/15" />
          <p className="text-xs text-foreground/50">
            <span className="text-foreground/80 font-semibold">47 founders</span> already applied
          </p>
          <div className="h-4 w-px bg-foreground/15" />
          {/* Stars */}
          <div className="flex items-center gap-1">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-amber-400 text-xs">{s}</span>
            ))}
            <span className="text-xs text-foreground/50 ml-1">5.0</span>
          </div>
        </div>

        {/* ── CTAs ── */}
        <div className="hero-buttons flex flex-col sm:flex-row items-center gap-3 mt-2">
          <MagneticButton
            variant="cta"
            className="px-8 py-6 text-sm font-bold tracking-wide rounded-xl"
          >
            Reserve Your Spot →
          </MagneticButton>
          <MagneticButton
            variant="cta-ghost"
            className="px-8 py-6 text-sm font-medium tracking-wide rounded-xl"
          >
            Watch the Film ▶
          </MagneticButton>
        </div>

        {/* ── Fine print ── */}
        <p className="mt-4 text-[11px] text-foreground/25 tracking-wide">
          Limited to 30 founders · No tuition · Equity-free
        </p>

        {/* ── Countdown ── */}
        <div className="hero-countdown mt-12 w-full">
          {/* Label */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 mb-3">
            Applications close in
          </p>
          <Countdown />
        </div>
      </div>

      {/* Scroll hint */}
      <ScrollIndicator />
    </section>
  );
};