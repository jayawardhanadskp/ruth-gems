"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function ImageGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="surface relative aspect-square w-full overflow-hidden rounded-3xl bg-sand p-2 shadow-md sm:aspect-[5/4] lg:aspect-square">
        <div className="relative size-full overflow-hidden rounded-2xl bg-white">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: reduce ? 1 : 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[active]}
                alt={`${name}, view ${active + 1} of ${images.length}`}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {images.length > 1 && (
        <ul className="grid grid-cols-4 gap-3" aria-label="Gemstone views">
          {images.map((src, i) => (
            <li key={src + i}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show view ${i + 1}`}
                aria-current={i === active}
                className={cn(
                  "relative block aspect-square min-h-11 w-full cursor-pointer overflow-hidden rounded-xl border bg-white outline-none transition-[transform,border-color,box-shadow,opacity] duration-[var(--duration-press)] ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  i === active
                    ? "border-brand-green shadow-md ring-1 ring-brand-green"
                    : "border-line opacity-80 [@media(hover:hover)]:hover:opacity-100"
                )}
              >
                <Image src={src} alt="" fill sizes="160px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
