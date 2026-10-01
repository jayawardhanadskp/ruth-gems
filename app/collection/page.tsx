import type { Metadata } from "next";
import Image from "next/image";
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
      <header data-tone="dark" className="relative isolate overflow-hidden bg-brand-ink">
        <Image
          src="/images/collection/page-title-band.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-brand-ink/45" />
        <div className="container-page flex flex-col items-center gap-4 py-10 text-center sm:gap-5 sm:py-16 lg:py-20">
          <Breadcrumbs tone="dark" items={[{ label: "Home", href: "/" }, { label: "Collection" }]} />
          <p className="eyebrow">Ceylon Gemstones</p>
          <h1 className="font-display type-h1 font-medium text-brand-cream">
            The Collection
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">
            Every stone we currently hold, with its weight, cut, treatment and
            origin stated plainly. Filter to find the one that speaks to you,
            then arrange a private viewing.
          </p>
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
