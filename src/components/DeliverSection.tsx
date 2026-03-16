import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";

const cards = [
  {
    title: "Concepts",
    desc: "Master real-world business frameworks — not theory. Learn pricing, positioning, and growth from founders who've scaled.",
  },
  {
    title: "Community",
    desc: "Join a tight-knit cohort of ambitious builders. Your co-founders, first hires, and lifelong network start here.",
  },
  {
    title: "Culture",
    desc: "Immerse yourself in a founder-first environment designed for speed, focus, and relentless execution.",
  },
];

const features = [
  { badge: "AI-Native", title: "Built for the AI era", desc: "Every tool, workflow, and project leverages cutting-edge AI to 10x your output." },
  { badge: "Founder Professors", title: "Learn from operators", desc: "No career academics. Every instructor has built and sold companies." },
  { badge: "Growing Network", title: "Alumni that compound", desc: "Access a growing global network of founders, investors, and operators." },
];

export const DeliverSection = () => {
  const ref = useGsapScrollReveal(".deliver-card, .deliver-heading, .deliver-feature");

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="deliver-heading">
        <SectionHeading label="WHAT WE DELIVER">
          Everything you need to *succeed.*
        </SectionHeading>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {cards.map((c) => (
          <div
            key={c.title}
            className="deliver-card p-8 rounded-2xl bg-card border border-border transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:border-foreground/20 cursor-default"
          >
            <h3 className="text-xl font-bold mb-3">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 space-y-0 divide-y divide-border">
        {features.map((f) => (
          <div key={f.badge} className="deliver-feature flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground bg-foreground/5 px-3 py-1 rounded-full w-fit">
              {f.badge}
            </span>
            <h4 className="text-lg font-bold">{f.title}</h4>
            <p className="text-muted-foreground md:ml-auto md:max-w-md">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
