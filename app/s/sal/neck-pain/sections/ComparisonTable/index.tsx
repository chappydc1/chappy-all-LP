"use client";

import { ComparisonRow } from "./components/ComparisonRow";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCountdown } from "../../hooks/useCountdown";
import { content } from "../../content";

export const ComparisonTable = () => {
  const c = content.comparison;
  const { ref, visible } = useScrollReveal();
  const { formatted } = useCountdown(c.ctaCountdownSeconds);

  return (
    <div
      ref={ref}
      className={`box-border caret-transparent pt-9 pb-[35px] px-5 md:pt-[19px] md:pb-[70px] md:px-0 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="box-border caret-transparent w-auto mx-auto md:w-[750px]">
        <h1 className="text-slate-700 text-[34px] font-extrabold box-border caret-transparent leading-[37px] text-center my-[22.78px] md:text-[45px] md:leading-[50px] md:my-[30.15px]">
          {c.headline}
        </h1>
      </div>

      <div className="box-border caret-transparent max-w-none overflow-auto mt-11 mx-auto md:max-w-[1000px] md:overflow-visible">
        <div className="box-border caret-transparent w-[500px] md:w-auto">
          <div className="box-border caret-transparent flex justify-between max-w-[1000px]">
            <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] w-[43%] pr-[9px] md:pr-0"></div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[29%]">
              <div className="items-center bg-sky-100 box-border caret-transparent flex flex-col justify-center pt-[7px] pb-[13px] px-[9px] rounded-t-[5px] md:pb-[7px] md:px-0">
                <img src={c.nuzzleColumnImageUrl} alt="table-head-img" className="box-border caret-transparent h-auto max-w-full min-h-[auto] min-w-[auto] w-[81px] pt-[5px] rounded-[100px] md:h-[90px] md:w-auto md:pt-0" />
                <img src={c.nuzzleLogoUrl} alt="table-logo" className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[55px] px-[5px] md:w-20 md:px-0" />
              </div>
            </div>
            {c.competitors.map((col, i) => (
              <div key={i} className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[29%]">
                <div className="items-center box-border caret-transparent flex flex-col justify-center">
                  <img src={col.img} alt="table-head-img" className="box-border caret-transparent h-auto max-w-full min-h-[auto] min-w-[auto] w-[81px] pt-[5px] rounded-[100px] md:h-[90px] md:w-auto md:pt-0" />
                  <div className="text-zinc-800 text-[13px] font-bold box-border caret-transparent leading-[19px] min-h-[auto] min-w-[auto] text-center md:text-lg md:leading-[21px]">{col.label}</div>
                </div>
              </div>
            ))}
          </div>

          {c.rows.map((row, i) => (
            <ComparisonRow key={i} {...row} />
          ))}

          <div className="box-border caret-transparent flex justify-between max-w-[1000px]">
            <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] w-[43%] pr-[9px] md:pr-0"></div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[29%]">
              <div className="items-center bg-sky-100 box-border caret-transparent flex justify-center px-0.5 py-2 rounded-b-[5px] md:px-0 md:py-5"></div>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[29%]">
                <div className="items-center box-border caret-transparent flex justify-center px-0.5 py-[18px] md:px-0 md:py-5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-full text-center mt-10 mx-auto">
        <a
          href={content.global.ctaHref}
          className="text-white font-bold bg-green-500 shadow-[rgb(0,62,14)_0px_4px_0px_0px] box-border caret-transparent block min-h-[auto] min-w-[auto] w-full max-w-[420px] mx-auto mb-2.5 px-[5px] py-2.5 rounded-[250px] transition-all duration-200 active:shadow-none cursor-pointer"
        >
          <div className="text-[13px] font-normal box-border caret-transparent leading-[20.8px] uppercase md:text-[14.4px] md:leading-[23.04px]">
            {content.global.ctaSaleEndsPrefix} <span className="tabular-nums">{formatted}</span>
          </div>
          <div className="text-[17.6px] box-border caret-transparent leading-[22px] uppercase md:text-[20.8px]">{content.global.ctaLabel}</div>
        </a>
        <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] mt-3 gap-2">
          <img src={content.global.lockIconUrl} alt="" className="box-border caret-transparent inline-block max-w-full mr-2" />
          <div className="text-slate-900 text-xs box-border caret-transparent leading-3 md:text-[12.6px] md:leading-[12.6px]">{content.global.secureBadge}</div>
          <img src={content.global.creditCardsImageUrl} alt="" className="box-border caret-transparent inline-block max-w-full w-[168px] ml-3" />
        </div>
      </div>
    </div>
  );
};
