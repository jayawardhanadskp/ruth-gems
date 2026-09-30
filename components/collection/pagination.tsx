import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  buildHref: (page: number) => string;
}

const item =
  "flex size-11 items-center justify-center rounded-full text-sm font-semibold tabular-nums transition-[transform,background-color,color] duration-[var(--duration-press)] ease-out active:scale-95";
const edge =
  "flex h-11 items-center gap-2 rounded-full border border-brand-ink/20 px-5 text-sm font-semibold text-brand-ink transition-[transform,background-color,border-color] duration-[var(--duration-press)] ease-out active:scale-[0.97] [@media(hover:hover)]:hover:border-brand-ink [@media(hover:hover)]:hover:bg-brand-ink/[0.04]";

export function Pagination({ page, totalPages, buildHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageList(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8"
    >
      <Link
        href={buildHref(Math.max(1, page - 1))}
        aria-disabled={page === 1}
        tabIndex={page === 1 ? -1 : undefined}
        className={cn(edge, page === 1 && "pointer-events-none opacity-40")}
      >
        <ArrowLeft className="size-4" />
        Previous
      </Link>

      <ul className="order-last flex w-full items-center justify-center gap-1 sm:order-none sm:w-auto">
        {pages.map((p, i) => (
          <li key={p === "…" ? `e-${i}` : p}>
            {p === "…" ? (
              <span className="flex size-11 items-center justify-center text-stone">…</span>
            ) : (
              <Link
                href={buildHref(p)}
                aria-current={p === page ? "page" : undefined}
                className={cn(
                  item,
                  p === page
                    ? "bg-brand-green text-brand-cream shadow-sm"
                    : "text-ink-soft [@media(hover:hover)]:hover:bg-sand"
                )}
              >
                {p}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <Link
        href={buildHref(Math.min(totalPages, page + 1))}
        aria-disabled={page === totalPages}
        tabIndex={page === totalPages ? -1 : undefined}
        className={cn(edge, page === totalPages && "pointer-events-none opacity-40")}
      >
        Next
        <ArrowRight className="size-4" />
      </Link>
    </nav>
  );
}

function getPageList(page: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, 2, total - 1, total, page - 1, page, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const result: (number | "…")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) result.push("…");
    result.push(p);
    prev = p;
  }
  return result;
}
