import { SectionHeading } from "@/components/SectionHeading";

const dates = [
  "March 23 — Applications Open",
  "April 20 — Applications Close",
  "April 25 — Shortlisting & Interviews",
  "May 1 — Final Cohort Announcement",
  "June 29 — 12-Week Program Begins",
];

export const ProcessSection = () => (
  <section className="py-24 md:py-32 overflow-hidden border-t border-border">
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <SectionHeading label="THE PROCESS">
        From student to *founder.*
      </SectionHeading>
    </div>

    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[...dates, ...dates].map((d, i) => (
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
