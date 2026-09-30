import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { Carousel } from "@/components/common/carousel";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getFeaturedGemstones } from "@/lib/data";

export async function FeaturedGemstones() {
  const featured = await getFeaturedGemstones(4);

  return (
    <section className="section-y bg-ivory">
      <Reveal className="container-page">
        <Carousel
          label="Featured gemstones"
          heading={
            <SectionHeading eyebrow="In our hands this month" title="Featured gemstones" />
          }
          action={
            <Button nativeButton={false} render={<Link href="/collection" />}>
              Browse All
            </Button>
          }
          slideClassName="basis-[86%] sm:basis-1/2 lg:basis-1/4"
          slides={featured.map((gemstone) => (
            <GemstoneCard key={gemstone.slug} gemstone={gemstone} />
          ))}
        />
      </Reveal>
    </section>
  );
}
