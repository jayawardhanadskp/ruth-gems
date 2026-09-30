import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { gemVarieties } from "@/lib/data";

export function VarietyStrip() {
  return (
    <section className="section-y">
      <div className="container-page flex flex-col items-center gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            The Family of Ceylon Gems
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            Gemstone Varieties
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            Sri Lanka is unusual for the sheer breadth of gem species it
            produces — a single island yielding a spectrum of colour found
            almost nowhere else.
          </p>
        </Reveal>
        <StaggerGrid className="max-sm:scroll-snap-x w-full gap-4 pb-3 sm:grid sm:grid-cols-4 sm:gap-5 sm:pb-0 lg:grid-cols-8">
          {gemVarieties.map((variety) => (
            <StaggerItem key={variety.name} className="w-40 shrink-0 sm:w-auto">
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand shadow-sm ring-1 ring-brand-ink/5">
                  <Image
                    src={variety.image}
                    alt={variety.name}
                    fill
                    sizes="(min-width: 1024px) 11vw, 160px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-brand-ink">{variety.name}</p>
                  <p className="text-[0.8125rem] leading-snug text-stone">{variety.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
