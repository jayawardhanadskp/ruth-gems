import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBanner } from "@/components/common/cta-banner";
import { FilterSidebar } from "@/components/collection/filter-sidebar";
import { MobileFilters } from "@/components/collection/mobile-filters";
import { SortSelect } from "@/components/collection/sort-select";
import { ActiveFilters } from "@/components/collection/active-filters";
import { GemstoneGrid } from "@/components/collection/gemstone-grid";
import { Pagination } from "@/components/collection/pagination";
import { getFilterFacets, getGemstones } from "@/lib/data";
import { buildCollectionHref, parseGemstoneFilters } from "@/lib/search-params";

export const metadata: Metadata = {
  title: "The Collection | Ruth Gems",
  description:
    "Every stone we currently hold, with its weight, cut, treatment and origin stated plainly.",
};

export default async function CollectionPage({
  searchParams,
}: PageProps<"/collection">) {
  const rawParams = await searchParams;
  const filters = parseGemstoneFilters(rawParams);
  const [{ items, total, page, totalPages }, facets] = await Promise.all([
    getGemstones(filters),
    getFilterFacets(),
  ]);

  return (
    <>
      <div className="border-b border-[#e2d8c6] bg-brand-cream/60 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <div className="container-page flex flex-col gap-2 pt-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Collection" }]} />
        </div>

        <div className="container-page flex flex-col gap-3 py-8 sm:py-10">
          <p className="text-xs font-medium tracking-[2px] text-brand-gold-muted uppercase">
            Ceylon Gemstones
          </p>
          <h1 className="font-display text-5xl font-medium text-brand-forest-dark">The Collection</h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Every stone we currently hold, with its weight, cut, treatment and
            origin stated plainly. Filter to find the one that speaks to you,
            then arrange a private viewing.
          </p>
        </div>
      </div>

      <div className="container-page flex flex-col gap-10 pt-10 pb-16 lg:flex-row lg:items-start lg:gap-10">
        <div className="hidden lg:block">
          <FilterSidebar facets={facets} />
        </div>

        <div className="flex flex-1 flex-col gap-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-2">
              <p className="font-display text-2xl text-brand-ink">{total}</p>
              <p className="text-sm text-[#6e6b67]">stones available</p>
            </div>
            <div className="flex items-center gap-3">
              <MobileFilters facets={facets} />
              <SortSelect />
            </div>
          </div>

          <ActiveFilters />

          <GemstoneGrid items={items} />

          <Pagination
            page={page}
            totalPages={totalPages}
            buildHref={(p) => buildCollectionHref(rawParams, { page: p })}
          />
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
