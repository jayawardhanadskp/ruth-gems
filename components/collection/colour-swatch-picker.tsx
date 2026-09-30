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
    <div className="grid grid-cols-4 gap-3">
      {options.map((colour) => {
        const isSelected = selected.includes(colour);
        return (
          <button
            key={colour}
            type="button"
            onClick={() => onToggle(colour)}
            className="flex flex-col items-center gap-1.5"
            aria-pressed={isSelected}
            title={colour}
          >
            <span
              className={cn(
                "size-7 rounded-full border-2 shadow-sm transition-all hover:scale-105",
                isSelected
                  ? "scale-110 border-brand-green ring-2 ring-brand-green/30 ring-offset-2"
                  : "border-white/60 hover:border-brand-gold-muted/50"
              )}
              style={{ backgroundColor: colourHex[colour] }}
            />
            <span
              className={cn(
                "text-[10px] transition-colors",
                isSelected ? "font-medium text-brand-ink" : "text-muted-foreground"
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
