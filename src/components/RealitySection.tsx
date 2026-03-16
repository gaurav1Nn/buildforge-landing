import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const oldWay = [
  ["4 Years", "Spent in a classroom"],
  ["$200K+", "In student debt"],
  ["Theory", "Based on outdated textbooks"],
];

const newWay = [
  ["3 Months", "Of intensive building"],
  ["0% Equity", "You keep what you build"],
  ["Real Revenue", "Launch to real customers"],
];

export const RealitySection = () => (
  <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
    <SectionHeading label="THE REALITY">
      You already know the old path *isn't working.*
    </SectionHeading>

    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 mt-16 md:mt-20 items-center">
      <div className="space-y-8 p-8 md:p-12 rounded-3xl bg-foreground/[0.02] border border-border">
        <h3 className="text-destructive font-bold uppercase tracking-widest text-xs">
          ✕ The Old Way
        </h3>
        {oldWay.map(([val, desc]) => (
          <div key={val}>
            <div className="text-2xl md:text-3xl font-bold">{val}</div>
            <div className="text-muted-foreground">{desc}</div>
          </div>
        ))}
      </div>

      <div className="text-muted-foreground italic text-2xl text-center">vs</div>

      <div className="space-y-8 p-8 md:p-12 rounded-3xl bg-foreground/[0.05] border border-foreground/10">
        <h3 className="text-green-500 font-bold uppercase tracking-widest text-xs">
          ✓ The BuildForge Way
        </h3>
        {newWay.map(([val, desc]) => (
          <div key={val}>
            <div className="text-2xl md:text-3xl font-bold">{val}</div>
            <div className="text-muted-foreground">{desc}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-12">
      <Button variant="cta" className="px-8 py-5 text-base">
        Reserve Your Spot →
      </Button>
    </div>
  </section>
);
