import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">{title}</h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
