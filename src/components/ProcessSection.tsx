import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal, useGsapFloat } from "@/hooks/useGsap";

const dates = [
  "March 17 — Applications Now Open",
  "April 20 — Applications Close",
  "April 25 — Shortlisting & Interviews",
  "May 1 — Final Cohort Announcement",
  "June 29 — 12-Week Program Begins",
];
const ProcessItem = ({ text, index }: { text: string; index: number }) => {
  const ref = useGsapFloat(2.5, 4);

  return (
    <span
      ref={ref}
      className="inline-flex items-center gap-12 text-lg md:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default"
    >
      <span className="group-hover:text-glow">{text}</span>
      <span className="text-border animate-pulse">•</span>
    </span>
  );
};

export const ProcessSection = () => {
  const ref = useGsapScrollReveal(".process-heading");

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden border-t border-border bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="process-heading">
          <SectionHeading label="THE PROCESS">
            From student to *founder.*
          </SectionHeading>
        </div>
      </div>

      <div
        className="flex gap-12 whitespace-nowrap hover:[animation-play-state:paused]"
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {[...dates, ...dates, ...dates, ...dates].map((d, i) => (
          <ProcessItem key={i} text={d} index={i} />
        ))}
      </div>
    </section>
  );
};
