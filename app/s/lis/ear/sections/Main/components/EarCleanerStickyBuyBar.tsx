"use client";

import { useState, useEffect } from "react";
import copy from "../../../copy.json";
import media from "../../../media.json";

export const EarCleanerStickyBuyBar = (): JSX.Element => {
  const { button_text, badge, scroll_threshold_px } = copy.sticky_buy_bar;
  const { icon_arrow, icon_discount } = media.images;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > scroll_threshold_px);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll_threshold_px]);

  return (
    <div
      className={`fixed bg-white box-border block w-full pt-4 pb-2 bottom-0 left-0 right-0 z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] transition-transform duration-500 ease-in-out md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="box-border px-4">
        <div className="box-border max-w-[864px] w-full mx-auto">
          <div className="box-border flex flex-col">
            <a
              href={copy.cta_url}
              className="relative text-white font-bold items-center bg-indigo-950 box-border flex justify-center max-w-full min-h-[68px] text-center w-full overflow-hidden px-8 py-4 rounded-lg transition-all duration-150 hover:bg-indigo-800 active:scale-[0.97] touch-manipulation"
            >
              <div className="font-black box-border tracking-[0.176px]">{button_text}</div>
              <div className="absolute items-center box-border flex-col h-6 justify-center w-6 right-6">
                <img src={icon_arrow.src} alt={icon_arrow.alt} className="box-border inline h-full align-baseline w-full" />
              </div>
            </a>
            <div className="items-center box-border gap-x-1.5 flex justify-center gap-y-1.5 w-full mt-2">
              <div className="box-border h-[18px] w-[18px]">
                <img src={icon_discount.src} alt={icon_discount.alt} className="box-border inline h-full align-baseline w-full" />
              </div>
              <p className="text-xs font-bold box-border leading-[18px] text-left uppercase mr-[18px]">{badge}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
