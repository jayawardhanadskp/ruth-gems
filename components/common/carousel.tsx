"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  slides: ReactNode[];
  /** Tailwind basis classes per breakpoint, e.g. "basis-[85%] sm:basis-1/2 lg:basis-1/4" */
  slideClassName: string;
  /** Rendered on the left of the controls row (usually a SectionHeading). */
  heading?: ReactNode;
  /** Extra action next to the arrows (e.g. "Browse All"). */
  action?: ReactNode;
  label: string;
  className?: string;
}

/**
 * Embla carousel with 44px arrow buttons. Arrows disable at the ends and hide
 * entirely when everything fits. Drag/swipe works on touch; arrows + focusable
 * slides cover keyboard.
 */
export function Carousel({
  slides,
  slideClassName,
  heading,
  action,
  label,
  className,
}: CarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    duration: 28,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    const first = setTimeout(sync, 0);
    embla.on("select", sync).on("reInit", sync);
    return () => {
      clearTimeout(first);
      embla.off("select", sync).off("reInit", sync);
    };
  }, [embla, sync]);

  const showControls = canPrev || canNext;
  const btn =
    "flex size-11 cursor-pointer items-center justify-center rounded-full border border-brand-ink/20 text-brand-ink outline-none transition-[transform,background-color,border-color,color,opacity] duration-[var(--duration-press)] ease-out active:scale-95 disabled:cursor-default disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [@media(hover:hover)]:enabled:hover:border-brand-green [@media(hover:hover)]:enabled:hover:bg-brand-green [@media(hover:hover)]:enabled:hover:text-brand-cream";

  return (
    <div className={cn("flex flex-col gap-6 sm:gap-10", className)}>
      {(heading || action || showControls) && (
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          {heading}
          <div className="flex shrink-0 items-center gap-3">
            {showControls && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous"
                  disabled={!canPrev}
                  onClick={() => embla?.scrollPrev()}
                  className={btn}
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  disabled={!canNext}
                  onClick={() => embla?.scrollNext()}
                  className={btn}
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            )}
            {action}
          </div>
        </div>
      )}
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="-mx-2 overflow-hidden px-2 py-3 -my-3"
      >
        <div className="-ml-4 flex touch-pan-y sm:-ml-6">
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className={cn("min-w-0 shrink-0 grow-0 pl-4 sm:pl-6", slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
