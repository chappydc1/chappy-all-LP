"use client";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooOfferSection = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="offer" className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full px-0 py-[30px] md:flex-nowrap md:px-2.5">
      <div ref={ref} className={`relative items-stretch bg-slate-100 box-border caret-transparent block basis-full grow max-w-[1200px] min-h-[25px] w-min border-slate-500 px-px py-5 border-[3px] border-solid md:flex md:basis-0 md:px-5 reveal-scale ${visible ? "visible" : ""}`}>
        <div className="items-center bg-slate-100 box-border caret-transparent flex-col justify-around min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
          <img
            alt="SKU-green bg.webp"
            title=""
            src="/images/nebroo/1739451115452_Special_Offer_Now_2_.webp"
            
            className="box-border caret-transparent inline max-w-full mx-auto md:mx-0"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 w-full py-3 font-montserrat md:min-h-[auto] md:min-w-[auto]">
          <div className="text-3xl font-bold box-border caret-transparent leading-[39px] text-center">
            <div className="text-2xl box-border caret-transparent leading-[31px] md:text-3xl md:leading-[39px]">
              Special Offer On Now!
            </div>
          </div>
          <div className="text-[17px] box-border caret-transparent leading-[25px] mt-5 px-[15px] md:leading-[27px]">
            Try Your Nebroo PRO 2.0 Hearing Aids NOW at an All Time Low Price!
          </div>
          <div className="text-xl box-border caret-transparent leading-[30px] mt-5 text-center font-helvetica">
            <b className="font-bold box-border caret-transparent">
              <u className="text-[17px] box-border caret-transparent leading-6 underline font-montserrat md:text-xl md:leading-[30px]">
                Act Now and You&#39;ll Get:
              </u>
            </b>
          </div>
          <div className="box-border caret-transparent w-full mt-5">
            <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full pr-px md:flex-nowrap">
              <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min pl-2.5 pr-px md:basis-0 md:px-[15px]">
                <div className="items-center box-border caret-transparent flex flex-wrap justify-start md:items-stretch md:flex-nowrap">
                  <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                    <img
                      title=""
                      src="/images/nebroo/1700045980939_1666773712_check_1check_v1642658295149.png"
                      
                      alt=""
                      className="text-black box-border caret-transparent inline max-w-full w-[25px] p-px"
                    />
                  </div>
                  <div className="box-border caret-transparent basis-[89.67%] grow shrink-0 min-h-[25px] min-w-[auto] pl-2.5 md:basis-full md:shrink md:pl-0">
                    <div className="text-[17px] box-border caret-transparent leading-[26px] text-left p-px md:leading-[27px]">
                      <b className="font-bold box-border caret-transparent leading-[26px] md:leading-[27px]">
                        70% OFF
                      </b>
                      - Nebroo PRO 2.0 Hearing Aids
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:items-stretch md:flex-nowrap">
                  <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                    <img
                      title=""
                      src="/images/nebroo/1700045980939_1666773712_check_1check_v1642658295149.png"
                      
                      alt=""
                      className="text-black box-border caret-transparent inline max-w-full w-[25px] p-px"
                    />
                  </div>
                  <div className="box-border caret-transparent basis-[89.91%] grow shrink-0 min-h-[25px] min-w-[auto] pl-2.5 md:basis-full md:shrink md:pl-0">
                    <div className="text-[17px] box-border caret-transparent leading-[26px] text-left p-px md:leading-[27px]">
                      <b className="font-bold box-border caret-transparent leading-[26px] md:leading-[27px]">
                        120-Day Money Back Guarantee
                      </b>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:items-stretch md:flex-nowrap">
                  <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                    <img
                      title=""
                      src="/images/nebroo/1700045980939_1666773712_check_1check_v1642658295149.png"
                      
                      alt=""
                      className="text-black box-border caret-transparent inline max-w-full w-[25px] p-px"
                    />
                  </div>
                  <div className="box-border caret-transparent basis-[88.48%] grow shrink-0 min-h-[25px] min-w-[auto] pl-2.5 md:basis-full md:shrink md:pl-0">
                    <div className="text-[17px] box-border caret-transparent leading-[26px] text-left p-px md:leading-[27px]">
                      <b className="font-bold box-border caret-transparent leading-[26px] md:leading-[27px]">
                        FREE Shipping
                      </b>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap justify-start mt-2.5 md:items-stretch md:flex-nowrap">
                  <div className="box-border caret-transparent basis-[6.57%] grow min-h-[25px] min-w-[auto]">
                    <img
                      title=""
                      src="/images/nebroo/1700045980939_1666773712_check_1check_v1642658295149.png"
                      
                      alt=""
                      className="text-black box-border caret-transparent inline max-w-full w-[25px] p-px"
                    />
                  </div>
                  <div className="box-border caret-transparent basis-[88.84%] grow shrink-0 min-h-[25px] min-w-[auto] pl-2.5 md:basis-full md:shrink md:pl-0">
                    <div className="text-[17px] box-border caret-transparent leading-[26px] text-left p-px md:leading-[27px]">
                      <b className="font-bold box-border caret-transparent leading-[26px] md:leading-[27px]">
                        FREE eBook:
                      </b>
                      <span className="box-border caret-transparent leading-[26px] md:leading-[27px]">
                        10 Proven Ways to Improve Your Hearing Ability
                        Completely Naturally
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent w-full mb-2.5 px-px py-[5px]">
            <div className="text-zinc-800 text-[17px] box-border caret-transparent leading-[27px] pt-px pb-2.5 px-px text-center md:pb-2">
              <b className="font-bold box-border caret-transparent">
                <u className="box-border caret-transparent underline">Note:</u>
                <span className="text-green-600 box-border caret-transparent">
                   Not Available on Amazon or eBay
                </span>
              </b>
            </div>
            <button
              title="REVEAL YOUR OFFER NOW!"
              type="button"
              className="relative text-white text-[19px] font-bold items-stretch bg-slate-500 shadow-[rgba(37,42,50,0.32)_0px_1px_4px_1px] caret-transparent flex basis-[0%] flex-col shrink-0 justify-start tracking-[0.38px] leading-[22.8px] max-w-full text-center align-middle w-full mb-2.5 mx-auto px-[30px] py-5 rounded md:text-xl md:tracking-[0.4px] md:leading-6 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 cursor-pointer"
              style={{ animationDelay: "0.3s" }}
            >
              REVEAL YOUR OFFER NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
