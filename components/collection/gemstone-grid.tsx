import Link from "next/link";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { Button } from "@/components/ui/button";
import { StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import type { Gemstone } from "@/types/gemstone";

export function GemstoneGrid({ items }: { items: Gemstone[] }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line bg-ivory px-6 py-24 text-center">
        <span aria-hidden className="size-2 rotate-45 bg-brand-gold" />
        <p className="font-display type-h3 text-brand-ink">
          No gemstones match these filters
        </p>
        <p className="text-stone">
          Try widening your carat range or clearing a filter.
        </p>
        <Button
          nativeButton={false}
          variant="outline"
          className="mt-3"
          render={<Link href="/collection" scroll={false} />}
        >
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <StaggerGrid
      key={items.map((i) => i.slug).join("|")}
      className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3"
    >
      {items.map((gemstone) => (
        <StaggerItem key={gemstone.slug} className="h-full">
          <GemstoneCard gemstone={gemstone} />
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
