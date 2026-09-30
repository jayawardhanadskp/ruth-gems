import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** @deprecated kept so existing call sites compile; every heading now shares one style. */
  variant?: "default" | "muted";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-tone={tone === "dark" ? "dark" : undefined}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
        {eyebrow}
        {align === "center" && (
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
        )}
      </p>
      <h2
        className={cn(
          "font-display text-h2 font-medium text-balance",
          tone === "dark" ? "text-brand-cream" : "text-brand-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            tone === "dark" ? "text-brand-cream/80" : "text-stone",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
