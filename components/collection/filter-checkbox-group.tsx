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
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option.label}
          className="group flex cursor-pointer items-center justify-between gap-2 rounded-md px-1.5 py-1 text-sm text-[#3c3834] transition-colors hover:bg-brand-green/5"
        >
          <span className="flex items-center gap-2.5">
            <Checkbox
              checked={selected.includes(option.label)}
              onCheckedChange={() => onToggle(option.label)}
              className="border-brand-gold-muted/40 data-checked:border-brand-green data-checked:bg-brand-green"
            />
            {option.label}
          </span>
          {typeof option.count === "number" && (
            <span className="rounded-full bg-brand-gold-muted/10 px-2 py-0.5 text-xs text-brand-gold-muted">
              {option.count}
            </span>
          )}
        </label>
      ))}
    </div>
  );
}
