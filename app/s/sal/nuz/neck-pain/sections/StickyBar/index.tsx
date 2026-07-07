"use client";

import { useEffect, useState } from "react";
import { NuzStickyBarInfo } from "./components/NuzStickyBarInfo";
import { content } from "../../content";

export const NuzStickyBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed top-0 left-0 right-0 z-[1000] bg-white shadow-[rgba(0,0,0,0.15)_0px_2px_20px_0px] transition-all duration-300 ${scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="flex items-center justify-between w-full py-3 px-3 lg:px-4">
        <NuzStickyBarInfo />
        <a
          href={content.global.ctaHref}
          className="text-white font-bold items-center bg-green-500 flex h-[37px] justify-center leading-[18px] uppercase ml-2.5 px-6 py-[9px] rounded-[20px] border-2 border-solid border-transparent transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap text-sm"
        >
          {content.global.orderNowShort}
        </a>
      </div>
    </div>
  );
};
