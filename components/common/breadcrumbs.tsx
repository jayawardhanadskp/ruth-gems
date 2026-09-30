import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="-my-2 flex flex-wrap items-center text-[0.8125rem] tracking-[0.02em] text-stone">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 min-w-11 items-center rounded-sm pr-1 transition-colors duration-[var(--duration-hover)] hover:text-brand-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="inline-flex min-h-11 items-center font-medium text-brand-ink">
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="mx-1 size-3.5 text-stone/60" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
