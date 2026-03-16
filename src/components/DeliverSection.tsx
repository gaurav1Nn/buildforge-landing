// import { SectionHeading } from "@/components/SectionHeading";
// import { useGsapScrollReveal, useGsapTilt, useGsapFloat } from "@/hooks/useGsap";

// const cards = [
//   {
//     title: "Concepts",
//     desc: "Master real-world business frameworks — not theory. Learn pricing, positioning, and growth from founders who've scaled.",
//   },
//   {
//     title: "Community",
//     desc: "Join a tight-knit cohort of ambitious builders. Your co-founders, first hires, and lifelong network start here.",
//   },
//   {
//     title: "Culture",
//     desc: "Immerse yourself in a founder-first environment designed for speed, focus, and relentless execution.",
//   },
// ];

// const features = [
//   { badge: "AI-Native", title: "Built for the AI era", desc: "Every tool, workflow, and project leverages cutting-edge AI to 10x your output." },
//   { badge: "Founder Professors", title: "Learn from operators", desc: "No career academics. Every instructor has built and sold companies." },
//   { badge: "Growing Network", title: "Alumni that compound", desc: "Access a growing global network of founders, investors, and operators." },
// ];

// const DeliverCard = ({ title, desc, index }: { title: string; desc: string; index: number }) => {
//   const cardRef = useGsapTilt(8);
//   const floatRef = useGsapFloat(3, 5);

//   return (
//     <div
//       ref={index === 0 ? floatRef : cardRef}
//       className="deliver-card p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-foreground/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-default group"
//     >
//       <h3 className="text-xl font-bold mb-3 group-hover:text-glow transition-all">{title}</h3>
//       <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{desc}</p>
//     </div>
//   );
// };

// const FeatureItem = ({ badge, title, desc, index }: { badge: string; title: string; desc: string; index: number }) => {
//   const ref = useGsapFloat(2 + index * 0.5, 3 + index * 2);

//   return (
//     <div
//       ref={ref}
//       className="deliver-feature flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 group"
//     >
//       <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground bg-foreground/5 px-3 py-1 rounded-full w-fit group-hover:bg-accent/20 group-hover:text-accent-foreground transition-all duration-300">
//         {badge}
//       </span>
//       <h4 className="text-lg font-bold group-hover:text-glow transition-all">{title}</h4>
//       <p className="text-muted-foreground md:ml-auto md:max-w-md group-hover:text-foreground/80 transition-colors">{desc}</p>
//     </div>
//   );
// };

// export const DeliverSection = () => {
//   const ref = useGsapScrollReveal(".deliver-card, .deliver-heading, .deliver-feature");

//   return (
//     <section ref={ref} className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
//       <div className="deliver-heading">
//         <SectionHeading label="WHAT WE DELIVER">
//           Everything you need to *succeed.*
//         </SectionHeading>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6 mt-16">
//         {cards.map((c, i) => (
//           <DeliverCard key={c.title} title={c.title} desc={c.desc} index={i} />
//         ))}
//       </div>

//       <div className="mt-16 space-y-0 divide-y divide-border">
//         {features.map((f, i) => (
//           <FeatureItem key={f.badge} badge={f.badge} title={f.title} desc={f.desc} index={i} />
//         ))}
//       </div>
//     </section>
//   );
// };
import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal, useGsapTilt, useGsapFloat } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────────────────
const cards = [
  {
    number: "01",
    title: "Concepts",
    tagline: "Think like a founder",
    desc: "Master real-world business frameworks — not theory. Learn pricing, positioning, and growth from founders who've actually scaled.",
    icon: "🧠",
    stat: "40+ frameworks",
    accent: "from-violet-500/10 to-transparent",
    border: "border-violet-500/15 hover:border-violet-500/35",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]",
  },
  {
    number: "02",
    title: "Community",
    tagline: "Your network, compounded",
    desc: "Join a tight-knit cohort of ambitious builders. Your co-founders, first hires, and lifelong network start here.",
    icon: "🤝",
    stat: "30 founders / cohort",
    accent: "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/15 hover:border-cyan-500/35",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]",
  },
  {
    number: "03",
    title: "Culture",
    tagline: "Ship before you're ready",
    desc: "Immerse yourself in a founder-first environment designed for relentless speed, deep focus, and ruthless execution.",
    icon: "⚡",
    stat: "12 weeks, 0 fluff",
    accent: "from-amber-500/10 to-transparent",
    border: "border-amber-500/15 hover:border-amber-500/35",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]",
  },
];

const features = [
  {
    badge: "AI-Native",
    number: "01",
    title: "Built for the AI era",
    desc: "Every tool, workflow, and project leverages cutting-edge AI to 10x your output from day one.",
    metric: "10×",
    metricLabel: "output multiplier",
    icon: "✦",
    color: "text-violet-400",
    bg: "bg-violet-500/8 border-violet-500/15",
  },
  {
    badge: "Founder Professors",
    number: "02",
    title: "Learn from operators",
    desc: "No career academics. Every instructor has built, scaled, and sold companies. Zero theory, all scar tissue.",
    metric: "100%",
    metricLabel: "active founders",
    icon: "◆",
    color: "text-cyan-400",
    bg: "bg-cyan-500/8 border-cyan-500/15",
  },
  {
    badge: "Global Network",
    number: "03",
    title: "Alumni that compound",
    desc: "Access a growing global network of founders, investors, and operators who open doors that don't exist elsewhere.",
    metric: "∞",
    metricLabel: "network value",
    icon: "●",
    color: "text-amber-400",
    bg: "bg-amber-500/8 border-amber-500/15",
  },
];

// ─── Pillar Card ───────────────────────────────────────────────────────────────
const DeliverCard = ({
  number,
  title,
  tagline,
  desc,
  icon,
  stat,
  accent,
  border,
  glow,
  index,
}: (typeof cards)[0] & { index: number }) => {
  const cardRef = useGsapTilt(6);
  const floatRef = useGsapFloat(3, 5);
  const ref = index === 0 ? floatRef : cardRef;

  return (
    <div
      ref={ref}
      className={`deliver-card group relative rounded-3xl border ${border} ${glow}
                  bg-gradient-to-br ${accent} via-background to-background
                  overflow-hidden cursor-default transition-all duration-500 p-7 md:p-8 opacity-100`}
    >
      {/* Large background number */}
      <div
        className="absolute -top-2 -right-1 text-[7rem] leading-none font-black
                   text-foreground/[0.04] select-none pointer-events-none transition-all
                   duration-500 group-hover:text-foreground/[0.07]"
      >
        {number}
      </div>

      {/* Top row — icon + stat badge */}
      <div className="flex items-start justify-between mb-8 relative">
        <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/8
                        flex items-center justify-center text-2xl
                        group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase
                         text-foreground/35 bg-foreground/5 border border-foreground/8
                         rounded-full px-3 py-1">
          {stat}
        </span>
      </div>

      {/* Text */}
      <div className="relative space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground/60">
          {tagline}
        </p>
        <h3 className="text-2xl font-black tracking-tight text-foreground">{title}</h3>
        <p className="text-sm text-foreground/70 leading-relaxed pt-1">{desc}</p>
      </div>

      {/* Bottom hover arrow */}
      <div className="flex items-center gap-2 mt-6 text-xs font-semibold text-foreground/50
                      group-hover:text-foreground transition-colors duration-300">
        <span>Explore</span>
        <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </div>
    </div>
  );
};

// ─── Feature Row ───────────────────────────────────────────────────────────────
const FeatureItem = ({
  badge,
  number,
  title,
  desc,
  metric,
  metricLabel,
  icon,
  color,
  bg,
  index,
}: (typeof features)[0] & { index: number }) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="deliver-feature group relative">
      {/* Animated separator line */}
      <div
        ref={lineRef}
        className="origin-left h-px w-full bg-gradient-to-r from-foreground/10
                   via-foreground/6 to-transparent mb-0"
      />

      <div
        className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-10
                   items-center py-7 px-2 rounded-2xl
                   hover:bg-foreground/[0.025] transition-all duration-300 -mx-2 px-2"
      >
        {/* Left — number + badge + title */}
        <div className="flex items-center gap-4 md:min-w-[280px]">
          {/* Icon bubble */}
          <div
            className={`shrink-0 w-10 h-10 rounded-xl border ${bg}
                          flex items-center justify-center ${color} font-black text-sm
                          group-hover:scale-110 transition-transform duration-300`}
          >
            {icon}
          </div>

          <div>
            <span
              className={`text-[10px] font-bold tracking-[0.2em] uppercase ${color}
                           group-hover:opacity-100 transition-opacity`}
            >
              {badge}
            </span>
            <h4 className="text-base font-bold text-foreground
                           group-hover:text-foreground transition-colors duration-200 mt-0.5">
              {title}
            </h4>
          </div>
        </div>

        {/* Center — description */}
        <p className="text-sm text-foreground/70 leading-relaxed
                      group-hover:text-foreground transition-colors duration-300 max-w-lg">
          {desc}
        </p>

        {/* Right — metric */}
        <div className="text-right shrink-0">
          <div className={`text-3xl font-black ${color}
                           group-hover:opacity-100 transition-all duration-300
                           group-hover:scale-110 inline-block`}>
            {metric}
          </div>
          <div className="text-[10px] text-foreground/50 tracking-wide uppercase mt-0.5 whitespace-nowrap">
            {metricLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
export const DeliverSection = () => {
  const ref = useGsapScrollReveal(".deliver-card");

  return (
    <section ref={ref} className="py-24 md:py-36 overflow-visible">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="deliver-heading flex flex-col md:flex-row md:items-end justify-between gap-6 opacity-100">
          <SectionHeading label="WHAT WE DELIVER">
            Everything you need to *succeed.*
          </SectionHeading>

          {/* Sub-copy beside the heading on desktop */}
          <p className="text-sm text-foreground/70 max-w-xs leading-relaxed md:text-right shrink-0">
            Three pillars. One obsession.
            <br />
            <span className="text-foreground font-medium">Build companies, not CVs.</span>
          </p>
        </div>

        {/* ── Three pillars ── */}
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {cards.map((c, i) => (
            <DeliverCard key={c.title} {...c} index={i} />
          ))}
        </div>

        {/* ── Divider with label ── */}
        <div className="flex items-center gap-4 mt-20 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/50 shrink-0">
            What sets us apart
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        </div>

        {/* ── Feature rows ── */}
        <div className="mt-2">
          {features.map((f, i) => (
            <FeatureItem key={f.badge} {...f} index={i} />
          ))}
          {/* Final separator */}
          <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/10 to-transparent" />
        </div>

        {/* ── Bottom CTA band ── */}
        <div
          className="mt-16 rounded-3xl border border-foreground/15
                        bg-gradient-to-r from-foreground/[0.05] via-foreground/[0.03] to-transparent
                        p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left copy */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/50 mb-2">
              Ready to build?
            </p>
            <p className="text-xl font-bold text-foreground">
              30 seats. One shot.{" "}
              <span className="text-foreground/70 font-light">Don't watch from the sideline.</span>
            </p>
          </div>

          {/* Right — mini stat row */}
          <div className="flex items-center gap-8 shrink-0">
            {[
              { n: "12", label: "Weeks" },
              { n: "30", label: "Founders" },
              { n: "$0", label: "Equity" },
            ].map(({ n, label }) => (
              <div key={n} className="text-center">
                <div className="text-2xl font-black text-foreground">{n}</div>
                <div className="text-[10px] text-foreground/60 tracking-widest uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};