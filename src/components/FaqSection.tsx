import { useState, useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";
import gsap from "gsap";

const faqGroups = [
  {
    category: "About",
    items: [
      { q: "What is BuildForge Academy?", a: "BuildForge is a 12-week intensive entrepreneurship program based in Cebu, Philippines. You build a real, revenue-generating business from scratch with world-class mentorship." },
      { q: "How is this different from a traditional MBA?", a: "We don't teach theory — we teach execution. You'll launch a real business, earn real revenue, and graduate with a company, not just a degree." },
      { q: "Where is the program located?", a: "The program takes place in Cebu City, Philippines — a vibrant tech hub with low cost of living and direct access to Asian markets." },
    ],
  },
  {
    category: "Eligibility & Selection",
    items: [
      { q: "Who can apply?", a: "Anyone 18+ with a strong drive to build. We look for ambition, grit, and coachability over credentials." },
      { q: "Do I need a business idea?", a: "No. We'll help you find and validate a problem worth solving in the first two weeks." },
      { q: "What's the acceptance rate?", a: "We accept approximately 20 students per cohort from a global applicant pool." },
    ],
  },
  {
    category: "Program Structure",
    items: [
      { q: "What does a typical day look like?", a: "Mornings: focused building time. Afternoons: workshops and mentorship sessions. Evenings: community dinners and networking." },
      { q: "Is housing included?", a: "Yes. Fully furnished private housing in central Cebu is included in the program." },
      { q: "What tools and resources are provided?", a: "You get access to enterprise AI tools, co-working space, mentorship, and a full operational stack." },
    ],
  },
  {
    category: "Outcomes & Investment",
    items: [
      { q: "How much does the program cost?", a: "Tuition details are shared during the application process. We offer need-based scholarships." },
      { q: "Do you take equity?", a: "No. 0% equity. You keep everything you build." },
      { q: "What happens after the program?", a: "You leave with a business, a network, and lifetime access to the BuildForge alumni community." },
    ],
  },
  {
    category: "For Parents",
    items: [
      { q: "Is this a legitimate program?", a: "Absolutely. BuildForge is backed by experienced entrepreneurs and venture investors with decades of combined experience." },
      { q: "Is it safe in Cebu?", a: "Cebu is one of the most popular destinations for digital nomads and entrepreneurs in Southeast Asia, with excellent infrastructure and safety." },
      { q: "Will my child get a credential?", a: "Better — they'll get a business. And a global network that no university can match." },
    ],
  },
];

const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  const toggleOpen = () => {
    setOpen(!open);

    // Animate content height
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: open ? 0 : "auto",
        opacity: open ? 0 : 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    // Animate icon rotation
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: open ? 0 : 135,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    }
  };

  return (
    <div className="border-b border-border group">
      <button
        onClick={toggleOpen}
        className="w-full py-5 flex justify-between items-center text-left transition-colors hover:bg-foreground/[0.02] -mx-2 px-2 rounded-lg"
      >
        <span className="font-medium pr-4 group-hover:text-foreground transition-colors">{q}</span>
        <span
          ref={iconRef}
          className="text-muted-foreground text-xl flex-shrink-0"
          style={{ display: "inline-block" }}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export const FaqSection = () => {
  const ref = useGsapScrollReveal(".faq-heading, .faq-group");

  return (
    <section ref={ref} id="faq" className="py-24 md:py-32 px-6 max-w-3xl mx-auto">
      <div className="faq-heading">
        <SectionHeading label="FAQ">
          Common *questions.*
        </SectionHeading>
      </div>

      <div className="mt-16 space-y-12">
        {faqGroups.map((group, groupIndex) => (
          <div key={group.category} className="faq-group">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 group-hover:text-accent transition-colors">
              {group.category}
            </h3>
            <div>
              {group.items.map((item, itemIndex) => (
                <FaqItem key={item.q} q={item.q} a={item.a} index={groupIndex * 10 + itemIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
