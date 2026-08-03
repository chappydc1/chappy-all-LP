"use client";

import { Fragment, useEffect, useState } from "react";
import type copy from "../../copy.json";
import type media from "../../media.json";

type CopyData = typeof copy;
type MediaData = typeof media;

interface LandingPageProps {
  copy: CopyData;
  media: MediaData;
}

function secondsToMidnightEST(): number {
  const estNow = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
  const midnight = new Date(estNow);
  midnight.setDate(estNow.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);
  return Math.max(0, Math.floor((midnight.getTime() - estNow.getTime()) / 1000));
}

function useCountdown() {
  const [time, setTime] = useState(secondsToMidnightEST);
  useEffect(() => {
    const interval = setInterval(() => setTime(secondsToMidnightEST()), 1000);
    return () => clearInterval(interval);
  }, []);
  return {
    h: String(Math.floor(time / 3600)).padStart(2, "0"),
    m: String(Math.floor((time % 3600) / 60)).padStart(2, "0"),
    s: String(time % 60).padStart(2, "0"),
  };
}

function CountdownTimer() {
  const t = useCountdown();
  return (
    <div style={{ background: "#ffffff12", padding: "4px 8px", borderRadius: 8, display: "inline-block" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 0, color: "#fff", fontFamily: "Gilroy-Medium, sans-serif" }}>
        {[{ val: t.h, label: "HRS" }, { val: t.m, label: "MIN" }, { val: t.s, label: "SEC" }].map(({ val, label }, i) => (
          <Fragment key={label}>
            {i > 0 && (
              <div style={{ fontSize: 20, fontWeight: 800, marginTop: -8 }}>:</div>
            )}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 40 }}>
              <div style={{ fontSize: 15.4, fontWeight: 800, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 8, fontWeight: 700, opacity: 0.85, marginTop: 2 }}>{label}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function OfferCountdownTimer() {
  const t = useCountdown();
  return (
    <span style={{ color: "#dc2626", fontWeight: 800, fontSize: "1.125rem" }}>
      {t.h} : {t.m} : {t.s}
    </span>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

export function LandingPage({ copy, media }: LandingPageProps): React.JSX.Element {
  const reasons = copy.article.reasons;
  const scrollProgress = useScrollProgress();

  return (
    <div className="w-full [overflow-x:clip]">
      <div className="sticky top-0 z-[99]">
        <div className="bg-[#2B3920] flex items-center justify-center px-4 py-[5px]">
          <div className="flex items-center justify-center gap-x-4 w-full max-w-[560px]">
            <div className="text-center">
              <div className="text-white text-[17px] font-black uppercase font-gilroy_bold leading-6">
                <strong>{copy.promoBanner.saleName}</strong>
              </div>
              <div className="text-stone-100 text-[12px] font-bold uppercase font-gilroy_medium leading-[18px]">
                <strong>{copy.promoBanner.saleSubtitle}</strong>
              </div>
            </div>
            <CountdownTimer />
          </div>
        </div>

        <div className="bg-stone-800 flex items-center justify-center pt-2 pb-1">
          <div className="text-white text-[22px] md:text-3xl font-black tracking-[-1px] leading-tight font-gilroy_bold text-center">
            <strong>{copy.promoBanner.publicationName}</strong>
          </div>
        </div>

        <div className="bg-white h-9 flex items-center">
          <div className="w-full max-w-[928px] mx-auto px-5 md:px-0">
            <div className="relative bg-lime-800/20 h-1.5 md:h-2.5 w-full rounded-full overflow-hidden">
              <div
                className="absolute bg-lime-800 h-full rounded-full transition-all duration-150 ease-linear"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="pb-28">
        <div className="px-5 pt-[30px] pb-[5px] flex justify-center md:pb-[30px]">
          <div className="w-full max-w-[850px]">
            <h1 className="text-[22px] font-bold leading-7 mb-5 font-poppins md:text-[34px] md:leading-[44px]">
              10 Reasons Why This{" "}
              <span className="text-green-800">&quot;Metabolic Switch&quot;</span>
              {" "}Breakthrough Is Changing How Women Over 45 Take Back Control of Their{" "}
              <span className="text-green-800">Blood Sugar, Cravings &amp; Energy</span>
            </h1>
            <div className="flex items-center gap-x-3">
              <img
                src={media.authorAvatar}
                alt={copy.article.author}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0 md:w-[60px] md:h-[60px]"
              />
              <div className="font-poppins">
                <div className="text-black text-[11px] font-extrabold leading-[13.2px] md:text-sm md:leading-[16.8px]">
                  {copy.article.author}
                </div>
                <div className="text-black text-[11px] leading-[13.2px] md:text-sm md:leading-[16.8px]">
                  <b className="font-bold">Published:</b> {copy.article.publishedDate}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 flex justify-center">
          <div className="w-full max-w-[850px]">
            <blockquote className="text-sm bg-gray-200 border-l-[3px] border-l-zinc-950 px-5 py-[15px] mb-0 leading-6 font-muli md:text-xl md:mb-[30px]">
              &quot;<strong>Read this</strong> BEFORE your next diet or weight-loss attempt!&quot;
            </blockquote>

            <div className="py-2.5 overflow-x-auto">
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] min-w-[280px] md:grid-cols-[200px_240px_1fr_1fr]">
                <div className="pt-[62px] md:pt-[92px]">
                  {copy.comparison.rows.map((row) => (
                    <div
                      key={row.label}
                      className="text-zinc-800 text-[11px] font-semibold flex items-center gap-x-1 h-[90px] border-b border-zinc-300 md:text-base md:gap-x-3"
                    >
                      <span className="md:ml-1.5">{row.emoji}</span>
                      <span className="md:ml-1.5">{row.label}</span>
                    </div>
                  ))}
                </div>

                <div className="relative bg-orange-50 text-center border-green-800 px-[5px] rounded-[26px] border-2 border-solid scale-[1.03] md:px-2.5 md:border-[5px]">
                  <div className="flex items-center justify-center h-[60px] md:h-[90px]">
                    <img src={media.comparisonProduct} className="max-w-full w-[90px] md:w-40" alt="Sanlava" />
                  </div>
                  {[
                    copy.comparison.sanlava.difficulty,
                    copy.comparison.sanlava.effects,
                    copy.comparison.sanlava.ampk,
                    copy.comparison.sanlava.results,
                  ].map((cell, i) => (
                    <div key={i} className="border-t border-t-stone-300/50 flex flex-col h-[90px] justify-center">
                      <b className="font-bold block leading-[14.3px] mb-1.5 text-[10px] md:text-sm">{cell.main}</b>
                      <small className="text-black text-[9px] block px-[5px] md:text-[13px] md:px-0">{cell.sub}</small>
                    </div>
                  ))}
                  <div className="border-t border-t-stone-300/50 flex items-center justify-center h-[90px]">
                    <img src={media.icons.checkGreen} alt="✓" className="h-5 w-5 md:h-10 md:w-10" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-red-600 text-[10px] font-extrabold bg-red-50 flex items-center justify-center h-[60px] border border-stone-300 border-dashed px-1 md:text-lg md:h-[90px]">
                    {copy.comparison.cardio.label}
                  </div>
                  {[
                    copy.comparison.cardio.difficulty,
                    copy.comparison.cardio.effects,
                    copy.comparison.cardio.ampk,
                    copy.comparison.cardio.results,
                  ].map((cell, i) => (
                    <div key={i} className="flex flex-col h-[90px] justify-center border-b border-zinc-300">
                      <b className="font-bold block leading-[14.3px] mb-1.5 text-[10px] md:text-sm">{cell.main}</b>
                      <small className="text-neutral-600 text-[9px] block px-[5px] md:text-[13px] md:px-0">{cell.sub}</small>
                    </div>
                  ))}
                  <div className="flex items-center justify-center h-[90px]">
                    <img src={media.icons.crossRed} alt="✗" className="h-5 w-5 md:h-10 md:w-10" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-red-600 text-[10px] font-extrabold bg-red-50 flex items-center justify-center h-[60px] border border-stone-300 border-dashed px-1 md:text-lg md:h-[90px]">
                    {copy.comparison.newDiet.label}
                  </div>
                  {[
                    copy.comparison.newDiet.difficulty,
                    copy.comparison.newDiet.effects,
                    copy.comparison.newDiet.ampk,
                    copy.comparison.newDiet.results,
                  ].map((cell, i) => (
                    <div key={i} className="flex flex-col h-[90px] justify-center border-b border-zinc-300">
                      <b className="font-bold block leading-[14.3px] mb-1.5 text-[10px] md:text-sm">{cell.main}</b>
                      <small className="text-neutral-600 text-[9px] block px-[5px] md:text-[13px] md:px-0">{cell.sub}</small>
                    </div>
                  ))}
                  <div className="flex items-center justify-center h-[90px]">
                    <img src={media.icons.crossRed} alt="✗" className="h-5 w-5 md:h-10 md:w-10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 font-suisse_intl text-sm leading-6 md:text-[17px]">
              <p><strong>TLDR:</strong> {copy.article.tldr}</p>
            </div>
          </div>
        </div>

        <div className="px-5 pt-[30px] pb-[60px] flex justify-center">
          <div className="w-full max-w-[850px] flex flex-col gap-y-[60px]">
            {reasons.map((reason, idx) => (
              <div key={reason.number} className="flex flex-col gap-y-5 md:flex-row md:items-start md:gap-x-[30px]">
                <h2 className="text-xl font-bold leading-7 font-poppins md:hidden">
                  {reason.number}. <span className="text-green-800">{reason.title}</span>
                </h2>
                <div className="flex-1">
                  <img
                    src={media.reasonImages[idx]}
                    alt={reason.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="hidden text-[22px] font-bold leading-7 mb-[15px] font-poppins md:block">
                    {reason.number}. <span className="text-green-800">{reason.title}</span>
                  </h2>
                  <div className="text-base leading-[30px] font-poppins md:text-[17px]">
                    {reason.body.split("\n").map((line, li) => (
                      <p key={li} className={li > 0 ? "mt-2" : ""}>{line}</p>
                    ))}
                    {"bullets" in reason && reason.bullets && (
                      <div className="flex flex-col mt-5 gap-y-1">
                        {reason.bullets.map((bullet, bi) => (
                          <div key={bi} className="flex items-start gap-x-2.5 p-[5px]">
                            <img
                              src={media.reason3Bullets[bi]}
                              alt=""
                              className="w-[30px] h-[30px] object-cover flex-shrink-0 mt-0.5"
                            />
                            <p className="text-base leading-[30px] font-poppins md:text-[17px]">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 flex justify-center">
          <div className="w-full max-w-[850px]">
            <h2 className="text-[28px] font-bold leading-tight text-center font-poppins md:text-[40px] md:text-start">
              <strong>{copy.callToAction.heading}</strong>
            </h2>
          </div>
        </div>

        <div className="px-5 pt-[30px] pb-[50px] flex justify-center">
          <div className="w-full max-w-[850px] shadow-[rgba(0,0,0,0.25)_0px_0px_15px_0px] rounded-[10px] border-2 border-solid overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[55%]">
                <img
                  src={media.offerProduct}
                  alt="Sanlava Berberine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-[45%] flex flex-col items-center justify-center px-5 py-[15px] md:px-[30px]">
                <p className="text-base leading-6 mb-[5px] font-poppins">{copy.offerCard.saleLabel}</p>
                <p className="text-[22px] font-black leading-6 text-center mb-2.5 font-poppins md:text-3xl md:leading-[34px]">
                  <span className="text-green-800">{copy.offerCard.discount}</span>
                  {" "}<span className="text-black">{copy.offerCard.limitedClaim}</span>
                </p>
                <p className="text-base leading-[22px] text-center mb-2.5 font-poppins md:text-[17px] md:leading-6">
                  {copy.offerCard.urgencyText}
                </p>
                <a
                  href={copy.offerCard.ctaUrl}
                  className="text-white w-full bg-green-800 flex justify-center text-center overflow-hidden p-5 rounded-[7px] mb-3 md:px-8"
                >
                  <span className="text-sm font-semibold leading-5 font-poppins md:text-[17px] md:leading-6">
                    {copy.offerCard.ctaLabel}
                  </span>
                </a>
                <div className="flex items-center gap-x-2 justify-center mb-2.5">
                  <span className="text-lg font-bold leading-6">{copy.offerCard.dealEndingLabel}</span>
                  <OfferCountdownTimer />
                </div>
                <p className="text-base leading-5 text-center mb-2.5">
                  <strong>{copy.offerCard.bottlesLeftLabel}</strong>{" "}
                  <span className="text-red-600"><strong>{copy.offerCard.bottlesLeft}</strong></span>
                </p>
                <div className="w-full bg-orange-50 border border-amber-100 text-center px-2.5 py-[15px] mb-2.5 md:px-[15px]">
                  <p className="text-base leading-5">
                    <strong>{copy.offerCard.sellOutRiskLabel}</strong>{" "}
                    <span className="text-red-600"><strong>{copy.offerCard.sellOutRisk}</strong></span>
                    <strong> | {copy.offerCard.freeShipping}</strong>
                  </p>
                </div>
                <div className="text-base text-center leading-5">
                  {copy.offerCard.guarantee.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-200 flex flex-col items-center px-[15px] py-3 md:px-5 md:py-4">
        <a
          href={copy.stickyCta.ctaUrl}
          className="text-white bg-green-800 flex justify-center w-full max-w-xs text-center px-[25px] py-3.5 rounded-lg md:max-w-[403px] md:px-8"
        >
          <strong className="font-bold text-stone-100 leading-[21px] font-suisse_intl md:text-base">
            {copy.stickyCta.label}
          </strong>
        </a>
        <div className="flex items-center gap-x-1 justify-center mt-2.5 font-poppins md:gap-x-2">
          <img
            src={media.stickyCTAAvatar}
            alt="Christine K"
            className="h-6 w-6 rounded-full flex-shrink-0"
          />
          <span className="text-zinc-800 text-[11px] font-semibold leading-[17.6px] md:text-sm md:leading-[22.4px]">
            {copy.stickyCta.socialProof}
          </span>
        </div>
      </div>
    </div>
  );
}
