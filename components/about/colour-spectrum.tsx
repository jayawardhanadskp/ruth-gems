import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { colourSpectrum } from "@/lib/data";

export function ColourSpectrum() {
  return (
    <section className="bg-brand-forest-dark px-4 py-16 sm:px-6 lg:px-[4.167vw] lg:py-[5vw]">
      <div className="flex flex-col items-center gap-12 lg:gap-[2.5vw]">
        <Reveal className="flex flex-col items-center gap-3 text-center lg:gap-[0.625vw]">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold uppercase lg:text-[0.625vw] lg:tracking-[0.1125vw]">
            A Spectrum of Colour
          </p>
          <h2 className="font-display text-4xl font-semibold text-white lg:text-[2.2917vw] lg:leading-normal">
            The Colours of Ceylon
          </h2>
        </Reveal>
        <StaggerGrid className="flex w-full flex-wrap justify-center gap-8 lg:flex-nowrap lg:justify-between lg:gap-0">
          {colourSpectrum.map((colour) => (
            <StaggerItem key={colour.name} className="flex flex-col items-center gap-3.5 lg:gap-[0.729vw]">
              <div className="relative size-24 overflow-hidden rounded-full lg:size-[5vw]">
                <Image src={colour.swatch} alt={colour.name} fill className="object-cover" />
              </div>
              <p className="font-display text-xl font-semibold text-white lg:text-[1.1458vw] lg:leading-normal">
                {colour.name}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="max-w-[820px] text-center text-[15px] leading-[26px] text-[#d2d6ce] lg:max-w-[42.708vw] lg:text-[0.78125vw] lg:leading-[1.3542vw]">
          From the deep royal blues of Ratnapura to the elusive pink-orange
          of padparadscha, Ceylon produces a range of hues unmatched by any
          single source.
        </Reveal>
      </div>
    </section>
  );
}
