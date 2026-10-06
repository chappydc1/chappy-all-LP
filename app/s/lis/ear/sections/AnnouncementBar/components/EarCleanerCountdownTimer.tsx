"use client";

import { useState, useEffect } from "react";

const UNIT_CLASS =
  "text-indigo-950 text-[19px] font-black box-border leading-[19px] min-h-[auto] min-w-[auto] md:text-[22px] md:leading-[22px] transition-all duration-150";

const LABEL_CLASS =
  "text-indigo-950 text-[11px] font-medium box-border leading-[13.2px] min-h-[auto] min-w-[auto] uppercase font-inter md:text-xs md:leading-[14.4px]";

const SEPARATOR_CLASS =
  "text-indigo-950 text-sm font-extrabold box-border leading-[21px] min-h-[auto] min-w-[auto] px-0 md:text-base md:leading-6 md:px-[2.4px] animate-pulse-soft";

const pad = (n: number) => String(n).padStart(2, "0");

export const EarCleanerCountdownTimer = ({ initialSeconds }: { initialSeconds: number }): JSX.Element => {
  const [totalSeconds, setTotalSeconds] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => setTotalSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="items-start bg-white box-border gap-x-0.5 flex justify-center min-h-[auto] min-w-[auto] gap-y-0.5 w-[122px] shrink-0 px-2 py-[5px] rounded-[5px] md:gap-x-px md:gap-y-px md:w-[150px] md:px-2.5">
      <div className="items-center box-border flex flex-col justify-center min-h-[auto] min-w-[auto]">
        <div className={UNIT_CLASS}>{pad(hours)}</div>
        <div className={LABEL_CLASS}>Hrs</div>
      </div>
      <div className={SEPARATOR_CLASS}>:</div>
      <div className="items-center box-border flex flex-col justify-center min-h-[auto] min-w-[auto]">
        <div className={UNIT_CLASS}>{pad(minutes)}</div>
        <div className={LABEL_CLASS}>min</div>
      </div>
      <div className={SEPARATOR_CLASS}>:</div>
      <div className="items-center box-border flex flex-col justify-center min-h-[auto] min-w-[auto]">
        <div key={seconds} className={`${UNIT_CLASS} animate-timer-tick`}>
          {pad(seconds)}
        </div>
        <div className={LABEL_CLASS}>sec</div>
      </div>
    </div>
  );
};
