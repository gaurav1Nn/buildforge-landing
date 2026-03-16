import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal } from "@/hooks/useGsap";

const dates = [
  "March 23 — Applications Open",
  "April 20 — Applications Close",
  "April 25 — Shortlisting & Interviews",
  "May 1 — Final Cohort Announcement",
  "June 29 — 12-Week Program Begins",
];

export const ProcessSection = () => {
  const ref = useGsapScrollReveal(".process-heading");

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden border-t border-border">
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
          <span
            key={i}
            className="inline-block text-lg md:text-xl font-medium text-muted-foreground"
          >
            {d}
            <span className="mx-12 text-border">•</span>
          </span>
        ))}
      </div>
    </section>
  );
};
