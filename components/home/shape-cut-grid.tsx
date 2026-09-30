import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { shapes } from "@/lib/data";

export function ShapeCutGrid() {
  return (
    <section className="section-y">
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Browse by Shape & Cut" title="Find your perfect cut" />
        </Reveal>
        <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {shapes.map((shape) => (
            <StaggerItem key={shape.name} className="h-full">
              <Link
                href={`/collection?cut=${encodeURIComponent(shape.name)}`}
                className="group surface flex h-full flex-col items-center gap-4 rounded-2xl px-4 py-8 text-center transition-[transform,box-shadow,border-color] duration-[var(--duration-enter)] ease-[var(--ease-out)] active:scale-[0.98] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-brand-gold/60 [@media(hover:hover)]:hover:shadow-md"
              >
                <div className="relative h-16 w-20 transition-transform duration-[500ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-110">
                  <Image src={shape.icon} alt="" fill className="object-contain" />
                </div>
                <p className="font-display text-xl font-semibold text-brand-ink">{shape.name}</p>
                <p className="text-[0.8125rem] leading-snug text-stone">{shape.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
