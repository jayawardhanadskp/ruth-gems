import Image from "next/image";

const photos = [
  "/images/home/photo-1.png",
  "/images/home/photo-2.png",
  "/images/home/photo-3.png",
  "/images/home/photo-4.png",
  "/images/home/photo-5.png",
];

export function PhotoStrip() {
  return (
    <section className="group/strip overflow-hidden py-4">
      <div className="flex w-max animate-[photo-scroll_40s_linear_infinite] motion-reduce:animate-none group-hover/strip:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-[35px] lg:pr-[35px]"
          >
            {photos.map((src) => (
              <div
                key={src}
                className="relative h-[220px] w-[170px] overflow-hidden rounded-lg sm:h-[300px] sm:w-[220px] lg:h-[380px] lg:w-[288px]"
              >
                <Image
                  src={src}
                  alt={copy === 0 ? "Ceylon gem craft" : ""}
                  fill
                  sizes="(max-width: 1024px) 220px, 288px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
