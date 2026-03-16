import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal, useGsapTilt } from "@/hooks/useGsap";
import { useRef } from "react";
import gsap from "gsap";

const mentors = [
  { name: "Sarah Chen", title: "Founder @ NexusAI" },
  { name: "Marcus Rivera", title: "CEO @ ScaleUp" },
  { name: "Emma Zhang", title: "Partner @ Sequoia" },
  { name: "James Okafor", title: "Ex-CTO @ Stripe" },
  { name: "Priya Sharma", title: "Founder @ CloudBase" },
  { name: "Alex Petrov", title: "GP @ a16z" },
  { name: "Luna Kim", title: "CEO @ DataFlow" },
  { name: "David Nakamura", title: "Founder @ ZeroStack" },
];

const MentorCard = ({ name, title, index }: { name: string; title: string; index: number }) => {
  const cardRef = useGsapTilt(5);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (imgRef.current) {
      gsap.to(imgRef.current, { scale: 1.1, duration: 0.4, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      gsap.to(imgRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center gap-4 bg-foreground/[0.03] border border-border p-4 rounded-2xl min-w-[280px] transition-all duration-300 hover:border-foreground/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
        <img
          ref={imgRef}
          src={`https://i.pravatar.cc/150?u=mentor${index}`}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div>
        <div className="font-bold text-sm group-hover:text-glow">{name}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{title}</div>
      </div>
    </div>
  );
};

export const MentorSection = () => {
  const ref = useGsapScrollReveal(".mentor-heading");

  return (
    <section ref={ref} id="mentors" className="py-24 md:py-32 overflow-hidden border-y border-border bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="mentor-heading">
          <SectionHeading label="MENTOR NETWORK">
            Learn from people who've *done it.*
          </SectionHeading>
        </div>
      </div>

      <div
        className="flex gap-6 whitespace-nowrap hover:[animation-play-state:paused]"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...mentors, ...mentors, ...mentors, ...mentors].map((m, i) => (
          <MentorCard key={i} name={m.name} title={m.title} index={i % mentors.length} />
        ))}
      </div>
    </section>
  );
};
