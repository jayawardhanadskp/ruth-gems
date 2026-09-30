"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollArrowsProps {
  /** id of the horizontally scrollable element these buttons control */
  targetId: string;
  className?: string;
}

/** Prev/next outline buttons from the Figma; hidden when the target has nothing to scroll. */
export function ScrollArrows({ targetId, className }: ScrollArrowsProps) {
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const check = () => setScrollable(el.scrollWidth > el.clientWidth + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId]);

  if (!scrollable) return null;

  const scroll = (dir: 1 | -1) => {
    const el = document.getElementById(targetId);
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const btn =
    "flex size-10 items-center justify-center rounded-lg border border-brand-green text-brand-green transition-colors hover:bg-brand-green hover:text-white";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button type="button" aria-label="Previous" onClick={() => scroll(-1)} className={btn}>
        <ArrowLeft className="size-4" />
      </button>
      <button type="button" aria-label="Next" onClick={() => scroll(1)} className={btn}>
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
