// // import { SectionHeading } from "@/components/SectionHeading";
// // import { useGsapScrollReveal } from "@/hooks/useGsap";

// // const paths = [
// //   { title: "E-Commerce", desc: "Build a product brand, master supply chains, and scale through digital channels." },
// //   { title: "SaaS", desc: "Ship software products with recurring revenue. Learn pricing, churn reduction, and PLG." },
// //   { title: "Content-Led", desc: "Build an audience-first business through newsletters, courses, or media properties." },
// //   { title: "Services & Agency", desc: "Launch a high-value consultancy or agency. Master sales, delivery, and team building." },
// // ];

// // export const PathsSection = () => {
// //   const ref = useGsapScrollReveal(".paths-heading, .paths-card");

// //   return (
// //     <section ref={ref} className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
// //       <div className="paths-heading">
// //         <SectionHeading label="BUSINESS PATHS">
// //           Choose your *path.*
// //         </SectionHeading>
// //       </div>

// //       <div className="grid sm:grid-cols-2 gap-6 mt-16">
// //         {paths.map((p) => (
// //           <div
// //             key={p.title}
// //             className="paths-card p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:-translate-y-1 transition-all duration-200 cursor-default"
// //           >
// //             <h3 className="text-xl font-bold mb-3">{p.title}</h3>
// //             <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };




// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const paths = [
//   {
//     title: "E-Commerce",
//     desc: "Build a product brand, master supply chains, and scale through digital channels.",
//   },
//   {
//     title: "SaaS",
//     desc: "Ship software with recurring revenue. Learn pricing, churn reduction, and product-led growth.",
//   },
//   {
//     title: "Content-Led",
//     desc: "Build an audience-first business through newsletters, courses, or media properties.",
//   },
//   {
//     title: "Services & Agency",
//     desc: "Launch a high-value consultancy or agency. Master sales, delivery, and hiring.",
//   },
// ];

// export const PathsSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         "[data-paths='heading']",
//         { opacity: 0, y: 32 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.7,
//           ease: "power3.out",
//           scrollTrigger: { trigger: "[data-paths='heading']", start: "top 85%" },
//         }
//       );

//       gsap.fromTo(
//         "[data-paths='row']",
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           stagger: 0.08,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: "[data-paths='list']",
//             start: "top 82%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-28 md:py-40">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ── Header ── */}
//         <div data-paths="heading" className="max-w-2xl mb-16">
//           <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-5">
//             Business Paths
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
//             Four roads.
//             <br />
//             One destination.
//           </h2>
//           <p className="mt-5 text-base text-white/50 leading-relaxed max-w-md">
//             Choose the model that fits you. We'll give you the
//             playbook, mentors, and tools to execute it.
//           </p>
//         </div>

//         {/* ── Path rows ── */}
//         <div data-paths="list" className="border-t border-white/[0.06]">
//           {paths.map((p, i) => (
//             <div
//               key={p.title}
//               data-paths="row"
//               className="group grid grid-cols-1 md:grid-cols-[3rem_1fr_1.5fr_2rem]
//                          gap-4 md:gap-8 items-baseline
//                          py-7 md:py-8 border-b border-white/[0.06]
//                          hover:bg-white/[0.02] transition-colors duration-300
//                          cursor-default -mx-4 px-4 md:-mx-6 md:px-6 rounded-lg"
//             >
//               {/* Number */}
//               <span className="text-[12px] font-mono text-white/20
//                               md:pt-0.5">
//                 {String(i + 1).padStart(2, "0")}
//               </span>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white leading-snug">
//                 {p.title}
//               </h3>

//               {/* Description */}
//               <p className="text-[14px] text-white/40 leading-relaxed
//                             group-hover:text-white/55 transition-colors duration-300">
//                 {p.desc}
//               </p>

//               {/* Arrow — shows on hover */}
//               <span className="hidden md:block text-white/0 group-hover:text-white/30
//                               transition-all duration-300 text-sm
//                               translate-x-0 group-hover:translate-x-1">
//                 →
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ── Footnote ── */}
//         <div className="mt-8 flex flex-col sm:flex-row sm:items-center
//                         sm:justify-between gap-3">
//           <p className="text-sm text-white/25">
//             Not sure which path? We'll help you figure it out in Week 1.
//           </p>
//           <p className="text-sm text-white/25">
//             <span className="text-white/50">{paths.length} paths</span> · all supported equally
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paths = [
  {
    title: "E-Commerce",
    tag: "Physical & Digital",
    desc: "Build a product brand, master supply chains, and scale through digital channels.",
  },
  {
    title: "SaaS",
    tag: "Software",
    desc: "Ship software with recurring revenue. Learn pricing, churn reduction, and product-led growth.",
  },
  {
    title: "Content-Led",
    tag: "Audience & Media",
    desc: "Build an audience-first business through newsletters, courses, or media properties.",
  },
  {
    title: "Services & Agency",
    tag: "Consulting",
    desc: "Launch a high-value consultancy or agency. Master sales, delivery, and hiring.",
  },
];

export const PathsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      // 1. Eyebrow fades in
      gsap.fromTo(
        "[data-paths='eyebrow']",
        { opacity: 0, y: 8 },
        {
          opacity: 1, y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-paths='eyebrow']",
            start: "top 88%",
          },
        }
      );

      // 2. Heading lines — each line slides up independently
      gsap.fromTo(
        "[data-paths='heading-line']",
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-paths='heading']",
            start: "top 85%",
          },
        }
      );

      // 3. Subtext
      gsap.fromTo(
        "[data-paths='subtext']",
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: "[data-paths='subtext']",
            start: "top 88%",
          },
        }
      );

      // 4. Top border line — draws left to right
      gsap.fromTo(
        "[data-paths='top-border']",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "[data-paths='list']",
            start: "top 84%",
          },
        }
      );

      // 5. Rows — stagger in from below
      gsap.fromTo(
        "[data-paths='row']",
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-paths='list']",
            start: "top 82%",
          },
        }
      );

      // 6. Footer footnote
      gsap.fromTo(
        "[data-paths='footnote']",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-paths='footnote']",
            start: "top 94%",
          },
        }
      );

    }, sectionRef);

    // Safety fallback
    const t = setTimeout(() => {
      sectionRef.current
        ?.querySelectorAll("[data-paths]")
        .forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
    }, 3500);

    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="pt-16 md:pt-24 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-16">

          <p
            data-paths="eyebrow"
            className="text-[11px] font-medium tracking-[0.2em] uppercase
                       text-white/40 mb-5"
          >
            Business Paths
          </p>

          {/* Heading — each line wrapped for per-line animation */}
          <div
            data-paths="heading"
            className="overflow-hidden"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white
                           leading-[1.1] tracking-tight">
              <span
                data-paths="heading-line"
                className="block"
              >
                Four roads.
              </span>
              <span
                data-paths="heading-line"
                className="block"
              >
                One destination.
              </span>
            </h2>
          </div>

          <p
            data-paths="subtext"
            className="mt-5 text-base text-white/50 leading-relaxed max-w-md"
          >
            Choose the model that fits you. We'll give you the
            playbook, mentors, and tools to execute it.
          </p>
        </div>

        {/* ── Path rows ── */}
        <div data-paths="list">

          {/* Top border — animates drawing itself */}
          <div
            data-paths="top-border"
            className="h-px bg-white/[0.06] mb-0"
          />

          {paths.map((p, i) => (
            <div
              key={p.title}
              data-paths="row"
              className="group relative border-b border-white/[0.06] cursor-default"
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
            >
              {/* Hover background — fills the row */}
              <div
                className={`absolute inset-0 bg-white/[0.025]
                            transition-opacity duration-300 pointer-events-none
                            ${activeRow === i ? "opacity-100" : "opacity-0"}`}
              />

              {/* Left edge accent — slides down on hover */}
              <div
                className={`absolute left-0 top-0 w-[1.5px] bg-white/40
                            transition-all duration-400 ease-out pointer-events-none
                            ${activeRow === i ? "h-full opacity-100" : "h-0 opacity-0"}`}
              />

              <div
                className="relative grid grid-cols-1 md:grid-cols-[3rem_1fr_1.5fr_2rem]
                           gap-4 md:gap-8 items-center
                           py-7 md:py-9 px-4 md:px-6"
              >
                {/* Number — brightens on hover */}
                <span
                  className={`text-[11px] font-mono block md:pt-0.5
                              transition-colors duration-300
                              ${activeRow === i
                                ? "text-white/50"
                                : "text-white/20"
                              }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + tag */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className={`text-lg font-semibold leading-snug
                                transition-colors duration-300
                                ${activeRow === i
                                  ? "text-white"
                                  : "text-white/90"
                                }`}
                  >
                    {p.title}
                  </h3>
                  {/* Tag — only visible on hover */}
                  <span
                    className={`text-[10px] font-medium tracking-[0.15em]
                                uppercase text-white/30
                                transition-all duration-300
                                ${activeRow === i
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 -translate-y-1"
                                }`}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-[14px] leading-relaxed
                              transition-colors duration-300
                              ${activeRow === i
                                ? "text-white/60"
                                : "text-white/35"
                              }`}
                >
                  {p.desc}
                </p>

                {/* Arrow — slides right on hover */}
                <span
                  className={`hidden md:block text-sm
                              transition-all duration-300
                              ${activeRow === i
                                ? "text-white/50 translate-x-1"
                                : "text-white/0 translate-x-0"
                              }`}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footnote ── */}
        <div
          data-paths="footnote"
          className="mt-8 flex flex-col sm:flex-row sm:items-center
                     sm:justify-between gap-3"
        >
          <p className="text-sm text-white/25">
            Not sure which path? We'll help you figure it out in Week 1.
          </p>
          <p className="text-sm text-white/25">
            <span className="text-white/45">{paths.length} paths</span>
            {" "}· all supported equally
          </p>
        </div>

      </div>
    </section>
  );
};