"use client";

import { useCountdown } from "../../../hooks/useCountdown";
import { content } from "../../../content";

export const CountdownTimer = () => {
  const { hrs, mins, secs } = useCountdown(content.countdownBanner.initialSeconds);
  const labels = content.countdownBanner.labels;

  return (
    <div className="relative text-[11.2px] items-center box-border caret-transparent gap-x-2 flex shrink-0 min-h-[auto] min-w-[auto] md:text-base md:shrink">
      <div className="relative text-[11.2px] items-center bg-blue-900 box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] z-[1] p-0.5 rounded-[5px] scale-[0.85] md:static md:text-base md:transform-none md:z-auto md:p-[3px]">
        <div className="text-xs items-center bg-blue-900 box-border caret-transparent hidden flex-col h-8 justify-center min-h-8 min-w-[30.4px] w-[30.4px] mx-0.5 px-0.5 py-[3px] rounded-sm md:min-w-8 md:w-8 md:px-[3px]">
          <div className="text-[15.2px] font-extrabold box-border caret-transparent leading-[15.2px] tabular-nums">00</div>
          <div className="text-[8px] font-semibold box-border caret-transparent leading-[8px] uppercase">{labels.days}</div>
        </div>
        <div className="text-[11.2px] font-extrabold box-border caret-transparent hidden px-[2.4px] md:text-base">:</div>

        <div className="text-xs items-center bg-blue-900 box-border caret-transparent flex flex-col h-8 justify-center min-h-8 min-w-[30.4px] w-[30.4px] mx-0.5 px-0.5 py-[3px] rounded-sm md:min-w-8 md:w-8 md:px-[3px] transition-all duration-300">
          <div className="text-[15.2px] font-extrabold box-border caret-transparent leading-[15.2px] min-h-[auto] min-w-[auto] tabular-nums">{hrs}</div>
          <div className="text-[8px] font-semibold box-border caret-transparent leading-[8px] min-h-[auto] min-w-[auto] uppercase">{labels.hrs}</div>
        </div>
        <div className="text-[11.2px] font-extrabold box-border caret-transparent min-h-[auto] min-w-[auto] px-[2.4px] md:text-base animate-pulse">:</div>

        <div className="text-xs items-center bg-blue-900 box-border caret-transparent flex flex-col h-8 justify-center min-h-8 min-w-[30.4px] w-[30.4px] mx-0.5 px-0.5 py-[3px] rounded-sm md:min-w-8 md:w-8 md:px-[3px] transition-all duration-300">
          <div className="text-[15.2px] font-extrabold box-border caret-transparent leading-[15.2px] min-h-[auto] min-w-[auto] tabular-nums">{mins}</div>
          <div className="text-[8px] font-semibold box-border caret-transparent leading-[8px] min-h-[auto] min-w-[auto] uppercase">{labels.min}</div>
        </div>
        <div className="text-[11.2px] font-extrabold box-border caret-transparent min-h-[auto] min-w-[auto] px-[2.4px] md:text-base animate-pulse">:</div>

        <div className="text-xs items-center bg-blue-900 box-border caret-transparent flex flex-col h-8 justify-center min-h-8 min-w-[30.4px] w-[30.4px] mx-0.5 px-0.5 py-[3px] rounded-sm md:min-w-8 md:w-8 md:px-[3px] transition-all duration-300">
          <div className="text-[15.2px] font-extrabold box-border caret-transparent leading-[15.2px] min-h-[auto] min-w-[auto] tabular-nums">{secs}</div>
          <div className="text-[8px] font-semibold box-border caret-transparent leading-[8px] min-h-[auto] min-w-[auto] uppercase">{labels.sec}</div>
        </div>
      </div>
    </div>
  );
};
