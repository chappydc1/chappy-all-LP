"use client";

import { useEffect, useState } from "react";

const formatUpdatedAt = () => {
  const updatedAt = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(updatedAt);
};

export const NewsBar = () => {
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    setUpdatedAt(formatUpdatedAt());
  }, []);

  return (
    <div className="items-center border-b-gray-200 box-border caret-transparent gap-x-4 flex max-w-[1284px] outline-[3px] gap-y-2 mx-auto px-5 py-3 border-b border-solid md:px-6">
      <div className="relative text-zinc-800 text-[13px] font-bold items-center bg-zinc-100 border-l-orange-600 box-border caret-transparent flex tracking-[0.5px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] uppercase text-nowrap px-4 py-2 border-l-4 border-solid">
        Breaking News
      </div>
      <span className="text-zinc-800 text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
        Updated: {updatedAt}
      </span>
    </div>
  );
};
