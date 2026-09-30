"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

/** 44px hit area around a 36px visual. Local state only until there is a wishlist backend. */
export function SaveButton({ label }: { label: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from saved` : `Save ${label}`}
      onClick={() => setSaved((v) => !v)}
      className="group/save relative z-10 flex size-11 cursor-pointer items-center justify-center rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-brand-cream/95 text-brand-ink shadow-sm transition-transform duration-[var(--duration-press)] ease-out group-active/save:scale-90 [@media(hover:hover)]:group-hover/save:scale-105">
        <Heart
          className={cn(
            "size-4 transition-colors duration-[var(--duration-hover)]",
            saved && "fill-brand-gold text-brand-gold"
          )}
          strokeWidth={1.5}
        />
      </span>
    </button>
  );
}
