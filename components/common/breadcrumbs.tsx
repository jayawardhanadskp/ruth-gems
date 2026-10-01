import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn(
          "-my-2 flex flex-wrap items-center text-[0.8125rem] tracking-[0.02em]",
          dark ? "justify-center text-brand-cream/80" : "text-stone",
        )}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-11 min-w-11 items-center rounded-sm pr-1 transition-colors duration-[var(--duration-hover)]",
                    dark ? "hover:text-brand-gold" : "hover:text-brand-ink",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className={cn(
                    "inline-flex min-h-11 items-center font-medium",
                    dark ? "text-brand-cream" : "text-brand-ink",
                  )}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className={cn("mx-1 size-3.5", dark ? "text-brand-cream/50" : "text-stone/60")} aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
