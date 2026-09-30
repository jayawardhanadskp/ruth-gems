import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { gemVarieties } from "@/lib/data";

export function VarietyStrip() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-[4.167vw] lg:py-[5vw]">
      <div className="flex flex-col items-center gap-11 lg:gap-[2.2917vw]">
        <Reveal className="flex flex-col items-center gap-3 text-center lg:gap-[0.625vw]">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.1125vw]">
            The Family of Ceylon Gems
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-ink lg:text-[2.2917vw] lg:leading-normal">
            Gemstone Varieties
          </h2>
          <p className="max-w-[720px] text-base leading-[26px] text-[#6e6b67] lg:max-w-[37.5vw] lg:text-[0.8333vw] lg:leading-[1.3542vw]">
            Sri Lanka is unusual for the sheer breadth of gem species it
            produces — a single island yielding a spectrum of colour found
            almost nowhere else.
          </p>
        </Reveal>
        <StaggerGrid className="flex w-full gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-8 lg:gap-[0.833vw]">
          {gemVarieties.map((variety) => (
            <StaggerItem key={variety.name} className="w-[140px] shrink-0 sm:w-auto">
              <div className="flex flex-col gap-2 lg:gap-[0.417vw]">
                <div className="relative h-[150px] overflow-hidden rounded-lg bg-white lg:h-[7.899vw]">
                  <Image
                    src={variety.image}
                    alt={variety.name}
                    fill
                    sizes="(min-width: 1024px) 11vw, 150px"
                    className="object-cover"
                  />
                </div>
                <p className="text-[13.6px] leading-[20.4px] text-[#0d1524] lg:text-[0.7083vw] lg:leading-[1.0625vw]">
                  {variety.name}
                </p>
                <p className="text-[11.52px] leading-[15.84px] text-[#6b7180] lg:text-[0.6vw] lg:leading-[0.825vw]">
                  {variety.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
