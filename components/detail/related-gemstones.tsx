import Link from "next/link";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import type { Gemstone } from "@/types/gemstone";

export function RelatedGemstones({ items }: { items: Gemstone[] }) {
  if (items.length === 0) return null;

  return (
    <section className="container-page flex flex-col gap-8 pt-2 pb-[88px]">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
            You may also like
          </p>
          <h2 className="font-display text-[38px] font-semibold text-brand-ink">
            Related Gemstones
          </h2>
        </div>
        <Link
          href="/collection"
          className="text-sm font-semibold tracking-[0.28px] text-brand-green-light hover:underline"
        >
          View all →
        </Link>
      </div>
      <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((gemstone) => (
          <StaggerItem key={gemstone.slug}>
            <GemstoneCard gemstone={gemstone} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
