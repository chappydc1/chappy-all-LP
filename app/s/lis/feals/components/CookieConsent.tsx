export const CookieConsent = () => {
  return (
    <div className="fixed text-black box-border caret-transparent block h-fit outline-[3px] w-fit z-[2147483647] overflow-auto inset-0">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="fixed box-border caret-transparent outline-[3px] text-center w-full z-[99999999] bottom-0">
          <div
            aria-label="Cookie bar"
            role="region"
            className="fixed text-stone-500 text-sm bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_20px_0px] box-border caret-transparent leading-[20.16px] outline-[3px] translate-x-[-170.695px] w-[calc(100%_-_33.6px)] z-[99999999] rounded-md left-2/4 bottom-3.5 md:transform-none md:w-full md:rounded-none md:left-auto md:bottom-0"
          >
            <div className="items-center box-border caret-transparent gap-x-[16.8px] flex flex-col justify-normal outline-[3px] gap-y-[16.8px] w-full mx-0 p-[21px] md:gap-x-[22px] md:flex-row md:justify-between md:gap-y-[22px] md:w-[90%] md:mx-auto md:px-6 md:py-3.5">
              <div className="self-stretch box-border caret-transparent flex basis-[0%] flex-col grow justify-between min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left">
                  <p className="box-border caret-transparent leading-[21px] outline-[3px] md:leading-[20.16px]">
                    <span className="box-border caret-transparent leading-[21px] outline-[3px] md:leading-[20.16px]">
                      This website uses cookies to ensure you get the best
                      experience on our website.
                    </span>
                    <a
                      aria-label="Privacy Policy (opens in a new tab)"
                      href="https://feals.com/policies/privacy-policy"
                      className="box-border caret-transparent inline-block leading-[21px] opacity-80 outline-[3px] underline p-[2.8px] md:leading-[20.16px]"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="content-center items-stretch box-border caret-transparent gap-x-1.5 flex flex-col-reverse shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 w-full pr-0 md:gap-x-2 md:flex-row md:gap-y-[normal] md:w-auto md:pr-[5px]">
                <button
                  type="button"
                  className="text-xs font-semibold bg-transparent caret-transparent block shrink-0 leading-[normal] min-h-10 min-w-[auto] outline-[3px] border border-orange-300 px-3 py-1.5 rounded-[3px]"
                >
                  Preferences
                </button>
                <button
                  type="button"
                  className="text-white text-xs font-semibold bg-orange-300 caret-transparent block shrink-0 leading-[normal] min-h-10 min-w-[auto] outline-[3px] border border-orange-300 px-3 py-1.5 rounded-[3px]"
                >
                  Accept
                </button>
                <div
                  role="button"
                  aria-label="Close"
                  className="absolute box-border caret-transparent flex h-3.5 outline-[3px] w-3.5 right-[8.4px] top-[8.4px]"
                >
                  <img
                    src="https://c.animaapp.com/mpkdzooupOfzIE/assets/icon-1.svg"
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
