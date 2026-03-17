import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Business Blueprint",
    desc: "Structured framework to validate, build, and launch your startup from zero to revenue.",
  },
  {
    title: "Weekly Workshops",
    desc: "Growth, product, and fundraising deep-dives led by real operators — not professors.",
  },
  {
    title: "Co-working Space",
    desc: "24/7 access to a modern, high-speed workspace built for founders who ship fast.",
  },
  {
    title: "Full AI Stack",
    desc: "Enterprise-grade AI tools, APIs, and compute credits at your disposal from day one.",
  },
  {
    title: "1:1 Mentorship",
    desc: "Weekly sessions with experienced founders, investors, and domain-specific experts.",
  },
  {
    title: "Global Network",
    desc: "Lifetime access to the BravioSchool alumni community — your future co-founders.",
  },
  {
    title: "Private Housing",
    desc: "Furnished accommodation in central Bali. Walk to the workspace in five minutes.",
  },
  {
    title: "Daily Meals",
    desc: "Three meals a day so you never break flow. Local cuisine, always ready.",
  },
];

// ─── Animated counter ──────────────────────────────────────────────────────────
const AnimatedStat = ({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { textContent: `${prefix}0${suffix}` },
        {
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" },
          onUpdate() {
            if (ref.current) {
              const p = (this as gsap.core.Tween).progress();
              ref.current.textContent = `${prefix}${Math.round(value * p)}${suffix}`;
            }
          },
          onComplete() {
            if (ref.current)
              ref.current.textContent = `${prefix}${value}${suffix}`;
          },
        }
      );
    });
    return () => ctx.revert();
  }, [value, suffix, prefix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
};

// ─── Component ─────────────────────────────────────────────────────────────────
export const IncludedSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      // 1. Eyebrow — fades in first
      gsap.fromTo(
        "[data-inc='eyebrow']",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-inc='eyebrow']", start: "top 88%" },
        }
      );

      // 2. Heading — each word slides up with stagger (signature move)
      gsap.fromTo(
        "[data-inc='heading-word']",
        { opacity: 0, y: 50, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-inc='heading']",
            start: "top 85%",
          },
        }
      );

      // 3. Subtext — fades up after heading
      gsap.fromTo(
        "[data-inc='subtext']",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-inc='subtext']",
            start: "top 88%",
          },
        }
      );

      // 4. Separator line — draws itself left to right
      gsap.fromTo(
        "[data-inc='line']",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "[data-inc='line']",
            start: "top 90%",
          },
        }
      );

      // 5. Stats — each number pops in with a slight scale bounce
      gsap.fromTo(
        "[data-inc='stat']",
        { opacity: 0, y: 12, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.4)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-inc='stats']",
            start: "top 88%",
          },
        }
      );

      // 6. Grid border — fades in before cards
      gsap.fromTo(
        "[data-inc='grid']",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-inc='grid']",
            start: "top 82%",
          },
        }
      );

      // 7. Cards — wave stagger (not uniform, feels alive)
      gsap.fromTo(
        "[data-inc='card']",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: {
            amount: 0.5,       // total stagger time spread across all cards
            from: "start",     // top-left to bottom-right wave
            grid: [4, 2],      // 2 cols on mobile → 4 cols equivalent
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-inc='grid']",
            start: "top 80%",
          },
        }
      );

      // 8. Bottom bar — slides up
      gsap.fromTo(
        "[data-inc='footer']",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-inc='footer']",
            start: "top 92%",
          },
        }
      );

    }, sectionRef);

    // Safety fallback — force everything visible after 3.5s
    const safety = setTimeout(() => {
      sectionRef.current
        ?.querySelectorAll("[data-inc]")
        .forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
    }, 3500);

    return () => {
      clearTimeout(safety);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="included" className="pt-28 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Layout: heading left, grid right ── */}
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 lg:gap-20">

          {/* ── Left — sticky heading block ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">

            {/* Eyebrow */}
            <p
              data-inc="eyebrow"
              className="text-[11px] font-medium tracking-[0.2em] uppercase
                         text-white/40 mb-5"
            >
              What's included
            </p>

            {/* Heading — words split for per-word animation */}
            <div data-inc="heading" className="overflow-hidden">
              <h2 className="text-4xl md:text-5xl font-bold text-white
                             leading-[1.1] tracking-tight"
                  style={{ perspective: "600px" }}
              >
                {/* Each span is a "word" that animates independently */}
                <span
                  data-inc="heading-word"
                  className="inline-block mr-[0.25em]"
                >
                  We
                </span>
                <span
                  data-inc="heading-word"
                  className="inline-block mr-[0.25em]"
                >
                  handle
                </span>
                <br />
                <span
                  data-inc="heading-word"
                  className="inline-block mr-[0.25em]"
                >
                  the
                </span>
                <span
                  data-inc="heading-word"
                  className="inline-block"
                >
                  rest.
                </span>
              </h2>
            </div>

            {/* Subtext */}
            <p
              data-inc="subtext"
              className="mt-5 text-base text-white/50 leading-relaxed max-w-sm"
            >
              Housing, meals, tools, mentorship — everything
              covered so you focus on the only thing that
              matters: building.
            </p>

            {/* Separator — draws itself */}
            <div
              data-inc="line"
              className="h-px w-12 bg-white/20 mt-8 mb-8"
            />

            {/* Stats */}
            <div data-inc="stats" className="flex items-baseline gap-6">
              {[
                { value: 8, suffix: "", label: "perks" },
                { value: 12, suffix: "", label: "weeks" },
              ].map((s) => (
                <div key={s.label} data-inc="stat">
                  <span className="text-2xl font-bold text-white">
                    <AnimatedStat value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-sm text-white/40 ml-1.5">{s.label}</span>
                </div>
              ))}
              <div data-inc="stat">
                <span className="text-2xl font-bold text-white"></span>
                <span className="text-sm text-white/40 ml-1.5"></span>
              </div>
            </div>
          </div>

          {/* ── Right — card grid ── */}
          <div
            data-inc="grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-px
                       bg-white/[0.06] rounded-2xl overflow-hidden"
          >
            {items.map((item, i) => (
              <div
                key={item.title}
                data-inc="card"
                className="group relative bg-[hsl(0,0%,4%)] p-7 md:p-8
                           hover:bg-white/[0.03] transition-colors duration-300
                           cursor-default overflow-hidden"
              >
                {/* Hover shimmer — sweeps diagonally on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                             transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 60%)",
                    backgroundSize: "200% 200%",
                  }}
                />

                {/* Number */}
                <span
                  className="text-[11px] font-mono text-white/20 block mb-4
                             group-hover:text-white/40 transition-colors duration-300"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h4
                  className="text-[15px] font-semibold text-white mb-2
                             leading-snug"
                >
                  {item.title}
                </h4>

                {/* Description */}
                <p
                  className="text-[13px] text-white/45 leading-relaxed
                             group-hover:text-white/65
                             transition-colors duration-300"
                >
                  {item.desc}
                </p>

                {/* Bottom left accent dot — appears on hover */}
                <div
                  className="absolute bottom-4 right-5 w-1 h-1 rounded-full
                             bg-white/0 group-hover:bg-white/20
                             transition-all duration-400 scale-0
                             group-hover:scale-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer line ── */}
        <div
          data-inc="footer"
          className="mt-20 pt-8 border-t border-white/[0.06]
                     flex flex-col sm:flex-row sm:items-center
                     sm:justify-between gap-4"
        >
          <p className="text-sm text-white/35">
            {/* All included. Zero equity taken. Zero tuition. */}
          </p>
          <p className="text-sm text-white/35">
            {/* Total value:{" "} */}
            {/* <span className="text-white font-medium">$15,000+</span> */}
          </p>
        </div>

      </div>
    </section>
  );
};