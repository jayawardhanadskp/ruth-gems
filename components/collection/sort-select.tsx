"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions = [
  { value: "newest", label: "Newest arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "carat-desc", label: "Carat: High to Low" },
];

export function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("sort") ?? "newest";

  return (
    <Select
      value={current}
      onValueChange={(value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === "newest") {
          params.delete("sort");
        } else {
          params.set("sort", value as string);
        }
        params.delete("page");
        router.push(`/collection?${params.toString()}`, { scroll: false });
      }}
    >
      <SelectTrigger aria-label="Sort" className="w-full min-w-0 gap-2 text-sm text-brand-ink sm:w-auto">
        <span className="hidden text-stone sm:inline">Sort:</span>
        <SelectValue>
          {sortOptions.find((o) => o.value === current)?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
