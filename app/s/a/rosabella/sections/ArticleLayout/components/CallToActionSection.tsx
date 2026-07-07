"use client";

import { useAdvertorial } from "../../LandingPage/context";

export type RosabellaCallToActionSectionProps = {
  variant: string;
  href: string;
  ctaText: string;
  ctaClassName: string;
  ctaSpanClassName: string;
};

export const RosabellaCallToActionSection = (props: RosabellaCallToActionSectionProps) => {
  const { copy, media } = useAdvertorial();

  if (props.variant === "ctaButton") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="items-stretch self-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <a
            href={props.href}
            className={`relative text-green-600 font-bold bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex-col tracking-[0.28px] leading-[16.8px] underline border-green-400 mt-[25px] mx-2.5 rounded-[5px] border-b-[5px] ${props.ctaClassName}`}
          >
            <span className={props.ctaSpanClassName}>{props.ctaText}</span>
          </a>
        </div>
      </div>
    );
  }

  if (props.variant === "heroImage") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full items-center mt-[50px] mx-2.5">
          <img
            src={media.dividerGif}
            alt=""
            sizes="858px"
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline h-3 w-full"
          />
        </div>
      </div>
    );
  }

  if (props.variant === "updateOffer") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mx-2.5 bg-yellow-50 p-5">
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px] text-black text-[15.4583px] leading-[20.0958px] md:text-[21px] md:leading-[31.5px]">
                      <strong className="text-red-700 text-[15.4583px] font-bold box-border caret-transparent leading-[20.0958px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                        {copy.updateOffer.updateLabel}
                      </strong>
                      <strong className="text-[15.4583px] font-bold box-border caret-transparent leading-[20.0958px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                        &nbsp;As of&nbsp;
                        <strong className="text-[15.4583px] font-black box-border caret-transparent leading-[20.0958px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                          {copy.updateOffer.dateText}
                        </strong>
                        <strong className="text-[15.4583px] font-black box-border caret-transparent leading-[20.0958px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                          {copy.updateOffer.message.replace("50% OFF + FAST SHIPPING", "")}
                          <span className="text-red-600 text-[15.4583px] box-border caret-transparent leading-[20.0958px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                            50% OFF + FAST SHIPPING
                          </span>{" "}
                          before it&apos;s too late.
                        </strong>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <div className="items-start box-border caret-transparent flex-wrap mt-2.5 flex flex-col min-h-[auto] min-w-[auto] md:flex-row md:mt-5">
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] max-w-full min-h-[auto] min-w-full w-full md:max-w-none md:min-w-0 md:w-auto">
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mb-2.5 md:hidden md:min-h-0 md:min-w-0">
                          <img
                            src={media.updateOfferProductImage}
                            alt=""
                            className="box-border caret-transparent max-w-full outline-[3px] align-baseline block min-h-[auto] min-w-[auto] w-full md:inline md:min-h-0 md:min-w-0 md:w-[200px]"
                          />
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px] w-full text-zinc-800 text-[19.4583px] leading-[29.1875px] min-h-[auto] min-w-[auto] md:text-[21px] md:leading-[31.5px]">
                          <div className="box-border caret-transparent outline-[3px] w-full text-[19.4583px] leading-[29.1875px] md:text-[21px] md:leading-[31.5px]">
                            <p className="text-[19.4583px] box-border caret-transparent leading-[29.1875px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                              {copy.updateOffer.lockInText.replace("50% OFF + FAST SHIPPING", "")}
                              <strong className="text-[19.4583px] font-bold box-border caret-transparent leading-[29.1875px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                                50% OFF + FAST SHIPPING
                              </strong>
                            </p>
                            <p><br /></p>
                            <p className="text-[19.4583px] box-border caret-transparent leading-[29.1875px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                              <strong className="text-red-600 text-[19.4583px] font-bold box-border caret-transparent leading-[29.1875px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                                {copy.updateOffer.noteLabel}
                              </strong>
                              <strong className="text-[19.4583px] font-bold box-border caret-transparent leading-[29.1875px] outline-[3px] md:text-[21px] md:leading-[31.5px]">
                                &nbsp;{copy.updateOffer.noteText}
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] max-w-[40%] min-h-[auto] min-w-[40%] w-2/5">
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="items-center box-border caret-transparent flex-col min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto] hidden md:flex">
                          <img
                            src={media.productBottleImage}
                            alt=""
                            sizes="250px"
                            className="box-border caret-transparent max-w-full min-h-0 min-w-0 outline-[3px] align-baseline md:min-h-[auto] md:min-w-[auto] inline w-full md:block md:w-[250px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "trustAndCta") {
    const trustImages = [
      { src: media.trustBadgeIcons.moneyBack, label: copy.trustBadges[0] },
      { src: media.trustBadgeIcons.secureCheckout, label: copy.trustBadges[1] },
      { src: media.trustBadgeIcons.noHassle, label: copy.trustBadges[2] },
      { src: media.trustBadgeIcons.fastShipping, label: copy.trustBadges[3] },
    ];

    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mx-2.5 bg-yellow-100 px-[5px] py-2.5">
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
              {/* Mobile trust badges grid */}
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent text-[10px] items-start gap-x-2.5 grid flex-wrap grid-cols-[1fr_1fr] min-h-[auto] min-w-[auto] gap-y-2.5 md:text-sm md:gap-x-[normal] md:hidden md:grid-cols-none md:min-h-0 md:min-w-0">
                    {copy.trustBadges.map((badge) => (
                      <div key={badge} className="text-[10px] box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px] md:text-sm md:min-h-0">
                        <div className="text-[10px] items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] md:text-sm md:min-w-0">
                          <div className="text-[10px] items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5 md:text-sm md:min-h-0 md:min-w-0">
                            <img
                              src={media.defaultProductImage}
                              alt=""
                              className="text-[10px] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[100px] md:text-sm md:min-h-0 md:min-w-0"
                            />
                          </div>
                        </div>
                        <div className="text-[10px] items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] md:text-sm md:min-w-0">
                          <div className="text-black text-[12.4583px] box-border caret-transparent leading-[14.95px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-lg md:leading-[21.6px] md:min-h-0 md:min-w-0">
                            <p className="text-[12.4583px] box-border caret-transparent leading-[14.95px] outline-[3px] md:text-lg md:leading-[21.6px]">
                              <strong className="text-[12.4583px] font-bold bg-yellow-100 box-border caret-transparent leading-[14.95px] outline-[3px] md:text-lg md:leading-[21.6px]">
                                {badge}
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop trust badges */}
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <div className="items-start box-border caret-transparent flex-wrap mt-2.5 text-[10px] gap-x-2.5 hidden grid-cols-[1fr_1fr] min-h-0 min-w-0 gap-y-2.5 md:text-sm md:gap-x-[normal] md:flex md:grid-cols-none md:min-h-[auto] md:min-w-[auto] md:gap-y-[normal]">
                    {trustImages.map((item) => (
                      <div key={item.label} className="text-[10px] box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 outline-[3px] md:text-sm md:min-h-[auto]">
                        <div className="text-[10px] items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:text-sm md:min-w-[auto]">
                          <div className="text-[10px] items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-full my-2.5 md:text-sm md:min-h-[auto] md:min-w-[auto]">
                            <img
                              src={item.src}
                              alt=""
                              sizes="160px"
                              className="text-[10px] box-border caret-transparent max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-40 md:text-sm md:min-h-[auto] md:min-w-[auto]"
                            />
                          </div>
                        </div>
                        <div className="text-[10px] items-center box-border caret-transparent flex justify-center min-w-0 outline-[3px] md:text-sm md:min-w-[auto]">
                          <div className="text-black text-lg box-border caret-transparent leading-[21.6px] min-h-0 min-w-0 outline-[3px] text-center w-full md:min-h-[auto] md:min-w-[auto]">
                            <p className="box-border caret-transparent outline-[3px]">
                              <strong className="font-bold bg-yellow-100 box-border caret-transparent outline-[3px]">
                                {item.label}
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="items-stretch self-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <a
                    href={props.href}
                    className="relative text-green-600 font-bold bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex flex-col tracking-[0.28px] leading-[16.8px] min-h-[auto] min-w-[auto] underline border-green-400 mt-[25px] px-[5px] py-[15px] rounded-[5px] border-b-[5px] md:hidden md:min-h-0 md:min-w-0"
                  >
                    <span className="text-white text-[17px] box-border caret-transparent block leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none text-center md:inline md:min-h-0 md:min-w-0">
                      {props.ctaText}
                    </span>
                  </a>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="items-stretch self-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <a
                    href={props.href}
                    className="relative text-green-600 text-sm font-bold bg-green-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent hidden flex-col tracking-[0.28px] leading-[16.8px] min-h-0 min-w-0 underline border-green-400 mt-[25px] px-2.5 py-5 rounded-[5px] border-b-[5px] md:text-xl md:flex md:tracking-[0.4px] md:leading-6 md:min-h-[auto] md:min-w-[auto]"
                  >
                    <span className="text-white text-3xl box-border caret-transparent inline tracking-[0.28px] leading-9 min-h-0 min-w-0 outline-[3px] pointer-events-none text-center md:block md:tracking-[0.4px] md:min-h-[auto] md:min-w-[auto]">
                      {props.ctaText}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
      <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full md:hidden md:min-h-0 md:min-w-0">
        <img
          src={media.defaultProductImage}
          alt=""
          className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline aspect-[auto_395_/_563] block h-[563px] object-contain w-[395px] md:inline md:min-h-0 md:min-w-0"
        />
      </div>
    </div>
  );
};
