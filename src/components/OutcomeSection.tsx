import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  {
    title: "A founder community",
    desc: "A network of ambitious operators who will be your co-founders, advisors, and first customers for the next decade.",
  },
  {
    title: "Global awareness",
    desc: "A worldview shaped by building in Asia, selling globally, and understanding markets most founders never see.",
  },
  {
    title: "A real business",
    desc: "Not a pitch deck. Not a prototype. A company making real money from real customers.",
  },
];

export const OutcomeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-out='heading']",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-out='heading']", start: "top 85%" },
        }
      );

      gsap.fromTo(
        "[data-out='item']",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-out='grid']",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top divider ── */}
        <div className="h-px w-full bg-white/[0.06] mb-20" />

        {/* ── Header ── */}
        <div data-out="heading" className="grid lg:grid-cols-2 gap-6 mb-20">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
              The Outcome
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              What you leave
              <br />
              BravioSchool with.
            </h2>
          </div>
          <div className="lg:flex lg:items-end lg:justify-end">
            <p className="text-base text-white/45 leading-relaxed max-w-sm lg:text-right">
              Not certificates. Not "learnings."
              Three things that actually change your trajectory.
            </p>
          </div>
        </div>

        {/* ── Three outcomes ── */}
        <div data-out="grid" className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {outcomes.map((o, i) => (
            <div
              key={o.title}
              data-out="item"
              className="group bg-[hsl(0,0%,4%)] p-8 md:p-10
                         hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
            >
              {/* Large number */}
              <span className="block text-[4rem] md:text-[5rem] font-bold leading-none
                              text-white/[0.06] mb-6
                              group-hover:text-white/[0.1] transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                {o.title}
              </h3>

              {/* Line accent */}
              <div className="h-px w-8 bg-white/15 mb-4
                              group-hover:w-12 group-hover:bg-white/30
                              transition-all duration-400" />

              {/* Description */}
              <p className="text-[14px] text-white/45 leading-relaxed
                            group-hover:text-white/60 transition-colors duration-300">
                {o.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Footnote ── */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center
                        sm:justify-between gap-3">
          <p className="text-sm text-white/25">
            Every cohort graduate leaves with all three.
          </p>
          <p className="text-sm text-white/25">
            <span className="text-white/50">100%</span> of founders ship before graduation
          </p>
        </div>
      </div>
    </section>
  );
};