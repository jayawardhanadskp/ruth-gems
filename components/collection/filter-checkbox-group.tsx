"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface FilterCheckboxGroupProps {
  options: { label: string; count?: number }[];
  selected: string[];
  onToggle: (value: string) => void;
}

export function FilterCheckboxGroup({
  options,
  selected,
  onToggle,
}: FilterCheckboxGroupProps) {
  return (
    <div className="-mx-2 flex flex-col">
      {options.map((option) => (
        <label
          key={option.label}
          className="group flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-lg px-2 text-sm text-ink-soft transition-colors duration-[var(--duration-hover)] hover:bg-sand/70"
        >
          <span className="flex items-center gap-3">
            <Checkbox
              checked={selected.includes(option.label)}
              onCheckedChange={() => onToggle(option.label)}
            />
            {option.label}
          </span>
          {typeof option.count === "number" && (
            <span className="text-xs text-stone tabular-nums">{option.count}</span>
          )}
        </label>
      ))}
    </div>
  );
}
