"use client";

import { useCountdown } from "../../hooks/useCountdown";
import { content } from "../../content";

export const NuzMobileOrderBar = () => {
  const c = content.mobileOrderBar;
  const { formatted } = useCountdown(c.countdownSeconds);

  return (
    <div
      className="fixed text-base items-center bg-white shadow-[rgba(0,0,0,0.07)_0px_-4px_4px_0px] box-border caret-transparent flex flex-col justify-center w-full z-[999] px-3 py-2.5 rounded-t-[20px] bottom-0 left-0 right-0 md:hidden animate-fade-up"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="items-center box-border caret-transparent flex h-5 justify-center max-w-full w-full mb-2 px-[7px]">
        <div className="text-black text-xs font-medium items-center box-border caret-transparent flex justify-start leading-[14px] min-h-[auto] min-w-[auto] w-[58%]">
          <img
            src={c.fireIconUrl}
            alt=""
            className="text-xs box-border caret-transparent h-3 leading-[14px] max-w-full min-h-[auto] min-w-[auto] mr-1"
          />
          <div className="text-[10px] font-normal box-border caret-transparent leading-[14px] min-h-[auto] min-w-[auto]">
            <strong className="font-bold box-border caret-transparent leading-[14px]">{c.hurryPrefix}</strong> {c.hurrySuffix}
          </div>
        </div>
        <div className="text-blue-900 text-xs font-medium items-center box-border caret-transparent flex justify-end leading-[14px] min-h-[auto] min-w-[auto] w-[42%]">
          <img
            src={c.boxIconUrl}
            alt=""
            className="text-xs box-border caret-transparent h-5 leading-[14px] max-w-full min-h-[auto] min-w-[auto] mr-2"
          />
          <div className="text-black text-[10px] font-normal box-border caret-transparent leading-[14px] min-h-[auto] min-w-[auto]">
            {c.shipsByPrefix}{" "}
          </div>
          <div className="text-black text-[10px] font-bold box-border caret-transparent leading-[14px] min-h-[auto] min-w-[auto]">
            {c.shipsByDate}
          </div>
        </div>
      </div>
      <a
        href={content.global.ctaHref}
        className="text-white font-bold items-center bg-green-500 shadow-[rgb(0,62,14)_0px_4px_0px_0px] caret-transparent flex flex-col h-[55px] justify-center leading-[19.2px] max-w-full text-center w-full mb-2.5 px-[5px] py-2.5 rounded-[250px] transition-all duration-200 active:translate-y-[2px] active:shadow-none cursor-pointer animate-pulse-green"
      >
        <div className="text-[13px] font-normal box-border caret-transparent leading-[20.8px] min-h-[auto] min-w-[auto] uppercase">
          {c.ctaTop} <span className="tabular-nums">{formatted}</span>
        </div>
        <div className="text-[17.6px] box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] uppercase">
          {c.ctaBottom}
        </div>
      </a>
    </div>
  );
};
