import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal, useGsapParallax } from "@/hooks/useGsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2", suffix: " hrs", desc: "From major Asian tech hubs" },
  { value: "100", suffix: "%", desc: "English-speaking workforce" },
  { value: "24", suffix: "/7", desc: "Co-working & community access" },
];

// Enhanced image component with Ken Burns effect
const ParallaxImage = ({
  src,
  alt,
  className,
  speed = 0.3,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useGsapParallax(speed);

  return (
    <div
      ref={parallaxRef}
      className={`${className} overflow-hidden rounded-2xl`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover animate-ken-burns transition-transform duration-700 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export const LocationSection = () => {
  const ref = useGsapScrollReveal(".location-heading, .location-img");
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const ctx = gsap.context(() => {
      const counters = statsRef.current!.querySelectorAll(".stat-number");
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });

      // Add glow effect to stat numbers
      gsap.to(statsRef.current!.querySelectorAll(".stat-number"), {
        textShadow: "0 0 20px rgba(255,255,255,0.5)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="location" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      {/* Image Grid with Ken Burns effect */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80"
          alt="Cebu beach"
          className="col-span-2 row-span-2"
          speed={0.2}
        />
        <ParallaxImage
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
          alt="Co-working space"
          className="aspect-square"
          speed={0.3}
        />
        <ParallaxImage
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80"
          alt="Team collaboration"
          className="aspect-square"
          speed={0.4}
        />
        <ParallaxImage
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80"
          alt="City skyline"
          className="aspect-square"
          speed={0.35}
        />
        <ParallaxImage
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
          alt="Workshop"
          className="aspect-square"
          speed={0.25}
        />
      </div>

      <div className="location-heading">
        <SectionHeading label="WHY CEBU">
          Build in paradise. Sell to the *world.*
        </SectionHeading>
      </div>

      <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-12">
        {stats.map((s) => (
          <div key={s.value} className="group cursor-default">
            <div className="text-3xl md:text-4xl font-bold group-hover:text-glow transition-all">
              <span className="stat-number" data-target={parseInt(s.value)}>{s.value}</span>{s.suffix}
            </div>
            <div className="text-muted-foreground text-sm mt-1 group-hover:text-foreground/80 transition-colors">
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
