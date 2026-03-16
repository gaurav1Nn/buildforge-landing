import { SectionHeading } from "@/components/SectionHeading";
import { useGsapTimelineDraw, useGsapFloat } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const milestones = [
  { week: "Week 1-2", title: "Validate & Outreach", desc: "Find a problem worth solving and talk to 50 potential users." },
  { week: "Week 3-4", title: "Launch & First Customers", desc: "Build your MVP and get your first dollar of revenue." },
  { week: "Week 6", title: "100 Customers", desc: "Scale your acquisition channels and refine the product." },
  { week: "Week 8", title: "$2,000 Revenue", desc: "Hit your first meaningful revenue milestone." },
  { week: "Week 10", title: "$10,000+ Revenue", desc: "Prove product-market fit and optimize unit economics." },
  { week: "Week 12", title: "Pitch & Demo Day", desc: "Present your revenue-generating business to global investors." },
];

const TimelineNode = ({ index }: { index: number }) => {
  const nodeRef = useGsapFloat(2, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pulse animation on scroll into view
      gsap.to(`.timeline-node-${index}`, {
        scale: 1.3,
        duration: 0.3,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: `.timeline-node-${index}`,
          start: "top 80%",
        },
      });

      // Glow effect
      gsap.to(`.timeline-node-${index}`, {
        boxShadow: "0 0 30px rgba(255,255,255,0.6)",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={nodeRef}
      className={`timeline-node-${index} absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-foreground shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300`}
    />
  );
};

export const JourneySection = () => {
  const ref = useGsapTimelineDraw();

  return (
    <section id="journey" className="py-24 md:py-32 px-6 max-w-3xl mx-auto">
      <SectionHeading label="THE JOURNEY">
        12 weeks to *founder.*
      </SectionHeading>

      <div ref={ref} className="mt-20 relative ml-4 space-y-14">
        {/* Enhanced timeline line with gradient glow */}
        <div className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/0 via-foreground to-foreground/0" />
        <div className="timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-foreground/20 blur-[2px]" />

        {milestones.map((m, index) => (
          <div
            key={m.week}
            className="timeline-item relative pl-12 group cursor-default"
          >
            <TimelineNode index={index} />
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover:text-accent transition-colors">
              {m.week}
            </span>
            <h4 className="text-xl font-bold mt-1 group-hover:text-glow transition-all">
              {m.title}
            </h4>
            <p className="text-muted-foreground mt-2 leading-relaxed group-hover:text-foreground/80 transition-colors">
              {m.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-xs text-muted-foreground italic text-center opacity-50">
        *Targets are speculative but achievable based on program intensity.
      </p>
    </section>
  );
};
