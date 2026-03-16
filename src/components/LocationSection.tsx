import { SectionHeading } from "@/components/SectionHeading";

const stats = [
  { value: "2 hrs", desc: "From major Asian tech hubs" },
  { value: "100%", desc: "English-speaking workforce" },
  { value: "24/7", desc: "Co-working & community access" },
];

export const LocationSection = () => (
  <section id="location" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80"
          alt="Cebu beach"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
          alt="Co-working space"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80"
          alt="City skyline"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-square">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
          alt="Workshop"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <SectionHeading label="WHY CEBU">
      Build in paradise. Sell to the *world.*
    </SectionHeading>

    <div className="grid grid-cols-3 gap-8 mt-12">
      {stats.map((s) => (
        <div key={s.value}>
          <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
          <div className="text-muted-foreground text-sm mt-1">{s.desc}</div>
        </div>
      ))}
    </div>
  </section>
);
