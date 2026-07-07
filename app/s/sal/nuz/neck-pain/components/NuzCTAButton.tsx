"use client";

import { useCountdown } from "../hooks/useCountdown";
import { content } from "../content";

type Props = { countdownSeconds?: number };

export const NuzCTAButton = ({ countdownSeconds }: Props) => {
  const { formatted } = useCountdown(countdownSeconds ?? content.hero.ctaCountdownSeconds);

  return (
    <div className="relative items-center box-border caret-transparent flex flex-col justify-center w-full mt-[15px] md:items-start md:mt-5">
      <a
        href={content.global.ctaHref}
        className="text-white font-bold items-center bg-green-500 shadow-[rgb(0,62,14)_0px_4px_0px_0px] box-border caret-transparent flex flex-col h-[55px] justify-center leading-[16.8px] max-w-full min-h-0 min-w-0 text-center w-full mb-2.5 px-[5px] py-2.5 rounded-[250px] md:[align-items:normal] md:bg-green-500 md:block md:flex-row md:h-auto md:justify-normal md:leading-5 md:min-h-[auto] md:min-w-[auto] transition-all duration-200 active:translate-y-[2px] active:shadow-none animate-pulse-green cursor-pointer"
      >
        <div className="text-[13px] font-normal box-border caret-transparent leading-[20.8px] uppercase md:text-[14.4px] md:leading-[23.04px]">
          {content.global.ctaSaleEndsPrefix}{" "}
          <span className="text-[13px] box-border caret-transparent leading-[20.8px] md:text-[14.4px] md:leading-[23.04px] tabular-nums">
            {formatted}
          </span>
        </div>
        <div className="text-[17.6px] box-border caret-transparent leading-[22px] uppercase md:text-[20.8px]">
          {content.global.ctaLabel}
        </div>
      </a>
      <div className="static items-center box-border caret-transparent flex justify-between min-h-0 min-w-0 mt-3 mx-auto left-0 md:relative md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <img src={content.hero.ccCardImageUrl} alt="" className="box-border caret-transparent inline-block max-w-full w-[168px] ml-3" />
        </div>
      </div>
    </div>
  );
};
