"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCountdown } from "../../hooks/useCountdown";
import { content } from "../../content";

export const GuaranteeSection = () => {
  const g = content.guarantee;
  const { ref, visible } = useScrollReveal();
  const { formatted } = useCountdown(g.ctaCountdownSeconds);

  return (
    <section
      id="order"
      ref={ref}
      className={`bg-stone-100 box-border caret-transparent px-5 py-[45px] md:pb-[37px] md:px-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="bg-stone-100 box-border caret-transparent text-center py-0 inset-y-0 md:py-[70px] md:bottom-auto">
        <div className="items-center box-border caret-transparent flex flex-col w-auto mx-auto md:flex-row md:w-[1024px]">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[30%] mb-5 mx-3 md:mb-0 animate-fade-in">
            <img src={g.imageUrl} alt={g.imageAlt} className="box-border caret-transparent inline-block max-w-full w-[175px] md:w-[250px]" />
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[317px] px-5 md:w-[70%] md:px-0">
            <h1 className="text-gray-800 text-2xl font-extrabold box-border caret-transparent leading-[27px] text-center mt-[16.08px] mb-5 md:text-slate-700 md:text-[45px] md:leading-[50px] md:text-left md:my-[30.15px]">
              {g.headlineLine1}
              <br />
              {g.headlineLine2}
            </h1>
            <div className="text-stone-500 text-base box-border caret-transparent leading-[22px] text-center -mt-2.5 md:text-[17.6px] md:leading-6 md:text-left md:mt-0">
              {g.body}
            </div>
          </div>
        </div>
      </div>

      <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-full text-center mt-5 mx-auto">
        <a
          href={content.global.ctaHref}
          className="text-white font-bold bg-green-500 shadow-[rgb(0,62,14)_0px_4px_0px_0px] caret-transparent block min-h-[auto] min-w-[auto] w-full max-w-[420px] mx-auto mb-2.5 px-[5px] py-2.5 rounded-[250px] transition-all duration-200 active:translate-y-[4px] active:shadow-none cursor-pointer animate-pulse-green"
        >
          <div className="text-[13px] font-normal box-border caret-transparent leading-[20.8px] uppercase md:text-[14.4px] md:leading-[23.04px]">
            {content.global.ctaSaleEndsPrefix} <span className="tabular-nums">{formatted}</span>
          </div>
          <div className="text-[17.6px] box-border caret-transparent leading-[22px] uppercase md:text-[20.8px]">
            {content.global.ctaLabel}
          </div>
        </a>
        <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] mt-3 gap-2">
          <img src={content.global.lockIconUrl} alt="" className="box-border caret-transparent inline-block max-w-full mr-2" />
          <div className="text-slate-900 text-xs box-border caret-transparent leading-3 md:text-[12.6px] md:leading-[12.6px]">{content.global.secureBadge}</div>
          <img src={content.global.creditCardsImageUrl} alt="" className="box-border caret-transparent inline-block max-w-full w-[168px] ml-3" />
        </div>
      </div>
    </section>
  );
};
