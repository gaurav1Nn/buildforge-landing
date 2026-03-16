import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";

const items = [
  { icon: "📋", title: "Business Blueprint", desc: "A structured framework to validate and launch your startup." },
  { icon: "🏠", title: "Private Housing", desc: "Fully furnished accommodation in central Cebu." },
  { icon: "🍽️", title: "Daily Meals", desc: "Three meals a day so you can focus on building." },
  { icon: "💻", title: "Co-working Space", desc: "24/7 access to a modern, high-speed workspace." },
  { icon: "🤖", title: "Full AI Stack", desc: "Enterprise-grade AI tools and APIs at your fingertips." },
  { icon: "🎯", title: "1-on-1 Mentorship", desc: "Weekly sessions with experienced founders and investors." },
  { icon: "🎓", title: "Weekly Workshops", desc: "Deep dives on growth, product, fundraising, and more." },
  { icon: "🌍", title: "Global Network", desc: "Lifetime access to the BuildForge alumni community." },
];

export const IncludedSection = () => {
  const ref = useGsapScrollReveal(".included-heading, .included-card");

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-border">
      <div className="included-heading">
        <SectionHeading label="WHAT'S INCLUDED">
          Everything you need to *build.*
        </SectionHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {items.map((item) => (
          <div key={item.title} className="included-card p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20">
            <span className="text-2xl">{item.icon}</span>
            <h4 className="font-bold mt-3 mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
