"use client";

import { useState, useEffect } from "react";

const DEAL_SECONDS_INIT = 19 * 60 * 60 + 11 * 60 + 11;

export const JavyOfferCard = () => {
  const [totalSeconds, setTotalSeconds] = useState(DEAL_SECONDS_INIT);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTotalSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative bg-white shadow-[rgba(0,0,0,0.06)_0px_4px_12px_0px] box-border flex flex-col justify-between min-h-[auto] min-w-[auto] text-left overflow-hidden rounded-lg border-0 border-none border-white md:flex-row md:border-2 md:border-dashed">
      <div className="relative items-center bg-violet-100 box-border flex justify-center min-h-[auto] min-w-[auto] w-full py-5 md:w-6/12 md:py-0">
        <img
          src="/images/javy/68470eec6dd64134a92d3453_9b5f16eb10a1546abe03c5cf5ed424f8_v3-pc-bundle-img.webp"
          sizes="(max-width: 1200px) 100vw, 1200px"
          alt="Javvy Coffee Bundle"
          className="box-border min-h-[auto] min-w-[auto] w-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="box-border min-h-[auto] min-w-[auto] w-full p-4 md:w-6/12 md:p-12">
        <div className="relative items-center box-border gap-x-2 flex justify-center w-full z-10 mx-auto">
          <div className="bg-black/10 box-border basis-[0%] grow h-px min-h-[auto] min-w-[auto] w-1/5 md:w-full"></div>
          <div className="box-border gap-x-1.5 flex min-h-[auto] min-w-[auto] gap-y-1.5">
            <img
              src="/images/javy/6724fdda94d57f82bf0c2f9a_bf-gift-icon.svg"
              alt=""
              className="box-border max-w-full min-h-[auto] min-w-[auto] w-3"
            />
            <div className="text-xs font-bold self-center box-border shrink-0 tracking-[1px] leading-[18px] min-h-[auto] min-w-[auto] text-center uppercase">
              FREE GIFTS WITH YOUR ORDER
            </div>
          </div>
          <div className="bg-black/10 box-border basis-[0%] grow h-px min-h-[auto] min-w-[auto] w-1/5 md:w-full"></div>
        </div>
        <div className="box-border pb-2"></div>
        <h1 className="text-[32px] font-black box-border tracking-[-1.04px] leading-[38.4px] text-center md:text-[27.2px] md:leading-[32.64px]">
          <span className="text-rose-700 text-[32px] box-border leading-[38.4px] md:text-[27.2px] md:leading-[32.64px]">
            UP TO 58% OFF
          </span>
          {" "}FOR A LIMITED TIME ONLY!
        </h1>
        <div className="items-center box-border flex-col">
          <div className="box-border pb-2"></div>
          <div className="text-[13px] box-border leading-[18px] text-center">
            This limited-time deal is in high demand and stock keeps selling out.
          </div>
          <div className="box-border pb-5 md:pb-4"></div>
          <a
            href="#offer"
            role="button"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className={`relative text-white font-bold items-center box-border flex justify-center max-w-full min-h-[72px] text-center w-full overflow-hidden px-8 py-5 rounded-lg border-2 border-solid border-transparent transition-all duration-200 active:scale-[0.97] ${btnHovered ? "bg-indigo-800" : "bg-indigo-950"}`}
            style={{ touchAction: "manipulation" }}
          >
            <div className="font-black box-border min-h-[auto] min-w-[auto] mr-2">
              GET 58% OFF
            </div>
            <div className="items-center box-border flex-col h-6 justify-center min-h-[auto] min-w-[auto] w-6">
              <img
                src="/images/javy/icon-1.svg"
                alt=""
                className="box-border inline h-full align-baseline w-full"
              />
            </div>
          </a>
          <div className="text-xs font-extrabold items-center box-border flex justify-center leading-[18px] min-h-8 text-center px-4 py-1">
            DEAL ENDING IN:{" "}
            <span key={seconds} className="text-red-700 box-border block min-h-[auto] min-w-[auto] ml-1 px-[2.4px] md:px-0 tabular-nums animate-timer-tick">
              {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </span>
          </div>
          <div className="text-xs items-center bg-orange-50 box-border flex justify-center leading-[18px] border border-orange-100 py-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-dashed">
            <div className="items-baseline box-border flex min-h-[auto] min-w-[auto]">
              <div className="box-border min-h-[auto] min-w-[auto] ml-2">
                <div className="font-medium box-border">
                  Sell-Out Risk:{" "}
                  <span className="text-rose-700 font-extrabold box-border animate-pulse-soft">High</span>
                </div>
              </div>
            </div>
            <div className="box-border min-h-[auto] min-w-[auto] mx-[13px]">
              <div className="text-lg font-extralight box-border leading-[27px]">|</div>
            </div>
            <div className="items-baseline box-border flex min-h-[auto] min-w-[auto]">
              <div className="box-border min-h-[auto] min-w-[auto] ml-2">
                <div className="font-medium box-border">
                  <span className="font-extrabold box-border">FREE</span> shipping
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border pb-2"></div>
        <div className="text-xs box-border leading-[18px] text-center">
          Try it today with a 30-Day Money-Back Guarantee!
        </div>
      </div>
    </div>
  );
};
