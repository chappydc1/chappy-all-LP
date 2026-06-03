"use client";

import { useAdvertorial } from "../../LandingPage/context";

export const AlertBanner = () => {
  const { copy, media } = useAdvertorial();

  return (
    <section className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-5">
      <div className="text-zinc-800 bg-orange-100 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full border-amber-100 bg-center mt-5 p-2.5 rounded-[10px] border-[3px] border-solid md:flex-row">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
          <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
              <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]">
                <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[35px] min-h-[auto] min-w-[35px] outline-[3px] w-[35px]">
                  <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                    <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-0.5">
                      <img
                        src={media.infoIcon}
                        alt=""
                        sizes="25px"
                        className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                  <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                    <div className="text-zinc-800 text-[15.4583px] box-border caret-transparent leading-[23.1875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-[19px] md:leading-[28.5px]">
                      <div className="text-[15.4583px] box-border caret-transparent leading-[23.1875px] outline-[3px] w-full md:text-[19px] md:leading-[28.5px]">
                        <p className="text-[15.4583px] box-border caret-transparent leading-[23.1875px] outline-[3px] md:text-[19px] md:leading-[28.5px]">
                          <strong className="text-red-700 text-[15.4583px] font-bold box-border caret-transparent leading-[23.1875px] outline-[3px] md:text-[19px] md:leading-[28.5px]">
                            {copy.alertBanner.updateLabel}{" "}
                          </strong>
                          <strong className="text-[15.4583px] font-bold box-border caret-transparent leading-[23.1875px] outline-[3px] md:text-[19px] md:leading-[28.5px]">
                            {copy.alertBanner.message}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
