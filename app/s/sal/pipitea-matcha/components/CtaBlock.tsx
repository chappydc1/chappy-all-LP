export type PipiteaMatchaCtaBlockProps = {
  outerVariant: string;
  frameVariant: string;
  contentVariant: string;
  ctaText: string;
  ctaTitle: string;
  imageSrc: string;
  imageSizes: string;
  guaranteeText: string;
  guaranteeTag: string;
  reviewVariant: string;
  reviewEyebrow: string;
  reviewQuote: string;
  reviewAuthor: string;
};

export const PipiteaMatchaCtaBlock = (props: PipiteaMatchaCtaBlockProps) => {
  const GuaranteeTag = props.guaranteeTag === "h1" ? "h1" : "p";

  const ctaContent = (
    <div
      className={`box-border caret-transparent flex ${props.contentVariant}`}
    >
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div
          className={`box-border caret-transparent flex min-w-[auto] ${props.frameVariant}`}
        >
          <div className="box-border caret-transparent flex flex-col min-h-[auto] outline-[3px] basis-[0%] grow">
            <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
              <div className="items-stretch box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <a
                  title={props.ctaTitle}
                  className="relative text-white text-base font-bold self-center bg-zinc-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex flex-col tracking-[0.32px] leading-[24.48px] max-w-[565px] min-h-[auto] min-w-[auto] text-center align-middle w-full px-2.5 py-3 rounded-[30px] md:text-lg md:tracking-[0.36px] md:leading-[27.54px]"
                >
                  <div className="text-base box-border caret-transparent tracking-[0.32px] leading-[24.48px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-lg md:tracking-[0.36px] md:leading-[27.54px]">
                    <p className="text-base box-border caret-transparent tracking-[0.32px] leading-[24.48px] outline-[3px] md:text-lg md:tracking-[0.36px] md:leading-[27.54px]">
                      {props.ctaText}
                    </p>
                  </div>
                </a>
                {props.reviewVariant === "doctor" ? (
                  <div className="box-border caret-transparent flex justify-center min-w-[auto] items-end self-center bg-white flex-wrap min-h-[auto] border border-zinc-700 mt-[25px] pl-2.5 pr-px pt-2.5 pb-px rounded-lg border-solid md:justify-normal md:pl-[15px] md:pt-[15px]">
                    <div className="box-border caret-transparent flex flex-col min-h-[auto] outline-[3px] basis-[0%] grow">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pl-px pr-2.5 pt-px pb-2.5 md:pl-2.5 md:py-3">
                        <div className="items-start box-border caret-transparent flex flex-col outline-[3px] w-full mb-2.5">
                          <p className="text-black text-lg font-medium box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px]">
                            <b className="text-base font-bold box-border caret-transparent leading-6 outline-[3px] md:text-lg md:leading-[27px]">
                              {props.reviewEyebrow}
                            </b>
                          </p>
                        </div>
                        <p className="box-border caret-transparent outline-[3px]">
                          <span className="text-xs box-border caret-transparent leading-[18px] outline-[3px] md:text-sm md:leading-[21px]">
                            {props.reviewQuote}
                          </span>
                        </p>
                        <div className="box-border caret-transparent flex flex-col outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-wrap justify-between min-h-[auto] min-w-[auto] mt-[15px]">
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]">
                                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left w-full">
                                          <div className="box-border caret-transparent outline-[3px] w-full">
                                            <strong className="font-bold box-border caret-transparent outline-[3px]">
                                              <span className="font-normal box-border caret-transparent outline-[3px]">
                                                {props.reviewAuthor}
                                              </span>
                                            </strong>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"></div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full"></div>
                      </div>
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"></div>
                    </div>
                    <img
                      title=""
                      src="https://assets.imagehub.io/d7e682f1-bc91-48e4-b32d-d2ec8dc645c0/1762909958048_doctor.webp"
                      alt="Dr. Paula Jenkins"
                      className="text-black items-end self-end box-border caret-transparent h-[30%] justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[30%] md:[align-items:normal] md:self-auto md:h-3/6 md:justify-normal md:w-2/5"
                    />
                  </div>
                ) : null}
              </div>
            </div>
            {props.reviewVariant === "doctor" ? null : (
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-wrap justify-center min-h-[auto] min-w-[auto] mt-5">
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                          <img
                            src={props.imageSrc}
                            alt=""
                            sizes={props.imageSizes}
                            title=""
                            className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2.5 md:text-base md:leading-6">
                          <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-base md:leading-6">
                            <GuaranteeTag
                              className={
                                props.guaranteeTag === "h1"
                                  ? "text-[16.0583px] font-medium box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6"
                                  : "text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6"
                              }
                            >
                              {props.guaranteeText}
                              <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6" />
                            </GuaranteeTag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (props.outerVariant === "wrapped") {
    return (
      <div className="box-border caret-transparent flex outline-[3px] text-zinc-800 bg-no-repeat flex-col max-w-[1170px] min-h-[auto] min-w-[auto] text-start w-full bg-center md:flex-row">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full align-top">
          {ctaContent}
        </div>
      </div>
    );
  }

  if (props.outerVariant === "doctor") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          {ctaContent}
        </div>
      </div>
    );
  }

  return ctaContent;
};
