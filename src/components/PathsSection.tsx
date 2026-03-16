import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";

const paths = [
  { title: "E-Commerce", desc: "Build a product brand, master supply chains, and scale through digital channels." },
  { title: "SaaS", desc: "Ship software products with recurring revenue. Learn pricing, churn reduction, and PLG." },
  { title: "Content-Led", desc: "Build an audience-first business through newsletters, courses, or media properties." },
  { title: "Services & Agency", desc: "Launch a high-value consultancy or agency. Master sales, delivery, and team building." },
];

export const PathsSection = () => {
  const ref = useGsapScrollReveal(".paths-heading, .paths-card");

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="paths-heading">
        <SectionHeading label="BUSINESS PATHS">
          Choose your *path.*
        </SectionHeading>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-16">
        {paths.map((p) => (
          <div
            key={p.title}
            className="paths-card p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:-translate-y-1 transition-all duration-200 cursor-default"
          >
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
