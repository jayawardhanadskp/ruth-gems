import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { ScrollArrows } from "@/components/common/scroll-arrows";
import { Button } from "@/components/ui/button";
import { getFeaturedGemstones } from "@/lib/data";

export async function FeaturedGemstones() {
  const featured = await getFeaturedGemstones(4);

  return (
    <section className="container-page flex flex-col gap-8 py-16 sm:py-20">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="In our hands this month"
          title="Featured gemstones"
        />
        <div className="flex shrink-0 items-center gap-6">
          <ScrollArrows targetId="featured-track" />
          <Button
            nativeButton={false}
            render={<Link href="/collection" />}
            className="h-11 shrink-0 rounded-lg bg-brand-green-light px-[17px] text-base font-medium text-white hover:bg-brand-green-light/90"
          >
            Browse All
          </Button>
        </div>
      </Reveal>
      <StaggerGrid
        id="featured-track"
        className="flex snap-x gap-6 overflow-x-auto pb-2 [&>*]:w-full [&>*]:shrink-0 [&>*]:snap-start sm:[&>*]:w-[calc(50%-12px)] lg:[&>*]:w-[calc(25%-18px)]"
      >
        {featured.map((gemstone) => (
          <StaggerItem key={gemstone.slug}>
            <GemstoneCard gemstone={gemstone} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
