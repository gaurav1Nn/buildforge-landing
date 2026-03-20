import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useGsapScrollReveal } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReserveModal } from "@/lib/ModalContext";

gsap.registerPlugin(ScrollTrigger);

// ─── New Way Data ──────────────────────────────────────────────────────────────
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

// ─── New Way Stat Row ──────────────────────────────────────────────────────────
const NewStatRow = ({
  val, desc, sub, icon,
}: {
  val: string; desc: string; sub: string; icon: string;
}) => (
  <div className="group flex items-start gap-4 p-4 rounded-2xl
                  transition-all duration-300 hover:bg-white/[0.03]">
    <div
      className="shrink-0 w-10 h-10 rounded-xl flex items-center
                 justify-center text-lg"
      style={{
        background: "rgba(16,185,129,0.1)",
        border: "1px solid rgba(16,185,129,0.2)",
      }}
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-xl md:text-2xl font-black tracking-tight text-white">
          {val}
        </span>
        <span style={{ color: "rgba(255,255,255,0.55)" }} className="text-sm font-medium">
          {desc}
        </span>
      </div>
      <p className="text-xs mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.28)" }}>
        {sub}
      </p>
    </div>
    <div className="shrink-0 mt-1 text-sm font-bold" style={{ color: "#34d399" }}>
      ✓
    </div>
  </div>
);

// ─── VS Divider ───────────────────────────────────────────────────────────────
const VsDivider = () => (
  <div className="flex md:flex-col items-center justify-center gap-3 py-4 md:py-0">
    <div
      className="flex-1 w-px hidden md:block"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)",
      }}
    />
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        background: "#080808",
        boxShadow: "0 0 30px rgba(255,255,255,0.03)",
      }}
    >
      <span
        className="text-[11px] font-black tracking-widest"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        VS
      </span>
    </div>
    <div
      className="flex-1 w-px hidden md:block"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)",
      }}
    />
  </div>
);

// ─── OLD WAY — Certificate Design ─────────────────────────────────────────────
const OldWayCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-line",
        { opacity: 0, y: 6 },
        {
          opacity: 1, y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".old-bar",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 82%" },
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reality-card relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0f0c08 0%, #100e09 60%, #0a0908 100%)",
        border: "1px solid rgba(210,170,80,0.15)",
      }}
    >
      {/* Aged lined paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(210,170,80,0.5) 0px, rgba(210,170,80,0.5) 1px,
            transparent 1px, transparent 28px
          )`,
        }}
      />

      {/* Corner ornaments */}
      {[
        "top-4 left-4", "top-4 right-4",
        "bottom-4 left-4", "bottom-4 right-4",
      ].map((pos) => (
        <div
          key={pos}
          className={`absolute ${pos} w-7 h-7 pointer-events-none`}
          style={{ opacity: 0.25 }}
        >
          <svg viewBox="0 0 28 28" fill="none">
            <path
              d="M1 10 L1 1 L10 1"
              stroke="rgba(210,170,80,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}

      {/* Faded ✕ watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   text-[220px] leading-none font-black select-none pointer-events-none"
        style={{
          color: "rgba(255,60,60,0.04)",
          transform: "translate(-50%, -50%) rotate(-15deg)",
        }}
      >
        ✕
      </div>

      <div className="relative p-6 md:p-8">

        {/* ── Seal row ── */}
        <div className="cert-line flex items-center justify-between mb-6">
          {/* Left seal */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center
                       text-xl"
            style={{
              border: "1.5px solid rgba(210,170,80,0.2)",
              background: "rgba(210,170,80,0.04)",
              color: "rgba(210,170,80,0.4)",
            }}
          >
            🏛️
          </div>

          {/* Center — university name */}
          <div className="text-center">
            <p
              className="text-[9px] font-bold tracking-[0.35em] uppercase"
              style={{ color: "rgba(210,170,80,0.35)" }}
            >
              University of Broken Promises
            </p>
            <p
              className="text-[8px] tracking-[0.2em] mt-0.5"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              Est. 1850 · Still using the same curriculum
            </p>
          </div>

          {/* Right — VOID stamp */}
          <div
            className="px-2.5 py-1 rounded text-[9px] font-black tracking-[0.2em]
                       uppercase"
            style={{
              border: "1.5px solid rgba(255,60,60,0.25)",
              color: "rgba(255,60,60,0.3)",
              transform: "rotate(8deg)",
            }}
          >
            VOID
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="cert-line h-px w-full mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(210,170,80,0.2), transparent)",
          }}
        />

        {/* ── Certificate title ── */}
        <div className="cert-line text-center mb-6">
          <p
            className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
            style={{ color: "rgba(210,170,80,0.3)" }}
          >
            Certificate of Completion
          </p>
          <h3
            className="text-lg md:text-xl font-black leading-snug"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            This certifies that you have
            <br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              successfully wasted
            </span>
          </h3>
          <div
            className="text-4xl md:text-5xl font-black tracking-tight mt-2"
            style={{ color: "rgba(255,80,80,0.7)" }}
          >
            4 Years
          </div>
          <p
            className="text-sm mt-1 font-light italic"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            of your most productive years
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          className="cert-line h-px w-full mb-5"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(210,170,80,0.15), transparent)",
          }}
        />

        {/* ── The real receipts — what you actually got ── */}
        <div className="space-y-3 mb-6">
          {[
            {
              label: "Hours sat in lectures",
              value: "2,400 hrs",
              note: "memorised, regurgitated, forgotten",
              icon: "😴",
            },
            {
              label: "Hours of useless theory",
              value: "1,800 hrs",
              note: "textbooks written before smartphones existed",
              icon: "📚",
            },
            {
              label: "Real products built",
              value: "0",
              note: "zero customers, zero proof of work",
              icon: "🕳️",
            },
            {
              label: "Skills used in first job",
              value: "14%",
              note: "86% of what you learned — irrelevant",
              icon: "⏳",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className="cert-line flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: i % 2 === 0
                  ? "rgba(255,255,255,0.015)"
                  : "transparent",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {/* Icon */}
              <span className="text-base shrink-0 grayscale opacity-60">
                {item.icon}
              </span>

              {/* Label + note */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[11px] truncate"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  {item.note}
                </p>
              </div>

              {/* Value */}
              <span
                className="text-sm font-black font-mono shrink-0"
                style={{ color: "rgba(255,100,100,0.6)" }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* ── Outcome bar ── */}
        <div ref={cardRef}>
          <div className="cert-line flex items-center justify-between mb-2">
            <span
              className="text-[11px] font-medium tracking-[0.1em] uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Skills actually used after graduation
            </span>
            <span
              className="text-[11px] font-black"
              style={{ color: "rgba(255,80,80,0.6)" }}
            >
              14%
            </span>
          </div>
          <div
            className="cert-line h-1.5 w-full rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="old-bar h-full rounded-full"
              style={{
                width: "14%",
                background:
                  "linear-gradient(90deg, rgba(255,60,60,0.8), rgba(255,100,60,0.35))",
              }}
            />
          </div>
          <p
            className="cert-line text-[10px] mt-1.5"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            86% of university coursework has no relevance to your first job
          </p>
        </div>

        {/* ── Signature row ── */}
        <div
          className="cert-line flex items-end justify-between mt-6 pt-5"
          style={{
            borderTop: "1px solid rgba(210,170,80,0.08)",
          }}
        >
          {/* Signature left */}
          <div>
            <p
              className="text-base font-black italic mb-0.5"
              style={{
                color: "rgba(210,170,80,0.2)",
                fontFamily: "Georgia, serif",
              }}
            >
              Dean of Debt
            </p>
            <div
              className="h-px w-24"
              style={{ background: "rgba(210,170,80,0.15)" }}
            />
            <p
              className="text-[9px] mt-1 tracking-[0.15em] uppercase"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              Authorised signatory
            </p>
          </div>

          {/* Right — NOT RECOMMENDED stamp */}
          <div
            className="px-3 py-1.5 rounded-lg text-[9px] font-black
                       tracking-[0.18em] uppercase"
            style={{
              border: "1.5px solid rgba(255,60,60,0.2)",
              color: "rgba(255,60,60,0.28)",
              transform: "rotate(-3deg)",
            }}
          >
            Not recommended
          </div>
        </div>

      </div>
    </div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
export const RealitySection = () => {
  const ref = useGsapScrollReveal(".reality-card, .reality-heading");
  const newBarRef = useRef<HTMLDivElement>(null);
  const { open } = useReserveModal();

  useEffect(() => {
    if (!newBarRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".new-bar",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: newBarRef.current, start: "top 82%" },
        }
      );
    }, newBarRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-36 overflow-hidden">

      {/* ── Header ── */}
      <div className="reality-heading max-w-7xl mx-auto px-6">
        <SectionHeading label="THE REALITY">
          You already know the old path *isn't working.*
        </SectionHeading>
        <p
          className="mt-4 max-w-xl text-base font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          The university system was designed for the industrial age.
          BravioSchool is designed for the age you're actually living in.
        </p>
      </div>

      {/* ── Comparison grid ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-20">
        <div className="grid md:grid-cols-[1fr_48px_1fr] gap-4 md:gap-0 items-stretch">

          {/* OLD WAY */}
          <OldWayCard />

          {/* VS */}
          <VsDivider />

          {/* NEW WAY */}
          <div
            className="reality-card relative rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, #080808 50%, #080808 100%)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full
                         pointer-events-none blur-3xl"
              style={{ background: "rgba(16,185,129,0.07)" }}
            />

            <div className="relative p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold
                               tracking-[0.2em] uppercase rounded-full px-3 py-1"
                    style={{
                      color: "rgba(52,211,153,0.9)",
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    ✓ The BravioSchool Way
                  </span>
                  <p
                    className="text-xs mt-2 ml-0.5"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    12-week founder accelerator
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.15)",
                  }}
                >
                  ⚡
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-1">
                {newWay.map((item) => (
                  <NewStatRow key={item.val} {...item} />
                ))}
              </div>

              {/* Outcome bar */}
              <div ref={newBarRef} className="mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    Outcome likelihood
                  </span>
                  <span
                    className="text-[11px] font-semibold"
                    style={{ color: "#34d399" }}
                  >
                    High
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="new-bar h-full rounded-full"
                    style={{
                      width: "91%",
                      background:
                        "linear-gradient(90deg, rgba(16,185,129,0.8), rgba(52,211,153,0.35))",
                    }}
                  />
                </div>
                <p
                  className="text-[10px] mt-1.5"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  91% of cohort alumni ship a product within 90 days
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Pull quote ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <div
            className="absolute -top-4 -left-2 text-[200px] leading-none font-black
                       select-none pointer-events-none"
            style={{ color: "rgba(255,255,255,0.02)" }}
          >
            "
          </div>
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p
                className="text-xl md:text-2xl font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                The best founders didn't wait for permission.
                <span className="text-white font-semibold">
                  {" "}They built before they were ready.
                </span>
              </p>
              <p
                className="text-sm mt-4"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                — The BravioSchool Manifesto
              </p>
            </div>
            <div className="flex md:flex-col gap-6 md:gap-4 shrink-0">
              {[
                { n: "30", label: "Seats per cohort" },
                { n: "12", label: "Weeks to launch" },
                { n: "$0", label: "Equity taken" },
              ].map(({ n, label }) => (
                <div key={n} className="text-center">
                  <div className="text-2xl font-black text-white">{n}</div>
                  <div
                    className="text-[10px] tracking-wide uppercase whitespace-nowrap mt-0.5"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
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
        <Button variant="cta" className="px-10 py-6 text-base font-bold rounded-2xl" onClick={open}>
          Choose the BravioSchool Way →
        </Button>
        <p
          className="text-xs tracking-wide"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          Limited to 30 founders · Cohort 1 · Bali, Indonesia
        </p>
      </div>

    </section>
  );
};