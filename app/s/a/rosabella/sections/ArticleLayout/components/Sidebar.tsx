"use client";

import { useAdvertorial } from "../../LandingPage/context";

export const Sidebar = () => {
  const { copy, media } = useAdvertorial();

  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full md:w-3/12">
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-start bg-white box-border caret-transparent hidden flex-wrap min-h-0 min-w-0 border border-neutral-400 mt-[30px] mb-2.5 mx-2.5 p-2.5 border-solid md:flex md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 outline-[3px] md:min-h-[auto]">
              <div className="items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:min-w-[auto]">
                <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
                  <div className="items-start box-border caret-transparent hidden flex-wrap min-h-0 min-w-0 mt-2.5 mb-5 md:flex md:min-h-[auto] md:min-w-[auto]">
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 outline-[3px] md:min-h-[auto]">
                      <div className="items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:min-w-[auto]">
                        <div className="text-black text-[19.4583px] box-border caret-transparent leading-[23.35px] min-h-0 min-w-0 outline-[3px] text-center w-full md:text-[19px] md:leading-[22.8px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-[19.4583px] box-border caret-transparent leading-[23.35px] outline-[3px] md:text-[19px] md:leading-[22.8px]">
                            <strong className="text-[19.4583px] font-bold box-border caret-transparent leading-[23.35px] outline-[3px] md:text-[19px] md:leading-[22.8px]">
                              {copy.sidebar.recommendedLabel}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:min-w-[auto]">
                        <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-full m-5 md:min-h-[auto] md:min-w-[auto]">
                          <img
                            src={media.productBottleImage}
                            alt=""
                            sizes="200px"
                            className="box-border caret-transparent max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[200px] md:min-h-[auto] md:min-w-[auto]"
                          />
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:min-w-[auto]">
                        <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
                          <a
                            href={copy.sidebar.ctaUrlMobile}
                            className="relative text-green-600 font-bold bg-green-600 shadow-[rgba(37,42,50,0.32)_0px_1px_4px_1px] box-border caret-transparent flex flex-col tracking-[0.28px] leading-[16.8px] underline px-[5px] py-[15px] rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid border-transparent md:hidden"
                          >
                            <span className="text-white box-border caret-transparent block outline-[3px] pointer-events-none text-center md:inline">
                              {copy.sidebar.ctaTextMobile}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:min-w-[auto]">
                        <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
                          <a
                            href={copy.sidebar.ctaUrlDesktop}
                            className="relative text-green-600 font-bold bg-green-600 shadow-[rgba(37,42,50,0.32)_0px_1px_4px_1px] box-border caret-transparent hidden flex-col tracking-[0.28px] leading-[16.8px] min-h-0 min-w-0 underline px-[5px] py-[15px] rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid border-transparent md:flex md:min-h-[auto] md:min-w-[auto]"
                          >
                            <span className="text-white text-lg box-border caret-transparent inline leading-[21.6px] min-h-0 min-w-0 outline-[3px] pointer-events-none text-center md:block md:min-h-[auto] md:min-w-[auto]">
                              {copy.sidebar.ctaTextDesktop}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:min-w-[auto]">
                <div className="items-center box-border caret-transparent hidden flex-col min-h-0 min-w-0 outline-[3px] w-full md:flex md:min-h-[auto] md:min-w-[auto]">
                  <img
                    src={media.sidebarReviewsImage}
                    alt=""
                    sizes="251px"
                    className="box-border caret-transparent inline max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-full md:block md:min-h-[auto] md:min-w-[auto]"
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
