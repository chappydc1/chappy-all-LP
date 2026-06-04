import { OfferList } from "../OfferSection/components/OfferList";
import { PricingBlock } from "../OfferSection/components/PricingBlock";
import { OfferCta } from "../OfferSection/components/OfferCta";
import { OFFER_SECTION_ID } from "../../config/links";

export const OfferSection = () => {
  return (
    <section
      id={OFFER_SECTION_ID}
      className="relative items-center bg-white bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
    >
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                className="items-start box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] md:flex-row"
              >
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        >
                          <div
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                            >
                              <img
                                src="/images/amala/1763722198516_PRIME_CELL_H2_hero_.webp"
                                alt=""
                                title=""
                                className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
                ></div>
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                >
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
                    >
                      <div
                        className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]"
                      >
                        <p
                          className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                        >
                          <strong
                            className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                          >
                            Special Offer On Now!
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[25px]">
                    <div className="text-[13px] font-semibold box-border caret-transparent leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 p-px font-libre_franklin md:text-[15px] md:leading-[18px]">
                      Excellent
                    </div>
                    <img
                      title=""
                      src="/images/amala/6.svg"
                      alt=""
                      className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[70px] mr-2 md:w-20"
                    />
                    <div className="text-[13px] font-semibold box-border caret-transparent leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] mr-2 p-px font-libre_franklin md:text-[15px] md:leading-[18px]">
                      5,758 reviews on
                    </div>
                    <img
                      title=""
                      src="/images/amala/5.svg"
                      alt=""
                      className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[70px] md:w-20"
                    />
                  </div>
                  <div className="text-black text-lg font-semibold box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] text-center mt-5 p-px font-libre_franklin">
                    Try Our Cellular Defense Breakthrough - Now 100% Risk-Free
                    with Our 90-Day Results Guarantee!
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="text-black text-xl box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[25px]"
                    >
                      <div
                        className="box-border caret-transparent outline-[3px] w-full"
                      >
                        <p
                          className="box-border caret-transparent outline-[3px]"
                        >
                          <strong
                            className="font-semibold box-border caret-transparent outline-[3px]"
                          >
                            Order Today and You&#39;ll Get:
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <OfferList />
                    </div>
                  </div>
                  <PricingBlock />
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <OfferCta />
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        >
                          <div
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                            >
                              <img
                                src="/images/amala/8.png"
                                alt=""
                                title=""
                                className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                        className="items-center box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
                        >
                          <div
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                            >
                              <img
                                src="/images/amala/1763702956506_1730181221_checkIcon.svg"
                                alt=""
                                title=""
                                className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
                        >
                          <div
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                              className="text-black text-[14.0583px] font-semibold box-border caret-transparent leading-[16.87px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2.5 md:text-[15px] md:leading-[18px]"
                            >
                              <div
                                className="text-[14.0583px] box-border caret-transparent leading-[16.87px] outline-[3px] w-full md:text-[15px] md:leading-[18px]"
                              >
                                <p
                                  className="text-[14.0583px] box-border caret-transparent leading-[16.87px] outline-[3px] md:text-[15px] md:leading-[18px]"
                                >
                                  All transactions are secure and encrypted
                                  <br className="text-[14.0583px] box-border caret-transparent leading-[16.87px] outline-[3px] md:text-[15px] md:leading-[18px]" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                      className="text-black text-[14.0583px] box-border caret-transparent leading-[19.6817px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-4 md:text-[15px] md:leading-[21px]"
                    >
                      <div
                        className="text-[14.0583px] box-border caret-transparent leading-[19.6817px] outline-[3px] w-full md:text-[15px] md:leading-[21px]"
                      >
                        <p
                          className="text-[14.0583px] box-border caret-transparent leading-[19.6817px] outline-[3px] md:text-[15px] md:leading-[21px]"
                        >
                          <strong
                            className="text-[14.0583px] font-bold box-border caret-transparent leading-[19.6817px] outline-[3px] md:text-[15px] md:leading-[21px]"
                          >
                            <em
                              className="text-[14.0583px] italic box-border caret-transparent leading-[19.6817px] outline-[3px] md:text-[15px] md:leading-[21px]"
                            >
                              Note: Not Available on Amazon or eBay!{" "}
                              <span className="text-[14.0583px] font-normal box-border caret-transparent leading-[19.6817px] outline-[3px] md:text-[15px] md:leading-[21px]">
                                PrimeCell H2 is only available through our
                                official website to ensure product authenticity,
                                proper storage conditions, and concentration
                                integrity.
                              </span>
                            </em>
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
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src="/images/amala/18.svg"
                alt=""
                title=""
                className="absolute box-border caret-transparent hidden max-w-full outline-[3px] w-full top-0 md:top-[-45px]"
              />
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent hidden flex-col outline-[3px] w-full"
            >
              <img
                src="/images/amala/19.svg"
                alt=""
                title=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] w-full bottom-0 md:bottom-[-45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
