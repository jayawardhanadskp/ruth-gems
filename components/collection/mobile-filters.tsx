"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterSidebar } from "@/components/collection/filter-sidebar";
import type { FilterCounts } from "@/types/gemstone";

/** Bottom sheet on phones: thumb-reachable, Apply stays pinned. */
export function MobileFilters({ facets }: { facets: FilterCounts }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="outline" className="w-full sm:w-auto lg:hidden" />}
      >
        <SlidersHorizontal className="size-4" />
        Filters
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="max-h-[88dvh] gap-0 overflow-y-auto rounded-t-3xl p-0"
      >
        <div aria-hidden className="mx-auto mt-3 h-1 w-10 rounded-full bg-line" />
        <SheetHeader className="px-5 pt-3 pb-2">
          <SheetTitle className="font-display text-2xl font-medium">Filters</SheetTitle>
        </SheetHeader>
        <FilterSidebar facets={facets} variant="sheet" onApplied={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
