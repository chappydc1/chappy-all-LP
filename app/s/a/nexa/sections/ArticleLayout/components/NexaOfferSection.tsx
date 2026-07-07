export type NexaOfferSectionProps = {
  variant: string;
  buttonText?: string;
  buttonTitle?: string;
  href?: string;
  linkTitle?: string;
  productName?: string;
};

export const NexaOfferSection = (props: NexaOfferSectionProps) => {
  if (props.variant === "stockWarning") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-[28px] font-bold leading-[43px] mt-[30px] font-montserrat md:text-[33px]">
        <div className="text-[28px] box-border caret-transparent outline-[3px] text-left md:text-[33px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent outline-[3px] text-left md:text-[33px]">
            <span className="text-black text-[28px] box-border caret-transparent outline-[3px] text-left md:text-red-600 md:text-[33px]">
              <div className="text-black text-[28px] box-border caret-transparent outline-[3px] text-left md:text-red-600 md:text-[33px]">
                <span className="text-[28px] box-border caret-transparent outline-[3px] text-left md:text-[33px]">
                  <span className="text-black text-[28px] box-border caret-transparent outline-[3px] text-left md:text-red-600 md:text-[33px]">
                    <div className="text-black text-2xl box-border caret-transparent leading-[30px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                      <span className="text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[33px] md:leading-[43px]">
                        <span className="text-black text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]">
                          Don&#39;t Wait To Order Because Stock Is Limited!
                        </span>
                      </span>
                    </div>
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
    );
  }

  if (props.variant === "salesParagraph") {
    return (
      <p className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]">
        So far, the
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              <a
                title="L4"
                {...({ loop: "none" } as { loop: string })}
                href={props.href}
                className="text-blue-600 text-base box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center underline md:text-lg md:leading-[25px]"
              >
                {props.productName}
              </a>
            </b>
          </span>
        </b>
        has sold over 2 million units directly to consumers, even without the
        help of being sold in stores. And it has been SELLING OUT every time new
        stock becomes available, it&#39;s become that popular.
      </p>
    );
  }

  if (props.variant === "whereToGet") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-[28px] font-bold leading-[34px] mt-10 font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent outline-[3px] text-left md:text-[33px] leading-[34px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent outline-[3px] text-left md:text-[33px] leading-[34px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent outline-[3px] text-left md:text-[33px] leading-[34px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                    <div className="text-black text-2xl box-border caret-transparent leading-[30px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                      <span className="text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[33px] md:leading-[43px]">
                        <span className="text-black text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]">
                          Where Can I Get My {props.productName}
                        </span>
                      </span>
                    </div>
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
    );
  }

  if (props.variant === "description") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-base leading-[22px] text-left mt-[15px] font-montserrat md:text-lg md:leading-[25px]">
        Scuffs, scratches, paint fading and oxidation marks on your headlights
        are not just an unsightly problem, but a real safety hazard to your car.
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            Get your car back to its original shine and protect it from UV rays,
            rust and dirt once and for all!
          </span>
        </b>
      </div>
    );
  }

  if (props.variant === "linkCta") {
    return (
      <div className="box-border caret-transparent outline-[3px] hidden justify-center w-full my-5 px-2.5 py-3 md:flex">
        <a
          title={props.linkTitle}
          {...({ loop: "none" } as { loop: string })}
          href={props.href}
          className="text-black text-[25px] font-bold bg-yellow-400 box-border caret-transparent flex leading-[25px] max-w-full min-h-0 min-w-0 outline-[3px] text-center px-[120px] py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:min-h-[auto] md:min-w-[auto]"
        >
          GET 50% OFF {props.productName} Now!
          <br className="box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]" />
        </a>
      </div>
    );
  }

  if (props.variant === "offerDetails") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-left mt-[15px]">
        <div className="box-border caret-transparent outline-[3px] block justify-center w-full my-2.5 px-2.5 py-3 md:hidden md:mt-5 md:mb-0">
          <a
            title="GET 50% OFF Now!"
            {...({ loop: "none" } as { loop: string })}
            href={props.href}
            className="text-black text-xl font-bold bg-yellow-400 box-border caret-transparent flex justify-center leading-5 max-w-full outline-[3px] text-center px-5 py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-white md:font-semibold md:bg-green-600 md:justify-normal md:px-[27px]"
          >
            GET 50% OFF Now!
          </a>
        </div>
        <div className="box-border caret-transparent outline-[3px] hidden justify-center w-full mt-5 px-2.5 py-3">
          <a
            title="GET 50% OFF Now!"
            {...({ loop: "none" } as { loop: string })}
            href={props.href}
            className="text-black text-xl font-bold bg-yellow-400 box-border caret-transparent flex justify-center leading-5 max-w-full outline-[3px] text-center px-[27px] py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-white md:font-semibold md:bg-green-600 md:justify-normal"
          >
            GET 50% OFF Nexa™ Now!
          </a>
        </div>
        <button
          title="8th"
          type="button"
          {...({ loop: "none" } as { loop: string })}
          className="text-white text-lg font-semibold bg-green-600 caret-transparent hidden justify-start leading-[27px] max-w-full outline-[3px] text-center align-middle border border-green-600 mb-5 mx-auto px-[35px] py-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-xl md:leading-[30px] md:px-[25px] mt-[30px]"
        >
          {props.buttonText}
        </button>
        <img
          title=""
          src="/images/nexa/1729171287293_1718042058_1711466088389_2_min.gif"
          {...({ href: "" } as { href: string })}
          alt=""
          className="text-black box-border caret-transparent max-w-full outline-[3px] align-baseline inline h-5 w-[1000px] mt-5"
        />
        <div className="box-border caret-transparent outline-[3px] bg-orange-100 hidden justify-between w-full pt-5 pb-3 px-2.5 md:flex">
          <div className="box-border caret-transparent outline-[3px] md:text-lg md:leading-[23px] text-[15px] leading-[21px] min-h-0 min-w-0 pl-[15px] pr-2.5 pt-[15px] pb-px font-montserrat md:min-h-[auto] md:min-w-[auto] md:pr-8">
            <b className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
              <span className="text-red-600 text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                <span className="text-black text-[15px] font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                  UPDATE:
                </span>
              </span>
            </b>
            The demand for {props.productName} has increased dramatically and
            inventory has been flying off the shelves. Order your own for
            <span className="text-red-600 text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
              <span className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                <b className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                  <span className="text-black text-[15px] font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                    50% OFF
                  </span>
                </b>
              </span>
            </span>
            before it&#39;s too late.
            <div className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
              <br className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]" />
            </div>
            <div className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
              Lock in your order while you can to get
              <span className="text-red-600 text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                <b className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                  <span className="text-black text-[15px] font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                    50% OFF
                  </span>
                </b>
              </span>
              <div className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                <br className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]" />
              </div>
              <div className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                <span className="text-red-600 text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                  <b className="text-[15px] box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]"></b>
                </span>
                <span className="text-black text-[15px] font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-lg md:leading-[23px]">
                  NOTE:{" "}
                </span>
                This deal is NOT available on Amazon or eBay.
              </div>
            </div>
          </div>
          <img
            title=""
            src="/images/nexa/1765200385645_8.png"
            {...({ href: "" } as { href: string })}
            alt=""
            className="text-black box-border caret-transparent inline h-[202px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[125.844px] ml-[11px] mr-[5px] pr-0 md:block md:h-[219px] md:min-h-[auto] md:min-w-[auto] md:w-[154px] md:ml-0 md:mr-[19px] md:pr-2.5"
          />
        </div>
        <div className="box-border caret-transparent outline-[3px] bg-orange-100 block justify-between w-full pt-5 pb-3 px-2.5 md:hidden">
          <div className="box-border caret-transparent outline-[3px] md:text-lg md:leading-[23px] text-base leading-[22px] pt-[5px] pb-px px-2.5 font-montserrat md:pl-[15px] md:pr-8 md:pt-[15px]">
            <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
              <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
                <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
                  UPDATE:
                </span>
              </span>
            </b>
            The demand for {props.productName} has increased dramatically and
            inventory has been flying off the shelves. Order your own for
            <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
              <span className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
                <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
                  <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
                    50% OFF
                  </span>
                </b>
              </span>
            </span>
            before it&#39;s too late.
          </div>
          <div className="box-border caret-transparent flex justify-center outline-[3px] w-full mb-[5px] pl-[25px] pr-2.5 pt-[5px] pb-3 md:block md:justify-normal md:w-auto md:mb-0 md:p-0">
            <img
              title=""
              src="/images/nexa/1765200385645_8.png"
              {...({ href: "" } as { href: string })}
              alt=""
              className="text-black box-border caret-transparent block h-[213px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[122px] mr-[19px] md:inline md:h-[219px] md:min-h-0 md:min-w-0 md:w-[154px]"
            />
          </div>
          <div className="box-border caret-transparent leading-[22px] outline-[3px] mt-2.5 font-montserrat md:leading-4 md:mt-0 md:font-times_new_roman">
            Lock in your order while you can to get
            <span className="text-red-600 box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
              <b className="box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
                <span className="text-black font-bold box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
                  50% OFF
                </span>
              </b>
            </span>
            <div className="box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
              <br className="box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman" />
            </div>
            <div className="box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
              <span className="text-red-600 box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
                <b className="box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman"></b>
              </span>
              <span className="text-black font-bold box-border caret-transparent leading-[22px] outline-[3px] font-montserrat md:leading-4 md:font-times_new_roman">
                NOTE:{" "}
              </span>
              This deal is NOT available on Amazon or eBay.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "badges") {
    return (
      <div className="box-border caret-transparent outline-[3px] bg-yellow-100 flex justify-between w-full pt-5 pb-[15px] px-2.5 md:pb-5 md:px-[60px]">
        <img
          title=""
          src="/images/nexa/1729170908849_1713302159_1711974144_90_day.webp"
          {...({ href: "" } as { href: string })}
          alt=""
          className="text-black box-border caret-transparent h-[65px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[65px] md:h-[120px] md:w-[120px]"
        />
        <img
          title=""
          src="/images/nexa/1729170970741_1713302401_1711974157_shipping.webp"
          {...({ href: "" } as { href: string })}
          alt=""
          className="text-black box-border caret-transparent h-[65px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[65px] md:h-[120px] md:w-[120px]"
        />
        <img
          title=""
          src="/images/nexa/1729170972423_1713302404_1711974169_secure_checkout.webp"
          {...({ href: "" } as { href: string })}
          alt=""
          className="text-black box-border caret-transparent h-[65px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[65px] md:h-[120px] md:w-[120px]"
        />
        <img
          title=""
          src="/images/nexa/1729170974121_1713302409_1711974180_easy_returns.webp"
          {...({ href: "" } as { href: string })}
          alt=""
          className="text-black box-border caret-transparent h-[65px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[65px] md:h-[120px] md:w-[120px]"
        />
      </div>
    );
  }

  if (props.variant === "badgeLabelsDesktop") {
    return (
      <div className="box-border caret-transparent outline-[3px] bg-yellow-100 hidden justify-between w-full px-[5px] py-3 md:flex md:pl-[50px] md:pr-[70px]">
        <div className="box-border caret-transparent outline-[3px] text-[13px] leading-5 min-h-0 min-w-0 text-center p-px font-montserrat md:text-lg md:leading-[23px] md:min-h-[auto] md:min-w-[auto]">
          90 Day Money
          <div className="text-[13px] box-border caret-transparent leading-5 outline-[3px] md:text-lg md:leading-[23px]">
            Back Guarantee
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] text-sm leading-5 min-h-0 min-w-0 text-center p-px font-montserrat md:text-lg md:leading-[23px] md:min-h-[auto] md:min-w-[auto]">
          Insured &amp; Fast
          <div className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-lg md:leading-[23px]">
            Shipping
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] text-sm leading-5 min-h-0 min-w-0 p-px font-montserrat md:text-lg md:leading-[23px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-sm box-border caret-transparent leading-5 outline-[3px] text-center md:text-lg md:leading-[23px]">
            <span className="box-border caret-transparent outline-[3px] md:text-lg md:leading-[23px] text-neutral-900 text-sm leading-5">
              Guaranteed Safe &amp;
            </span>
          </div>
          <div className="text-sm box-border caret-transparent leading-5 outline-[3px] text-center md:text-lg md:leading-[23px]">
            Secure Checkout
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] text-sm leading-5 min-h-0 min-w-0 text-center p-px font-montserrat md:text-lg md:leading-[23px] md:min-h-[auto] md:min-w-[auto]">
          No-Hassle
          <div className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-lg md:leading-[23px]">
            Returns
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "badgeLabelsMobile") {
    return (
      <div className="box-border caret-transparent outline-[3px] bg-yellow-100 hidden justify-between w-full px-[5px] py-3 md:pl-[50px] md:pr-[70px]">
        <div className="box-border caret-transparent outline-[3px] text-[13px] leading-5 text-center p-px font-montserrat md:text-lg md:leading-[23px]">
          90 Day
          <br className="text-[13px] box-border caret-transparent leading-5 outline-[3px] md:text-lg md:leading-[23px]" />
          Money Back Guarantee
        </div>
        <div className="box-border caret-transparent outline-[3px] text-sm leading-5 text-center p-px font-montserrat md:text-lg md:leading-[23px]">
          Insured &amp; Fast Shipping
        </div>
        <div className="box-border caret-transparent outline-[3px] text-sm leading-5 px-2.5 py-px font-montserrat md:text-lg md:leading-[23px] md:px-px">
          <div className="text-sm box-border caret-transparent leading-5 outline-[3px] text-center md:text-lg md:leading-[23px]"></div>
          <div className="text-sm box-border caret-transparent leading-5 outline-[3px] text-center md:text-lg md:leading-[23px]">
            Safe &amp; Secure Checkout
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] text-sm leading-5 text-center p-px font-montserrat md:text-lg md:leading-[23px]">
          No-Hassle Returns
        </div>
      </div>
    );
  }

  if (props.variant === "ctaGroup") {
    return (
      <div className="box-border caret-transparent outline-[3px] bg-yellow-100 w-full pt-px pb-3 px-2.5 md:pt-[5px]">
        <div className="box-border caret-transparent outline-[3px] block justify-center w-full mt-px mb-[15px] px-2.5 py-3 md:hidden md:mt-5 md:mb-0">
          <a
            title="GET 50% OFF Now!"
            {...({ loop: "none" } as { loop: string })}
            href={props.href}
            className="text-black text-xl font-bold bg-yellow-400 box-border caret-transparent flex justify-center leading-5 max-w-full outline-[3px] text-center px-5 py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-white md:font-semibold md:bg-green-600 md:justify-normal md:px-[27px]"
          >
            GET 50% OFF Now!
          </a>
        </div>
        <div className="box-border caret-transparent outline-[3px] hidden justify-center w-full mt-[5px] mb-2.5 pt-0 pb-3 px-2.5 md:mt-5 md:mb-0 md:pt-3">
          <a
            title="GET 50% OFF Now!"
            {...({ loop: "none" } as { loop: string })}
            href={props.href}
            className="text-black text-xl font-bold bg-yellow-400 box-border caret-transparent flex justify-center leading-5 max-w-full outline-[3px] text-center px-[27px] py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-white md:font-semibold md:bg-green-600 md:justify-normal"
          >
            GET 50% OFF Nexa™ Now!
          </a>
        </div>
        <div className="box-border caret-transparent outline-[3px] hidden justify-center w-full mt-2.5 mb-5 px-2.5 py-3 md:flex">
          <a
            title="GET 50% OFF 3 in 1 Car Cleaning Agent Nexa™ Now!"
            {...({ loop: "none" } as { loop: string })}
            href={props.href}
            className="text-black text-[25px] font-bold bg-yellow-400 box-border caret-transparent flex leading-[25px] max-w-full min-h-0 min-w-0 outline-[3px] text-center px-[120px] py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:min-h-[auto] md:min-w-[auto]"
          >
            GET 50% OFF {props.productName} Now!
          </a>
        </div>
        <button
          title="7th"
          type="button"
          {...({ loop: "none" } as { loop: string })}
          className="text-white text-lg font-semibold bg-green-600 caret-transparent hidden justify-start leading-[27px] max-w-full outline-[3px] text-center align-middle border border-green-600 mb-5 mx-auto px-[35px] py-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-xl md:leading-[30px] md:px-[25px] mt-2.5 md:mt-5"
        >
          {props.buttonText}
        </button>
      </div>
    );
  }

  if (props.variant === "secondaryButton") {
    return (
      <button
        title={props.buttonTitle}
        type="button"
        {...({ loop: "none" } as { loop: string })}
        className="text-white font-semibold bg-green-600 caret-transparent hidden justify-start max-w-full outline-[3px] text-center align-middle border border-green-600 mx-auto my-5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:px-[25px] text-lg leading-[27px] px-[35px] py-2 md:text-xl md:leading-[30px] md:py-2.5"
      >
        {props.buttonText}
      </button>
    );
  }

  return (
    <button
      title={props.buttonTitle}
      type="button"
      {...({ loop: "none" } as { loop: string })}
      className="text-white font-semibold bg-green-600 caret-transparent hidden justify-start max-w-full outline-[3px] text-center align-middle border border-green-600 mx-auto my-5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:px-[25px] text-xl leading-[30px] px-[45px] py-2.5"
    >
      {props.buttonText}
    </button>
  );
};
