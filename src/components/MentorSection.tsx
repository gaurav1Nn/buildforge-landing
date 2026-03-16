import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";

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

const MentorCard = ({ name, title, index }: { name: string; title: string; index: number }) => (
  <div className="inline-flex items-center gap-4 bg-foreground/[0.03] border border-border p-4 rounded-2xl min-w-[280px]">
    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
      <img
        src={`https://i.pravatar.cc/150?u=mentor${index}`}
        alt={name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div>
      <div className="font-bold text-sm">{name}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{title}</div>
    </div>
  </div>
);

export const MentorSection = () => {
  const ref = useGsapScrollReveal(".mentor-heading");

  return (
    <section ref={ref} id="mentors" className="py-24 md:py-32 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="mentor-heading">
          <SectionHeading label="MENTOR NETWORK">
            Learn from people who've *done it.*
          </SectionHeading>
        </div>
      </div>

      <div className="flex gap-6 whitespace-nowrap hover:[animation-play-state:paused]" style={{ animation: "marquee 30s linear infinite" }}>
        {[...mentors, ...mentors, ...mentors, ...mentors].map((m, i) => (
          <MentorCard key={i} name={m.name} title={m.title} index={i % mentors.length} />
        ))}
      </div>
    </section>
  );
};
