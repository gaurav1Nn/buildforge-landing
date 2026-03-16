import React from "react";

interface SectionHeadingProps {
  label: string;
  children: React.ReactNode;
  level?: "h1" | "h2";
  center?: boolean;
}

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="section-label">{children}</span>
);

export const AccentHeading = ({
  children,
  level = "h2",
  className = "",
}: {
  children: string;
  level?: "h1" | "h2";
  className?: string;
}) => {
  const Tag = level;
  const baseClass =
    level === "h1"
      ? "text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]"
      : "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]";

  const parts = children.split(/(\*[^*]+\*)/g);

  return (
    <Tag className={`${baseClass} ${className}`}>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="heading-accent">
            {part.slice(1, -1)}
          </em>
        ) : (
          part
        )
      )}
    </Tag>
  );
};

export const SectionHeading = ({
  label,
  children,
  level = "h2",
  center = false,
}: SectionHeadingProps) => (
  <div className={center ? "text-center" : ""}>
    <SectionLabel>{label}</SectionLabel>
    {typeof children === "string" ? (
      <AccentHeading level={level}>{children}</AccentHeading>
    ) : (
      children
    )}
  </div>
);
