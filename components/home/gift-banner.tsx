import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";
import { ScrollArrows } from "@/components/common/scroll-arrows";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const images = [
  "/images/home/gift-1.png",
  "/images/home/gift-2.png",
  "/images/home/gift-3.png",
];

export function GiftBanner() {
  return (
    <section className="bg-[#f5faf9] py-16 sm:py-20">
      <div className="container-page flex flex-col gap-8">
        <Reveal className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="A Gift from Ceylon"
            title="Give the Gift of a Ceylon Sapphire"
          />
          <ScrollArrows targetId="gift-track" className="shrink-0" />
        </Reveal>
        <StaggerGrid id="gift-track" className="flex snap-x gap-4 overflow-x-auto [&>*]:w-full [&>*]:shrink-0 [&>*]:snap-start sm:[&>*]:w-[calc(33.333%-11px)]">
          {images.map((src) => (
            <StaggerItem key={src}>
              <div className="relative h-[280px] w-full overflow-hidden rounded-lg sm:h-[358px]">
                <Image
                  src={src}
                  alt="A gift of Ceylon sapphire"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
