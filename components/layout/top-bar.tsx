"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const currencies = ["LKR", "USD", "GBP", "EUR"];

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(date);
}

export function TopBar() {
  const [now, setNow] = useState<Date | null>(null);
  const [currency, setCurrency] = useState("LKR");

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const localTimeZone =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "UTC";

  return (
    <div className="hidden border-b border-white/10 bg-brand-forest-dark text-[#d1d8d3] lg:block">
      <div className="container-page flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Clock3 className="size-3.5 text-brand-gold" />
            Sri Lanka Time:{" "}
            <span className="font-medium text-brand-cream">
              {now ? formatTime(now, "Asia/Colombo") : "--:--"}
            </span>
            <span className="text-[#8a9490]">(GMT+5:30)</span>
          </span>
          {localTimeZone !== "Asia/Colombo" && (
            <span className="flex items-center gap-1.5 border-l border-white/10 pl-5">
              Your Time:{" "}
              <span className="font-medium text-brand-cream">
                {now ? formatTime(now, localTimeZone) : "--:--"}
              </span>
            </span>
          )}
        </div>

        <Select value={currency} onValueChange={(value) => setCurrency(value as string)}>
          <SelectTrigger className="h-7 gap-1.5 rounded-md border-white/15 bg-transparent px-2.5 text-xs text-[#d1d8d3] hover:bg-white/5 [&_svg]:text-[#d1d8d3]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((code) => (
              <SelectItem key={code} value={code}>
                {code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
