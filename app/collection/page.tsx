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
      <header className="border-b border-line bg-ivory">
        <div className="container-page flex flex-col gap-6 pt-4 pb-section-sm">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Collection" }]} />
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
              Ceylon Gemstones
            </p>
            <h1 className="font-display type-h1 font-medium text-brand-forest-dark">
              The Collection
            </h1>
            <p className="type-lead max-w-2xl text-stone">
              Every stone we currently hold, with its weight, cut, treatment and
              origin stated plainly. Filter to find the one that speaks to you,
              then arrange a private viewing.
            </p>
          </div>
        </div>
      </header>

      <div className="container-page flex flex-col gap-8 py-section-sm lg:flex-row lg:items-start lg:gap-10">
        <div className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto lg:overscroll-contain lg:rounded-2xl" data-lenis-prevent>
          <FilterSidebar facets={facets} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-baseline gap-2" aria-live="polite">
              <span className="font-display text-3xl font-medium text-brand-ink tabular-nums">{total}</span>
              <span className="text-sm text-stone">stones available</span>
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
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
