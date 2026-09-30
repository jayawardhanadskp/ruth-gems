import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { Carousel } from "@/components/common/carousel";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import type { Gemstone } from "@/types/gemstone";

export function RelatedGemstones({ items }: { items: Gemstone[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section-y">
      <Reveal className="container-page">
        <Carousel
          label="Related gemstones"
          heading={<SectionHeading eyebrow="You may also like" title="Related Gemstones" />}
          action={
            <Button variant="ghost" nativeButton={false} render={<Link href="/collection" />}>
              View all
              <ArrowRight />
            </Button>
          }
          slideClassName="basis-[86%] sm:basis-1/2 lg:basis-1/4"
          slides={items.map((gemstone) => (
            <GemstoneCard key={gemstone.slug} gemstone={gemstone} />
          ))}
        />
      </Reveal>
    </section>
  );
}
