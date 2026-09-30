"use client";

import { cn } from "@/lib/utils";
import type { GemColour } from "@/types/gemstone";

const colourHex: Record<GemColour, string> = {
  "Royal Blue": "#1d3f8f",
  Cornflower: "#4f83cc",
  Padparadscha: "#e8794f",
  Pink: "#e0629b",
  Yellow: "#e6c14a",
  Green: "#3f7d52",
  Violet: "#7a5ea8",
  White: "#f1efe9",
};

export function ColourSwatchPicker({
  options,
  selected,
  onToggle,
}: {
  options: GemColour[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="-mx-1 grid grid-cols-4 gap-1">
      {options.map((colour) => {
        const isSelected = selected.includes(colour);
        return (
          <button
            key={colour}
            type="button"
            onClick={() => onToggle(colour)}
            className="group flex min-h-[4.25rem] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg px-1 py-2 outline-none transition-colors hover:bg-sand/70 focus-visible:outline-2 focus-visible:outline-ring"
            aria-pressed={isSelected}
            title={colour}
          >
            <span
              className={cn(
                "size-7 rounded-full border-2 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-press)] ease-out group-active:scale-95 [@media(hover:hover)]:group-hover:scale-105",
                isSelected
                  ? "scale-110 border-brand-green ring-2 ring-brand-green/30 ring-offset-2"
                  : "border-white"
              )}
              style={{ backgroundColor: colourHex[colour] }}
            />
            <span
              className={cn(
                "text-[0.6875rem] transition-colors",
                isSelected ? "font-semibold text-brand-ink" : "text-stone"
              )}
            >
              {colour}
            </span>
          </button>
        );
      })}
    </div>
  );
}
