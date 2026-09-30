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

export function FilterSidebar({ facets }: { facets: FilterCounts }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const store = useFiltersStore();

  useEffect(() => {
    store.hydrateFromSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const apply = () => {
    const params = filtersToSearchParams(store);
    router.push(`/collection?${params.toString()}`);
  };

  const clear = () => {
    store.clearAll();
    router.push("/collection");
  };

  return (
    <aside className="flex w-full flex-col gap-8 rounded-2xl border border-[#e2d8c6] bg-brand-cream/40 p-6 shadow-[0_1px_2px_rgba(2,33,23,0.04)] lg:w-[288px]">
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
        <div className="flex justify-between text-xs text-muted-foreground">
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

      <div className="flex flex-col gap-3 pt-2">
        <Button
          onClick={apply}
          className="h-11 w-full rounded-lg bg-brand-green text-brand-cream hover:bg-brand-green/90"
        >
          Apply Filters
        </Button>
        <button
          onClick={clear}
          className="text-sm font-medium text-brand-gold-muted hover:underline"
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
    <div className="flex flex-col gap-4 border-b border-[#e2d8c6] pb-6 last:border-none">
      <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-brand-gold-muted uppercase">
        <span className="h-3 w-[3px] rounded-full bg-brand-gold-muted" />
        {title}
      </p>
      {children}
    </div>
  );
}
