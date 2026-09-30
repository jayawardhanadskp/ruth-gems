import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { categories } from "@/lib/data";

export function CategoryChips() {
  return (
    <section className="container-page flex flex-col items-center gap-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Collection"
          title="Find a Gemstone You Love"
          align="center"
        />
      </Reveal>
      <StaggerGrid className="flex w-full gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-2.5 sm:overflow-visible sm:pb-0 lg:grid-cols-6">
        {categories.map((category) => (
          <StaggerItem key={category.type} className="shrink-0">
            <Link
              href={`/collection?gemType=${encodeURIComponent(category.type)}`}
              className="flex h-[220px] w-[150px] flex-col items-center justify-center gap-5 rounded-lg bg-white p-3 shadow-[0_0_4.5px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 sm:h-[242px] sm:w-full"
            >
              <div className="relative size-[110px] overflow-hidden rounded-full border border-[#f2f2f2] sm:size-[142px]">
                <Image
                  src={category.image}
                  alt={category.type}
                  fill
                  sizes="142px"
                  className="object-cover"
                />
              </div>
              <p className="font-display text-lg font-semibold text-[#1e1b16]">
                {category.type}
              </p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
