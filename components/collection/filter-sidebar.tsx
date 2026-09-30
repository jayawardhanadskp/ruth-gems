"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { FilterCheckboxGroup } from "@/components/collection/filter-checkbox-group";
import { ColourSwatchPicker } from "@/components/collection/colour-swatch-picker";
import { filtersToSearchParams, useFiltersStore } from "@/store/filters-store";
import type { FilterCounts } from "@/types/gemstone";

const gemTypeOptions: string[] = [
  "Sapphire",
  "Ruby",
  "Spinel",
  "Alexandrite",
  "Cat's Eye",
  "Emerald",
];
const colourOptions = [
  "Royal Blue",
  "Cornflower",
  "Padparadscha",
  "Pink",
  "Yellow",
  "Green",
  "Violet",
  "White",
] as const;
const cutOptions = ["Oval", "Cushion", "Round", "Emerald", "Pear", "Heart", "Cabochon", "Radiant"];
const clarityOptions = ["Loupe Clean", "Eye Clean", "Slightly Included"];
const treatmentOptions = ["Unheated", "Traditionally Heated", "No Indication"];
const originOptions = ["Ratnapura", "Elahera", "Balangoda", "Okkampitiya"];
const certificationOptions = ["GIA", "SSEF", "GRS", "NGJA", "Uncertified"];

function withCounts(options: string[], counts: Record<string, number>) {
  return options.map((label) => ({ label, count: counts[label] ?? 0 }));
}

export function FilterSidebar({
  facets,
  variant = "panel",
  onApplied,
}: {
  facets: FilterCounts;
  variant?: "panel" | "sheet";
  onApplied?: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const store = useFiltersStore();

  useEffect(() => {
    store.hydrateFromSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const apply = () => {
    const params = filtersToSearchParams(store);
    router.push(`/collection?${params.toString()}`, { scroll: false });
    onApplied?.();
  };

  const clear = () => {
    store.clearAll();
    router.push("/collection", { scroll: false });
    onApplied?.();
  };

  return (
    <aside
      aria-label="Filters"
      className={
        variant === "panel"
          ? "surface flex w-full flex-col gap-7 rounded-2xl p-6 lg:w-[19rem]"
          : "flex w-full flex-col gap-7 px-5 pt-2 pb-6"
      }
    >
      <FilterGroup title="Gem Type">
        <FilterCheckboxGroup
          options={withCounts(gemTypeOptions, facets.gemType)}
          selected={store.gemType}
          onToggle={(v) => store.toggle("gemType", v)}
        />
      </FilterGroup>

      <FilterGroup title="Colour">
        <ColourSwatchPicker
          options={[...colourOptions]}
          selected={store.colour}
          onToggle={(v) => store.toggle("colour", v)}
        />
      </FilterGroup>

      <FilterGroup title="Carat Weight">
        <div className="px-2.5 pt-2">
        <Slider
          min={0.5}
          max={12}
          step={0.1}
          value={[store.minCarat ?? 0.5, store.maxCarat ?? 12]}
          onValueChange={(value) => {
            const [min, max] = value as number[];
            store.setCaratRange(min, max);
          }}
        />
        </div>
        <div className="flex justify-between text-xs text-stone tabular-nums">
          <span>{(store.minCarat ?? 0.5).toFixed(2)} ct</span>
          <span>{(store.maxCarat ?? 12).toFixed(2)} ct</span>
        </div>
      </FilterGroup>

      <FilterGroup title="Cut">
        <FilterCheckboxGroup
          options={withCounts(cutOptions, facets.cut)}
          selected={store.cut}
          onToggle={(v) => store.toggle("cut", v)}
        />
      </FilterGroup>

      <FilterGroup title="Clarity">
        <FilterCheckboxGroup
          options={withCounts(clarityOptions, facets.clarity)}
          selected={store.clarity}
          onToggle={(v) => store.toggle("clarity", v)}
        />
      </FilterGroup>

      <FilterGroup title="Treatment">
        <FilterCheckboxGroup
          options={withCounts(treatmentOptions, facets.treatment)}
          selected={store.treatment}
          onToggle={(v) => store.toggle("treatment", v)}
        />
      </FilterGroup>

      <FilterGroup title="Origin">
        <FilterCheckboxGroup
          options={withCounts(originOptions, facets.origin)}
          selected={store.origin}
          onToggle={(v) => store.toggle("origin", v)}
        />
      </FilterGroup>

      <FilterGroup title="Certification">
        <FilterCheckboxGroup
          options={withCounts(certificationOptions, facets.certification)}
          selected={store.certification}
          onToggle={(v) => store.toggle("certification", v)}
        />
      </FilterGroup>

      <div
        className={
          variant === "sheet"
            ? "sticky bottom-0 -mx-5 -mb-6 flex flex-col gap-1 border-t border-line bg-background px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
            : "flex flex-col gap-1 pt-1"
        }
      >
        <Button onClick={apply} size="lg" className="w-full">
          Apply Filters
        </Button>
        <button
          type="button"
          onClick={clear}
          className="min-h-11 cursor-pointer rounded-md text-sm font-semibold text-brand-gold-muted underline-offset-4 hover:underline"
        >
          Clear all
        </button>
      </div>
    </aside>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-line pb-6 last:border-none last:pb-0">
      <p className="eyebrow flex items-center gap-2.5">
        <span aria-hidden className="size-1 rotate-45 bg-brand-gold" />
        {title}
      </p>
      {children}
    </div>
  );
}
