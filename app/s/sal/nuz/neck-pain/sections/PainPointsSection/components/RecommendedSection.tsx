"use client";

import { NuzPainPointsGrid } from "./PainPointsGrid";
import { useCountdown } from "../../../hooks/useCountdown";
import { content, renderInlineBold } from "../../../content";

export const NuzRecommendedSection = () => {
  const pp = content.painPoints;
  const { formatted } = useCountdown(pp.ctaCountdownSeconds);

  return (
    <>
      <div className="items-start box-border caret-transparent flex flex-col-reverse justify-start mt-5 px-5 md:items-center md:flex-row-reverse md:justify-around md:mt-[25px] md:px-0">
        <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-full min-h-[auto] min-w-[auto] md:max-w-[46%]">
          <h1 className="text-black text-2xl font-extrabold box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] mt-[16.08px] md:text-3xl md:leading-[35px] md:mt-[20.1px]">
            <span className="text-slate-600 text-2xl box-border caret-transparent leading-[27px] md:text-3xl md:leading-[35px]">
              {pp.headingPrefix}
            </span>
            {pp.headingSuffix}
          </h1>
          <div className="bg-slate-600 box-border caret-transparent h-[3px] min-h-[auto] min-w-[auto] text-left w-6/12 mt-[5px] mb-2.5"></div>
          <p className="text-black text-base box-border caret-transparent min-h-[auto] min-w-[auto] mb-6 md:text-sm">
            {pp.bodyParagraphs.map((para, i) => (
              <span key={i}>
                {para}
                {i < pp.bodyParagraphs.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            {pp.bullets.map((bullet, i) => (
              <div key={i} className="items-start box-border caret-transparent flex mb-2.5 md:items-center md:mb-2 group">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px] flex-shrink-0">
                  <div className="text-blue-500 box-border caret-transparent h-[30px] w-[30px] transition-transform duration-200 group-hover:scale-110">
                    <img src={pp.bulletIconUrl} alt="Icon" className="box-border caret-transparent inline h-full align-baseline w-full" />
                  </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[90%] md:w-4/5">
                  <div className="text-black text-base box-border caret-transparent leading-[21px] md:text-lg md:leading-6">
                    {renderInlineBold(bullet)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-full min-h-0 min-w-0 w-full md:flex md:max-w-[46%] md:min-h-[auto] md:min-w-[auto]">
          <NuzPainPointsGrid />
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 md:mt-12 px-5">
        <a
          href={content.global.ctaHref}
          className="text-white font-bold bg-green-500 shadow-[rgb(0,62,14)_0px_4px_0px_0px] block w-full max-w-[420px] mb-3 px-2 py-3 rounded-[250px] text-center transition-all duration-200 active:shadow-none cursor-pointer animate-pulse-green"
        >
          <div className="text-[13px] font-normal leading-[20.8px] uppercase md:text-[14.4px] md:leading-[23.04px]">
            {content.global.ctaSaleEndsPrefix} <span className="tabular-nums">{formatted}</span>
          </div>
          <div className="text-[17.6px] leading-[22px] uppercase md:text-[20.8px]">
            {content.global.ctaLabel}
          </div>
        </a>
        <div className="flex items-center justify-center gap-2 mt-2">
          <img src={content.global.lockIconUrl} alt="" className="inline-block h-4" />
          <span className="text-slate-900 text-xs leading-3 md:text-[12.6px]">{content.global.secureBadge}</span>
          <img src={content.global.creditCardsImageUrl} alt="" className="inline-block w-[168px] ml-2" />
        </div>
      </div>
    </>
  );
};
