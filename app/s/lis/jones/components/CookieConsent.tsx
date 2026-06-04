"use client";

export const CookieConsent = () => {
  return (
    <div className="fixed caret-transparent block h-fit outline-[3px] w-fit z-[2147483647] overflow-auto inset-0">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="fixed box-border caret-transparent outline-[3px] text-center w-full z-[99999999] bottom-0 font-basemono">
          <div
            aria-label="Cookie bar"
            role="region"
            className="fixed text-zinc-800 text-xs bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_20px_0px] box-border caret-transparent outline-[3px] text-left translate-x-[-173.094px] w-[calc(100%_-_28.8px)] z-[99999999] rounded-md left-2/4 right-auto bottom-3 md:transform-none md:w-auto md:rounded-lg md:left-auto md:right-9"
          >
            <div className="items-center box-border caret-transparent gap-x-[14.4px] flex flex-col outline-[3px] gap-y-[14.4px] text-center w-full p-[18px] md:gap-x-3 md:gap-y-3 md:w-[300px] md:px-[35px] md:py-5">
              <div className="self-stretch box-border caret-transparent flex basis-[0%] flex-col grow justify-between min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left">
                  <p className="box-border caret-transparent leading-[18px] outline-[3px] text-left md:text-center">
                    <span className="box-border caret-transparent outline-[3px] text-left md:text-center">
                      We use cookies on our website to give you the best
                      experience possible.
                    </span>
                    <a
                      aria-label="Privacy Policy (opens in a new tab)"
                      href="https://www.jonesroadbeauty.com/pages/privacy-policy"
                      className="box-border caret-transparent inline-block opacity-80 outline-[3px] text-left underline p-[2.4px] md:text-center"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="items-stretch box-border caret-transparent gap-x-1.5 flex flex-col-reverse shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 w-full md:gap-x-[normal] md:gap-y-[normal] md:w-[180px]">
                <button
                  type="button"
                  className="text-[10px] font-semibold items-center bg-transparent caret-transparent flex basis-[0%] grow justify-center tracking-[normal] leading-[normal] min-h-10 min-w-[auto] outline-[3px] border border-zinc-800 mb-0 px-3 py-1.5 rounded-[3px] md:mb-[3px] hover:text-white hover:bg-[oklab(0.426621_0.0000193848_0.00000855982)] hover:border-[oklab(0.426621_0.0000193848_0.00000855982)]"
                >
                  Preferences
                </button>
                <button
                  type="button"
                  className="text-white text-[10px] font-semibold items-center bg-zinc-800 caret-transparent flex basis-[0%] grow justify-center tracking-[normal] leading-[normal] min-h-10 min-w-[auto] outline-[3px] border border-zinc-800 mb-0 px-3 py-1.5 rounded-[3px] md:mb-[3px] hover:bg-[oklab(0.426621_0.0000193848_0.00000855982)] hover:border-[oklab(0.426621_0.0000193848_0.00000855982)]"
                >
                  Accept All
                </button>
                <div
                  role="button"
                  aria-label="Close"
                  className="absolute box-border caret-transparent flex h-3 outline-[3px] w-3 right-[7.2px] top-[7.2px]"
                >
                  <img
                    src="/images/jones/icon-1.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px] align-baseline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
