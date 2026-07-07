"use client";

import { useEffect, useState } from "react";
import { content } from "../../../content";

export const NuzStickyBarInfo = () => {
  const c = content.stickyBar;
  const [shoppers, setShoppers] = useState(c.shoppersInitial);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const step = 1 + Math.floor(Math.random() * 9);
      setShoppers((n) => Math.min(n + step, c.shoppersMax));
      const nextDelay = 4000 + Math.random() * 8000;
      timer = setTimeout(tick, nextDelay);
    };
    timer = setTimeout(tick, 4000 + Math.random() * 6000);
    return () => clearTimeout(timer);
  }, [c.shoppersMax]);

  return (
    <div className="items-center box-border caret-transparent flex justify-center max-w-full w-full md:justify-between">
      <div className="text-blue-900 text-xs font-medium items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 w-6/12 md:text-base md:justify-normal md:leading-3 md:min-h-[auto] md:min-w-[auto] md:w-auto">
        <img src={c.fireIconUrl} alt="" className="text-xs box-border caret-transparent h-3 leading-[14px] max-w-full min-h-0 min-w-0 mr-1 md:text-base md:h-5 md:leading-3 md:min-h-[auto] md:min-w-[auto] md:mr-2" />
        <div className="text-cyan-700 text-[10.4px] font-semibold box-border caret-transparent leading-[13px] min-h-0 min-w-0 md:text-sm md:leading-4 md:min-h-[auto] md:min-w-[auto]">
          {c.hurryPrefix}{" "}
          <span className="text-green-500 text-[10.4px] box-border caret-transparent leading-[13px] md:text-green-700 md:text-sm md:leading-4">
            {shoppers} {c.peopleSuffix}
          </span>{" "}
          {c.hurrySuffix}
        </div>
      </div>
      <div className="text-blue-900 text-xs font-medium items-center box-border caret-transparent flex justify-center leading-[14px] min-h-0 min-w-0 w-6/12 md:text-base md:justify-normal md:leading-3 md:min-h-[auto] md:min-w-[auto] md:w-auto">
        <img src={c.greenCircleIconUrl} alt="" className="text-xs box-border caret-transparent h-3 leading-[14px] max-w-full min-h-0 min-w-0 mr-2 md:text-base md:leading-3 md:min-h-[auto] md:min-w-[auto] animate-pulse [animation-duration:1s]" />
        <div className="text-cyan-700 text-[10.4px] font-normal box-border caret-transparent leading-[14px] min-h-0 min-w-0 md:text-base md:leading-3 md:min-h-[auto] md:min-w-[auto]">
          {c.shipsByPrefix}{" "}
          <span className="text-lg font-bold box-border caret-transparent leading-[14px] md:text-base md:leading-3">{c.shipsByDate}</span>
        </div>
      </div>
    </div>
  );
};
