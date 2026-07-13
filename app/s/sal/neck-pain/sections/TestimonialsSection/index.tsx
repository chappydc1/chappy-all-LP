"use client";

import { useState } from "react";
import { ReviewCard } from "./components/ReviewCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { content } from "../../content";

export const TestimonialsSection = () => {
  const t = content.testimonials;
  const [showMore, setShowMore] = useState(false);
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className={`bg-stone-100 box-border caret-transparent transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="box-border caret-transparent px-5 py-12 md:px-10 md:py-20">
        <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent max-w-screen-lg w-full mx-auto">
              <h1 className="text-[32px] font-extrabold box-border caret-transparent tracking-[-0.8px] leading-[38.4px] text-center mt-[21.44px] md:text-5xl md:leading-[57.6px] md:mt-[32.16px]">
                <span className="text-[32px] font-normal box-border caret-transparent leading-[38.4px] md:text-5xl md:leading-[57.6px]">{t.headingPrefix}</span>
                <br />
                {t.headingMiddle}{" "}
                <span className="text-cyan-700 text-[32px] box-border caret-transparent inline leading-[38.4px] md:text-5xl md:block md:leading-[57.6px]">
                  {t.headingHighlight}
                </span>
              </h1>
            </div>
            <div className="box-border caret-transparent w-full pt-8 md:pt-16"></div>
          </div>
          <div className="items-center box-border caret-transparent flex flex-col justify-center mb-[30px]">
            <img src={t.heroImageUrl} sizes="(max-width: 799px) 100vw, 799px, 100vw" alt="" className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] mb-[25px] mx-auto" />
            <div className="text-neutral-600 text-xl box-border caret-transparent leading-[26px] min-h-[auto] min-w-[auto] text-center px-[15px] md:text-2xl md:leading-[34px] md:px-0">
              {t.verifiedNoteLine1}
              <br />
              {t.verifiedNoteLine2}
            </div>
          </div>
          <div className="box-border caret-transparent px-5 md:px-0">
            <div className="items-stretch bg-white box-border caret-transparent flex flex-col justify-start mb-5 md:flex-row">
              <div className="border-b-gray-200 border-l-gray-800 border-r-gray-200 border-t-gray-800 box-border caret-transparent min-h-[auto] min-w-[auto] w-full p-3.5 border-r-0 border-b md:border-b-gray-800 md:w-3/12 md:p-5 md:border-b-0 md:border-r">
                <div className="items-center box-border caret-transparent flex justify-start mb-[7px]">
                  <div className="text-white bg-sky-200 box-border caret-transparent min-h-[auto] min-w-[auto] px-[11px] py-1">{t.ratingValue}</div>
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] ml-[9px] flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img key={i} src={t.starIconUrl} alt="★" className="box-border caret-transparent inline-block max-w-full w-[25px] px-px" />
                    ))}
                  </div>
                </div>
                <div className="text-neutral-600 box-border caret-transparent leading-[22px]">{t.basedOn}</div>
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full px-3.5 py-5 md:w-9/12 md:px-5">
                <div className="text-neutral-600 box-border caret-transparent leading-[22px]">
                  <span className="text-white bg-emerald-200 box-border caret-transparent inline-block mr-[3px] px-[9px] py-[3px]">{t.recommendPercent}</span>
                  {t.recommendTail}
                </div>
              </div>
            </div>

            <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5">
              {t.initialReviews.map((r, i) => (
                <div key={i} className="transition-all duration-500" style={{ transitionDelay: `${i * 80}ms` }}>
                  <ReviewCard name={r.name} daysAgo={r.daysAgo} review={r.review} />
                </div>
              ))}

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-y-2.5"
                style={{ maxHeight: showMore ? "2000px" : "0px", opacity: showMore ? 1 : 0 }}
              >
                {t.moreReviews.map((r, i) => (
                  <ReviewCard key={i} name={r.name} daysAgo={r.daysAgo} review={r.review} />
                ))}
              </div>

              <button
                onClick={() => setShowMore(!showMore)}
                className="text-black bg-white box-border caret-transparent block min-h-[auto] min-w-[auto] text-center w-[140px] mt-[15px] mx-auto px-[15px] py-[9px] border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 active:scale-95 cursor-pointer rounded"
              >
                {showMore ? t.showLessLabel : t.showMoreLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
