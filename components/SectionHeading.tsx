import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  intro?: string;
  eyebrow?: string;
  align?: "left" | "center";
  /** Set to false when the section heading sits on a charcoal band. */
  light?: boolean;
  className?: string;
}

// UK .section-head: eyebrow, Poppins 700 h2, muted intro, 56px gap below
export function SectionHeading({
  title,
  intro,
  eyebrow,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-[640px]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", light && "text-primary")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3.5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.12]",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-[1.06rem] leading-relaxed",
            light ? "text-white/85" : "text-muted-foreground"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
