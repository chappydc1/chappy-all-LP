"use client";

import { useState, useEffect } from "react";

type StickyBarProps = {
  visitUrl: string;
  logoSrc: string;
  promo: string;
  ctaText: string;
  ctaSubtext: string;
  score: string;
  scoreLabel: string;
  rightArrowSrc: string;
  starEmptySrc: string;
  starFullSrc: string;
};

export const StickyBar = ({
  visitUrl,
  logoSrc,
  promo,
  ctaText,
  ctaSubtext,
  score,
  scoreLabel,
  rightArrowSrc,
  starEmptySrc,
  starFullSrc,
}: StickyBarProps) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 400);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[1000] animate-bar-slide-up">
      <div className="bg-white shadow-[rgba(0,0,0,0.25)_5px_-1px_4px_0px] w-full py-4 md:py-5 relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          aria-label="Close"
          className="absolute top-[-15px] right-[30px] h-[30px] w-[30px] flex items-center justify-center bg-white rounded-full shadow text-gray-500 transition-colors duration-150 hover:text-gray-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="max-w-[995px] mx-auto px-[15px]">
          <div className="flex items-center justify-center gap-1.5 flex-wrap md:flex-nowrap">
            {/* Info section */}
            <div className="flex items-center justify-between max-w-full md:max-w-[calc(100%_-_320px)] w-full self-start">
              <div className="flex items-center self-center ml-0 md:ml-[23px] mr-0 md:mr-[30px]">
                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline block mr-0 md:mr-[22px] transition-opacity duration-150 hover:opacity-80"
                >
                  <img
                    src={logoSrc}
                    alt="MEDVi"
                    className="block max-h-[33px] max-w-[104px] object-contain"
                  />
                </a>
                <div className="text-zinc-800 font-bold leading-[18px] min-h-[auto] min-w-[auto] md:min-w-[280px] mr-5 text-sm">
                  {promo}
                </div>
              </div>
              {/* Score box */}
              <div className="flex items-start">
                <div className="hidden md:flex rounded overflow-hidden border border-slate-500/20">
                  <div className="text-white text-3xl font-bold bg-gray-500 flex items-center justify-center leading-[30px] min-h-[auto] min-w-[auto] w-[60px] text-center rounded-l-sm">
                    {score}
                  </div>
                  <div className="flex grow items-center justify-center p-2 rounded-r-sm bg-white">
                    <div className="text-gray-500 text-xs font-bold leading-4 text-center">
                      <span className="block mb-[3px]">{scoreLabel}</span>
                      <div
                        className="h-3 w-[65px] overflow-hidden mx-auto mt-px"
                        style={{
                          backgroundImage: `url('${starEmptySrc}')`,
                          backgroundRepeat: "repeat-x",
                        }}
                      >
                        <div
                          className="h-3 max-w-full w-[99%]"
                          style={{
                            backgroundImage: `url('${starFullSrc}')`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-1.5">
              <div>
                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold btn-shimmer flex items-center justify-center gap-0.5 leading-[27px] max-w-[262px] min-h-11 min-w-[159px] w-full px-[15px] py-[10.5px] rounded shadow-[rgba(0,0,0,0.2)_0px_3.6386px_10.9158px_0px] transition-all duration-200 hover:shadow-[rgba(0,0,0,0.35)_0px_6px_18px_0px] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                >
                  <div>{ctaText}</div>
                  <span className="flex items-center justify-center h-6 w-6">
                    <img alt="" src={rightArrowSrc} className="h-6 w-6 shrink-0" />
                  </span>
                </a>
                <div className="text-zinc-900 text-[11px] leading-[15px] text-center mt-2.5">
                  {ctaSubtext}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
