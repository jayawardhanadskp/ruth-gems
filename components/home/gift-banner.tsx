import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";
import { Carousel } from "@/components/common/carousel";
import { Reveal } from "@/components/motion/reveal";

const images = [
  "/images/home/gift-1.png",
  "/images/home/gift-2.png",
  "/images/home/gift-3.png",
];

export function GiftBanner() {
  return (
    <section className="section-y bg-sand/60">
      <Reveal className="container-page">
        <Carousel
          label="Gift inspiration"
          heading={
            <SectionHeading
              eyebrow="A Gift from Ceylon"
              title="Give the Gift of a Ceylon Sapphire"
            />
          }
          slideClassName="basis-[86%] sm:basis-1/2 lg:basis-1/3"
          slides={images.map((src) => (
            <div
              key={src}
              className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-sand shadow-md"
            >
              <Image
                src={src}
                alt="A gift of Ceylon sapphire"
                fill
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand-ink/5" />
            </div>
          ))}
        />
      </Reveal>
    </section>
  );
}
