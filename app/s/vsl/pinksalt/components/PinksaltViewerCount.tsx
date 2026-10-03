"use client";
import { useEffect, useState } from "react";

const VIEWER_BASE_COUNT = 575;
const VIEWER_MIN = 540;
const VIEWER_MAX = 620;
const VIEWER_INTERVAL_MS = 3500;
const VIEWER_DELTA = 3;

type ViewerCountProps = {
  label?: string;
  baseCount?: number;
  min?: number;
  max?: number;
};

export const PinksaltViewerCount = ({
  label = "viewers are watching right now...",
  baseCount = VIEWER_BASE_COUNT,
  min = VIEWER_MIN,
  max = VIEWER_MAX,
}: ViewerCountProps) => {
  const [count, setCount] = useState(baseCount);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * (VIEWER_DELTA * 2 + 1)) - VIEWER_DELTA;
        const next = Math.max(min, Math.min(max, prev + delta));
        if (next !== prev) setFlash(true);
        return next;
      });
    }, VIEWER_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [min, max]);

  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(false), 400);
    return () => clearTimeout(t);
  }, [flash]);

  return (
    <div className="relative gap-x-5 max-w-full min-h-[auto] gap-y-5">
      <div className="text-black text-[15px] font-medium leading-[22.5px] text-center w-full mt-2.5 flex items-center justify-center gap-1.5">
        <span className="live-dot inline-block w-2 h-2 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" />
        <span className={`font-semibold transition-colors duration-300 ${flash ? "text-red-600" : "text-black"}`}>
          {count}
        </span>
        {" "}{label}
      </div>
    </div>
  );
};
