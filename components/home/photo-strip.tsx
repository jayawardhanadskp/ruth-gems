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
    <section
      aria-label="Ceylon gem craft"
      className="group/strip overflow-hidden bg-ivory py-section-sm [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="flex w-max animate-[photo-scroll_48s_linear_infinite] motion-reduce:animate-none group-hover/strip:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6">
            {photos.map((src, i) => (
              <div
                key={src}
                className="relative h-56 w-44 overflow-hidden rounded-2xl shadow-md sm:h-72 sm:w-56 lg:h-80 lg:w-64"
                style={{ marginTop: i % 2 ? "1.5rem" : 0 }}
              >
                <Image
                  src={src}
                  alt={copy === 0 ? "Ceylon gem craft" : ""}
                  fill
                  sizes="(max-width: 1024px) 224px, 256px"
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
