import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { categories } from "@/lib/data";

export function CategoryChips() {
  return (
    <section className="section-y">
      <div className="container-page flex flex-col items-center gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Collection"
            title="Find a Gemstone You Love"
            align="center"
          />
        </Reveal>
        <StaggerGrid className="max-sm:scroll-snap-x w-full gap-3 pb-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-6">
          {categories.map((category) => (
            <StaggerItem key={category.type} className="shrink-0 basis-[9.5rem] sm:basis-auto">
              <Link
                href={`/collection?gemType=${encodeURIComponent(category.type)}`}
                className="group surface flex h-full flex-col items-center gap-3 rounded-2xl px-3 pt-6 pb-5 text-center transition-[transform,box-shadow,border-color] duration-[var(--duration-enter)] ease-[var(--ease-out)] active:scale-[0.98] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-brand-gold/60 [@media(hover:hover)]:hover:shadow-md"
              >
                <div className="relative size-28 sm:size-32">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-contain transition-transform duration-[600ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:-translate-y-1 [@media(hover:hover)]:group-hover:scale-105"
                  />
                </div>
                <p className="font-display text-xl font-semibold text-brand-ink">
                  {category.type}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
