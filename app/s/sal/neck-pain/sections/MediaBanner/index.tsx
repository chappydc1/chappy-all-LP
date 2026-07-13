"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { content } from "../../content";

export const MediaBanner = () => {
  const { ref, visible } = useScrollReveal();
  const c = content.mediaBanner;

  return (
    <div
      ref={ref}
      className={`relative items-center bg-white box-border caret-transparent flex h-[117px] justify-start w-full overflow-hidden transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex animate-marquee whitespace-nowrap items-center gap-x-10 min-w-max">
        {[...c.logos, ...c.logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center min-w-[80px] mx-5 grayscale hover:grayscale-0 transition-all duration-300">
            <img src={logo.src} alt={logo.alt} className={`max-w-full ${logo.heightClass} object-contain`} />
          </div>
        ))}
      </div>

      <div className="absolute text-[21px] font-bold items-center bg-[radial-gradient(circle,rgb(255,255,255)_20%,rgba(247,252,253,0))] box-border caret-transparent flex flex-col h-full justify-center leading-[21px] max-w-full text-center w-full pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[35%]">
        <div className="text-sky-950 box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          {c.overlayText}
        </div>
      </div>
    </div>
  );
};
