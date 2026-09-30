"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ImageGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-[18px] lg:w-[39.583vw] lg:shrink-0">
      <div className="relative h-[320px] w-full overflow-hidden rounded sm:h-[420px] lg:h-[21.406vw]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={name}
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="flex gap-4">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              className={cn(
                "relative h-[90px] flex-1 overflow-hidden lg:h-[6.771vw]",
                i === active
                  ? "rounded-lg ring-2 ring-inset ring-brand-green-light"
                  : "rounded-[3px]"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="200px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
