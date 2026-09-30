import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] tracking-[0.26px] text-[#6e6b67]">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="hover:text-brand-ink">
              {item.label}
            </Link>
          ) : (
            <span className="text-brand-ink">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="px-1">/</span>}
        </span>
      ))}
    </nav>
  );
}
