"use client";

import { useState, useEffect } from "react";
import copy from "../../../../../copy.json";
import media from "../../../../../media.json";

const pad = (n: number) => String(n).padStart(2, "0");

export const EarCleanerOfferCard = (): JSX.Element => {
  const offer = copy.offer_section;
  const { bundle, icon_gift, icon_arrow } = media.images;
  const [totalSeconds, setTotalSeconds] = useState(offer.deal_seconds_init);

  useEffect(() => {
    const id = setInterval(() => setTotalSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="relative bg-white shadow-[rgba(0,0,0,0.06)_0px_4px_12px_0px] box-border flex flex-col justify-between min-h-[auto] min-w-[auto] text-left overflow-hidden rounded-lg border-0 border-none border-white md:flex-row md:border-2 md:border-dashed">
      <div className="relative items-center bg-violet-100 box-border flex justify-center min-h-[auto] min-w-[auto] w-full md:w-6/12">
        <img
          src={bundle.src}
          alt={bundle.alt}
          className="box-border w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="box-border min-h-[auto] min-w-[auto] w-full p-4 md:w-6/12 md:p-12">
        <div className="relative items-center box-border gap-x-2 flex justify-center w-full z-10 mx-auto">
          <div className="bg-black/10 box-border basis-0 grow h-px w-1/5 md:w-full"></div>
          <div className="box-border gap-x-1.5 flex min-h-[auto] min-w-[auto] gap-y-1.5">
            <img src={icon_gift.src} alt={icon_gift.alt} className="box-border max-w-full w-3" />
            <div className="text-xs font-bold self-center box-border shrink-0 tracking-[1px] leading-[18px] text-center uppercase">
              {offer.badge_label}
            </div>
          </div>
          <div className="bg-black/10 box-border basis-0 grow h-px w-1/5 md:w-full"></div>
        </div>
        <div className="box-border pb-2"></div>
        <p className="text-[32px] font-black box-border tracking-[-1.04px] leading-[38.4px] text-center md:text-[27.2px] md:leading-[32.64px]">
          <span className="text-rose-700">{offer.headline_discount}</span> {offer.headline_suffix}
        </p>
        <div className="box-border pb-2"></div>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-2xl font-black text-indigo-950">{offer.price}</span>
          <span className="text-base text-gray-500 line-through">{offer.compare_at_price}</span>
        </div>
        <div className="items-center box-border flex-col">
          <div className="box-border pb-2"></div>
          <div className="text-[13px] box-border leading-[18px] text-center">{offer.stock_warning}</div>
          <div className="box-border pb-5 md:pb-4"></div>
          <a
            href={copy.cta_url}
            className="relative text-white font-bold items-center bg-indigo-950 box-border flex justify-center max-w-full min-h-[72px] text-center w-full overflow-hidden px-8 py-5 rounded-lg border-2 border-solid border-transparent transition-all duration-200 hover:bg-indigo-800 active:scale-[0.97] touch-manipulation"
          >
            <div className="font-black box-border mr-2">{offer.button_text}</div>
            <div className="items-center box-border flex-col h-6 justify-center w-6">
              <img src={icon_arrow.src} alt={icon_arrow.alt} className="box-border inline h-full align-baseline w-full" />
            </div>
          </a>
          <div className="text-xs font-extrabold items-center box-border flex justify-center leading-[18px] min-h-8 text-center px-4 py-1">
            {offer.deal_ending_label}{" "}
            <span key={seconds} className="text-red-700 box-border block ml-1 px-[2.4px] md:px-0 tabular-nums animate-timer-tick">
              {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </span>
          </div>
          <div className="text-xs items-center bg-orange-50 box-border flex justify-center leading-[18px] border border-orange-100 py-2.5 rounded border-dashed">
            <div className="font-medium box-border ml-2">
              {offer.sell_out_risk_label}{" "}
              <span className="text-rose-700 font-extrabold box-border animate-pulse-soft">{offer.sell_out_risk}</span>
            </div>
            <div className="text-lg font-extralight box-border leading-[27px] mx-[13px]">|</div>
            <div className="font-extrabold box-border">{offer.guarantee_short}</div>
          </div>
        </div>
        <div className="box-border pb-2"></div>
        <div className="text-xs box-border leading-[18px] text-center">{offer.guarantee}</div>
      </div>
    </div>
  );
};
