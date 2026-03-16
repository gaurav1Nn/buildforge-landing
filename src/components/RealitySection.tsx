// import { SectionHeading } from "@/components/SectionHeading";
// import { Button } from "@/components/ui/button";
// import { useGsapScrollReveal } from "@/hooks/useGsap";

// const oldWay = [
//   ["4 Years", "Spent in a classroom"],
//   ["$200K+", "In student debt"],
//   ["Theory", "Based on outdated textbooks"],
// ];

// const newWay = [
//   ["3 Months", "Of intensive building"],
//   ["0% Equity", "You keep what you build"],
//   ["Real Revenue", "Launch to real customers"],
// ];

// export const RealitySection = () => {
//   const ref = useGsapScrollReveal(".reality-card, .reality-heading");

//   return (
//     <section ref={ref} className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
//       <div className="reality-heading">
//         <SectionHeading label="THE REALITY">
//           You already know the old path *isn't working.*
//         </SectionHeading>
//       </div>

//       <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 mt-16 md:mt-20 items-center">
//         <div className="reality-card space-y-8 p-8 md:p-12 rounded-3xl bg-foreground/[0.02] border border-border">
//           <h3 className="text-destructive font-bold uppercase tracking-widest text-xs">
//             ✕ The Old Way
//           </h3>
//           {oldWay.map(([val, desc]) => (
//             <div key={val}>
//               <div className="text-2xl md:text-3xl font-bold">{val}</div>
//               <div className="text-muted-foreground">{desc}</div>
//             </div>
//           ))}
//         </div>

//         <div className="text-muted-foreground italic text-2xl text-center">vs</div>

//         <div className="reality-card space-y-8 p-8 md:p-12 rounded-3xl bg-foreground/[0.05] border border-foreground/10">
//           <h3 className="text-green-500 font-bold uppercase tracking-widest text-xs">
//             ✓ The BuildForge Way
//           </h3>
//           {newWay.map(([val, desc]) => (
//             <div key={val}>
//               <div className="text-2xl md:text-3xl font-bold">{val}</div>
//               <div className="text-muted-foreground">{desc}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="text-center mt-12">
//         <Button variant="cta" className="px-8 py-5 text-base">
//           Reserve Your Spot →
//         </Button>
//       </div>
//     </section>
//   );
// };

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGsapScrollReveal } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────────────────
const oldWay = [
  {
    val: "4 Years",
    desc: "Spent in a classroom",
    sub: "2,000+ hours of lectures you'll forget",
    icon: "🎓",
  },
  {
    val: "\$200K+",
    desc: "In student debt",
    sub: "Average US graduate debt, 2024",
    icon: "💸",
  },
  {
    val: "Theory",
    desc: "Based on outdated textbooks",
    sub: "Written before TikTok existed",
    icon: "📚",
  },
  {
    val: "0",
    desc: "Real customers on graduation day",
    sub: "A diploma is not a product",
    icon: "🚫",
  },
];

const newWay = [
  {
    val: "12 Weeks",
    desc: "Of intensive, real building",
    sub: "Every day ships something tangible",
    icon: "⚡",
  },
  {
    val: "0% Equity",
    desc: "You keep what you build",
    sub: "No VC strings. No catch.",
    icon: "🔒",
  },
  {
    val: "Live Revenue",
    desc: "Launch to real customers",
    sub: "Week 4 target: first paying user",
    icon: "🚀",
  },
  {
    val: "30",
    desc: "Founders in your cohort",
    sub: "Your co-founders are already here",
    icon: "🤝",
  },
];

// ─── Stat Row ──────────────────────────────────────────────────────────────────
const StatRow = ({
  val,
  desc,
  sub,
  icon,
  side,
}: {
  val: string;
  desc: string;
  sub: string;
  icon: string;
  side: "old" | "new";
}) => (
  <div
    className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300
      hover:bg-foreground/[0.04] ${side === "old" ? "opacity-60 hover:opacity-80" : ""}`}
  >
    {/* Icon bubble */}
    <div
      className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg
        ${
          side === "old"
            ? "bg-red-500/8 border border-red-500/15"
            : "bg-emerald-500/10 border border-emerald-500/20"
        }`}
    >
      {icon}
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span
          className={`text-xl md:text-2xl font-black tracking-tight
            ${side === "old" ? "text-foreground/70" : "text-foreground"}`}
        >
          {val}
        </span>
        <span className="text-sm font-medium text-foreground/60">{desc}</span>
      </div>
      <p className="text-xs text-foreground/30 mt-0.5 truncate">{sub}</p>
    </div>

    {/* Side marker */}
    <div className="shrink-0 mt-1">
      {side === "old" ? (
        <span className="text-red-400/60 text-sm font-bold">✕</span>
      ) : (
        <span className="text-emerald-400 text-sm font-bold">✓</span>
      )}
    </div>
  </div>
);

// ─── Divider with VS ───────────────────────────────────────────────────────────
const VsDivider = () => (
  <div className="flex md:flex-col items-center justify-center gap-3 py-4 md:py-0">
    {/* Top line */}
    <div className="flex-1 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent hidden md:block" />
    {/* VS badge */}
    <div
      className="relative w-10 h-10 rounded-full border border-foreground/15
                    bg-background flex items-center justify-center shrink-0
                    shadow-[0_0_30px_rgba(255,255,255,0.04)]"
    >
      <span className="text-[11px] font-black tracking-widest text-foreground/40">VS</span>
    </div>
    {/* Bottom line */}
    <div className="flex-1 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent hidden md:block" />
  </div>
);

// ─── Main Section ──────────────────────────────────────────────────────────────
export const RealitySection = () => {
  const ref = useGsapScrollReveal(".reality-card, .reality-heading");
  const barRef = useRef<HTMLDivElement>(null);

  // Animate the comparison progress bar on scroll
  useEffect(() => {
    if (!barRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".old-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 80%",
          },
        }
      );
      gsap.fromTo(
        ".new-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 80%",
          },
        }
      );
    }, barRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-36 overflow-hidden">
      {/* ── Section header ── */}
      <div className="reality-heading max-w-7xl mx-auto px-6">
        <SectionHeading label="THE REALITY">
          You already know the old path *isn't working.*
        </SectionHeading>

        {/* Subheading */}
        <p className="mt-4 max-w-xl text-base text-foreground/40 font-light leading-relaxed">
          The university system was designed for the industrial age.
          BuildForge is designed for the age you're actually living in.
        </p>
      </div>

      {/* ── Comparison cards ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-20">
        <div className="grid md:grid-cols-[1fr_48px_1fr] gap-4 md:gap-0 items-stretch">

          {/* ── OLD WAY ── */}
          <div
            className="reality-card relative rounded-3xl overflow-hidden
                          border border-red-500/10 bg-gradient-to-br
                          from-red-950/20 via-background to-background"
          >
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative p-6 md:p-8">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold
                                   tracking-[0.2em] uppercase text-red-400/70 bg-red-500/8
                                   border border-red-500/15 rounded-full px-3 py-1">
                    <span>✕</span> The Old Way
                  </span>
                  <p className="text-xs text-foreground/25 mt-2 ml-0.5">
                    Traditional 4-year degree
                  </p>
                </div>
                {/* Crossed out graduation cap */}
                <div className="w-12 h-12 rounded-2xl bg-red-500/6 border border-red-500/10
                                flex items-center justify-center text-2xl grayscale opacity-50">
                  🎓
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-1">
                {oldWay.map((item) => (
                  <StatRow key={item.val} {...item} side="old" />
                ))}
              </div>

              {/* Bottom outcome bar */}
              <div className="mt-6 pt-5 border-t border-foreground/6">
                <div className="flex items-center justify-between text-xs text-foreground/30 mb-2">
                  <span>Outcome likelihood</span>
                  <span className="text-red-400/60 font-semibold">Low</span>
                </div>
                <div ref={barRef} className="h-1.5 rounded-full bg-foreground/5 overflow-hidden">
                  <div
                    className="old-bar origin-left h-full w-[28%] rounded-full
                                bg-gradient-to-r from-red-500/60 to-red-500/20"
                  />
                </div>
                <p className="text-[10px] text-foreground/20 mt-1.5">
                  Only 28% of grads work in their field of study
                </p>
              </div>
            </div>
          </div>

          {/* ── VS divider ── */}
          <VsDivider />

          {/* ── NEW WAY ── */}
          <div
            className="reality-card relative rounded-3xl overflow-hidden
                          border border-emerald-500/15
                          bg-gradient-to-br from-emerald-950/20 via-background to-background"
          >
            {/* Glow accent */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full
                            bg-emerald-500/8 blur-3xl pointer-events-none" />

            <div className="relative p-6 md:p-8">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold
                                   tracking-[0.2em] uppercase text-emerald-400/90 bg-emerald-500/8
                                   border border-emerald-500/20 rounded-full px-3 py-1">
                    <span>✓</span> The BuildForge Way
                  </span>
                  <p className="text-xs text-foreground/25 mt-2 ml-0.5">
                    12-week founder accelerator
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/8 border border-emerald-500/15
                                flex items-center justify-center text-2xl">
                  ⚡
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-1">
                {newWay.map((item) => (
                  <StatRow key={item.val} {...item} side="new" />
                ))}
              </div>

              {/* Bottom outcome bar */}
              <div className="mt-6 pt-5 border-t border-foreground/6">
                <div className="flex items-center justify-between text-xs text-foreground/30 mb-2">
                  <span>Outcome likelihood</span>
                  <span className="text-emerald-400 font-semibold">High</span>
                </div>
                <div className="h-1.5 rounded-full bg-foreground/5 overflow-hidden">
                  <div
                    className="new-bar origin-left h-full w-[91%] rounded-full
                                bg-gradient-to-r from-emerald-500/80 to-emerald-400/40"
                  />
                </div>
                <p className="text-[10px] text-foreground/20 mt-1.5">
                  91% of cohort alumni ship a product within 90 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom pull quote ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div
          className="relative rounded-3xl border border-foreground/6
                        bg-foreground/[0.02] p-8 md:p-12 overflow-hidden"
        >
          {/* Big background quote mark */}
          <div
            className="absolute -top-4 -left-2 text-[200px] leading-none font-black
                          text-foreground/[0.025] select-none pointer-events-none"
          >
            "
          </div>

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed">
                The best founders didn't wait for permission.
                <span className="text-foreground font-semibold">
                  {" "}They built before they were ready.
                </span>
              </p>
              <p className="text-sm text-foreground/30 mt-4">
                — The BuildForge Manifesto
              </p>
            </div>

            {/* Mini stat cluster */}
            <div className="flex md:flex-col gap-6 md:gap-4 shrink-0">
              {[
                { n: "30", label: "Seats per cohort" },
                { n: "12", label: "Weeks to launch" },
                { n: "\$0", label: "Equity taken" },
              ].map(({ n, label }) => (
                <div key={n} className="text-center">
                  <div className="text-2xl font-black text-foreground/80">{n}</div>
                  <div className="text-[10px] text-foreground/30 tracking-wide uppercase whitespace-nowrap">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="text-center mt-12 space-y-3">
        <Button variant="cta" className="px-10 py-6 text-base font-bold rounded-2xl">
          Choose the BuildForge Way →
        </Button>
        <p className="text-xs text-foreground/25 tracking-wide">
          Limited to 30 founders · Cohort 1 · Cebu, Philippines
        </p>
      </div>
    </section>
  );
};