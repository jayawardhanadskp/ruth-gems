import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { colourSpectrum } from "@/lib/data";

export function ColourSpectrum() {
  return (
    <section data-tone="dark" className="section-y bg-brand-forest-dark">
      <div className="container-page flex flex-col items-center gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            A Spectrum of Colour
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          </p>
          <h2 className="font-display type-h2 font-medium text-brand-cream">
            The Colours of Ceylon
          </h2>
        </Reveal>
        <StaggerGrid className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
          {colourSpectrum.map((colour) => (
            <StaggerItem key={colour.name} className="flex flex-col items-center gap-4">
              <div className="relative size-24 overflow-hidden rounded-full shadow-xl ring-1 ring-white/15 sm:size-28">
                <Image src={colour.swatch} alt="" fill className="object-cover" />
              </div>
              <p className="text-center font-display text-xl font-semibold text-brand-cream">
                {colour.name}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="max-w-3xl text-center type-lead text-mist">
          From the deep royal blues of Ratnapura to the elusive pink-orange
          of padparadscha, Ceylon produces a range of hues unmatched by any
          single source.
        </Reveal>
      </div>
    </section>
  );
}
