"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const MULTI_FIELDS = [
  "gemType",
  "colour",
  "cut",
  "clarity",
  "treatment",
  "origin",
  "certification",
];

export function ActiveFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const chips: { key: string; label: string; remove: () => URLSearchParams }[] = [];

  for (const field of MULTI_FIELDS) {
    for (const value of searchParams.getAll(field)) {
      chips.push({
        key: `${field}:${value}`,
        label: value,
        remove: () => {
          const params = new URLSearchParams(searchParams.toString());
          const remaining = params.getAll(field).filter((v) => v !== value);
          params.delete(field);
          remaining.forEach((v) => params.append(field, v));
          return params;
        },
      });
    }
  }

  const minCarat = searchParams.get("minCarat");
  const maxCarat = searchParams.get("maxCarat");
  if (minCarat || maxCarat) {
    chips.push({
      key: "carat",
      label: `${minCarat ?? "0.5"} – ${maxCarat ?? "12.0"} ct`,
      remove: () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("minCarat");
        params.delete("maxCarat");
        return params;
      },
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Active filters">
      {chips.map((chip) => (
        <button
          key={chip.key}
          onClick={() => router.push(`/collection?${chip.remove().toString()}`, { scroll: false })}
          aria-label={`Remove filter ${chip.label}`}
          className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/[0.07] pr-3.5 pl-4 text-sm font-semibold text-brand-green transition-[transform,background-color] duration-[var(--duration-press)] ease-out active:scale-[0.97] [@media(hover:hover)]:hover:bg-brand-green/[0.12]"
        >
          {chip.label}
          <X className="size-3.5" />
        </button>
      ))}
      <button
        onClick={() => router.push("/collection", { scroll: false })}
        className="min-h-11 cursor-pointer rounded-md px-2 text-sm font-semibold text-brand-gold-muted underline-offset-4 hover:underline"
      >
        Clear all
      </button>
    </div>
  );
}
