import { SectionHeading } from "@/components/SectionHeading";

const outcomes = [
  {
    title: "A founder community.",
    desc: "Leave with a network of ambitious operators who will be your co-founders, advisors, and first customers for the next decade.",
  },
  {
    title: "Global awareness.",
    desc: "Gain a worldview shaped by building in Asia, selling globally, and understanding markets most founders never see.",
  },
  {
    title: "A revenue-generating business.",
    desc: "Walk away with a real business making real money — not a pitch deck, not a prototype, but a company.",
  },
];

export const OutcomeSection = () => (
  <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-border">
    <SectionHeading label="THE OUTCOME">
      What you leave *BuildForge* with.
    </SectionHeading>

    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {outcomes.map((o) => (
        <div key={o.title} className="p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-xl font-bold mb-4">
            <em className="heading-accent">{o.title}</em>
          </h3>
          <p className="text-muted-foreground leading-relaxed">{o.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
