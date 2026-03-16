import { SectionHeading } from "@/components/SectionHeading";

const milestones = [
  { week: "Week 1-2", title: "Validate & Outreach", desc: "Find a problem worth solving and talk to 50 potential users." },
  { week: "Week 3-4", title: "Launch & First Customers", desc: "Build your MVP and get your first dollar of revenue." },
  { week: "Week 6", title: "100 Customers", desc: "Scale your acquisition channels and refine the product." },
  { week: "Week 8", title: "$2,000 Revenue", desc: "Hit your first meaningful revenue milestone." },
  { week: "Week 10", title: "$10,000+ Revenue", desc: "Prove product-market fit and optimize unit economics." },
  { week: "Week 12", title: "Pitch & Demo Day", desc: "Present your revenue-generating business to global investors." },
];

export const JourneySection = () => (
  <section id="journey" className="py-24 md:py-32 px-6 max-w-3xl mx-auto">
    <SectionHeading label="THE JOURNEY">
      12 weeks to *founder.*
    </SectionHeading>

    <div className="mt-20 relative border-l border-border ml-4 space-y-14">
      {milestones.map((m) => (
        <div key={m.week} className="relative pl-10">
          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            {m.week}
          </span>
          <h4 className="text-xl font-bold mt-1">{m.title}</h4>
          <p className="text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
        </div>
      ))}
    </div>

    <p className="mt-12 text-xs text-muted-foreground italic text-center opacity-50">
      *Targets are speculative but achievable based on program intensity.
    </p>
  </section>
);
