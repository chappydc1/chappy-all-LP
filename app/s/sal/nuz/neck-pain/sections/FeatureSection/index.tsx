"use client";

import { NuzFeatureCard } from "./components/NuzFeatureCard";
import { useCountdown } from "../../hooks/useCountdown";
import { content } from "../../content";

export const NuzFeatureSection = () => {
  const f = content.features;
  const { formatted } = useCountdown(f.ctaCountdownSeconds);

  return (
    <section className="bg-gray-100 box-border caret-transparent py-10 md:py-16">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-5 md:max-w-[1200px] md:px-8">
        <h2 className="text-sky-950 text-2xl font-extrabold text-center md:text-4xl">
          {f.headline}
        </h2>
        <div className="mx-auto mt-2 mb-10 h-[3px] w-32 md:w-44 bg-teal-500"></div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(280px,400px)_1fr] gap-6 md:gap-8 items-center">
          <div className="flex flex-col gap-4">
            {f.leftCards.map((c) => (
              <NuzFeatureCard key={c.title} {...c} />
            ))}
          </div>

          <div className="relative flex justify-center order-first md:order-none">
            <div
              aria-hidden="true"
              className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-3/5 rounded-full bg-cyan-300/50 blur-2xl"
            />
            <img
              src={f.productImageUrl}
              alt={f.productImageAlt}
              className="relative max-w-full w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-4">
            {f.rightCards.map((c) => (
              <NuzFeatureCard key={c.title} {...c} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-12">
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
            <span className="text-slate-900 text-xs leading-3 md:text-[12.6px]">
              {content.global.secureBadge}
            </span>
            <img src={content.global.creditCardsImageUrl} alt="" className="inline-block w-[168px] ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
