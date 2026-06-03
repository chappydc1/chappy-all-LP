export type GlycoflushPricingCardCtaProps = {
  containerVariant: string;
  buttonVariant: string;
  buttonInnerVariant: string;
  buttonTextVariant: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  showPricing: string;
  originalPrice: string;
  discountedPrice: string;
  shippingText: string;
  shippingTextClassName: string;
  shippingHighlightText: string;
  shippingHighlightClassName: string;
  showFooter: string;
  footerTitle: string;
  footerTitleClassName: string;
  footerShippingText: string;
  footerShippingClassName: string;
};

export const GlycoflushPricingCardCta = (props: GlycoflushPricingCardCtaProps) => {
  return (
    <div
      className={`relative box-border caret-transparent gap-x-0 flex flex-row flex-wrap justify-center outline-[3px] gap-y-0 w-full z-[2] pt-2.5 pb-[5px] px-[5px] rounded-b-[20px] md:flex-col md:flex-nowrap md:justify-normal md:pb-2.5 md:px-2.5 ${props.containerVariant}`}
    >
      <div className="relative box-border caret-transparent gap-x-0 flex flex-col flex-wrap outline-[3px] gap-y-0 w-full z-[2] md:gap-x-2.5 md:flex-nowrap md:gap-y-2.5">
        <div className="relative self-center box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 w-[95%] pb-2.5 md:self-auto md:gap-x-2.5 md:gap-y-2.5 md:w-auto md:pb-[5px]">
          <a
            className={`text-xl box-border caret-transparent inline-block leading-[50px] outline-[3px] text-center w-full p-0 rounded-[5px] font-sora md:text-3xl md:leading-[39px] md:p-5 ${props.buttonVariant}`}
          >
            <span
              className={`text-xl box-border caret-transparent gap-x-[5px] flex justify-center leading-[50px] outline-[3px] gap-y-[5px] md:text-3xl md:leading-[39px] ${props.buttonInnerVariant}`}
            >
              <span
                className={`text-xl box-border caret-transparent block leading-[50px] outline-[3px] md:text-3xl md:leading-[39px] ${props.buttonTextVariant}`}
              >
                {props.buttonText}
              </span>
            </span>
          </a>
        </div>

        <div className="relative box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 text-center py-[5px] md:gap-x-2.5 md:gap-y-2.5">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            sizes="(max-width: 391px) 100vw, 391px"
            className="aspect-[auto_391_/_57] box-border caret-transparent inline-block max-w-[45%] outline-[3px] w-[70%] md:max-w-full"
          />
        </div>

        {props.showPricing === "true" && (
          <>
            <div className="relative box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 text-center md:gap-x-2.5 md:gap-y-2.5">
              <p className="font-black box-border caret-transparent leading-[19.2px] outline-[3px] font-poppins">
                TOTAL:{" "}
                <s className="box-border caret-transparent outline-[3px] line-through">
                  {props.originalPrice}
                </s>
                <b className="box-border caret-transparent outline-[3px]">
                  {props.discountedPrice}
                </b>
              </p>
            </div>

            <div className="relative box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 text-center md:gap-x-2.5 md:gap-y-2.5">
              <p
                className={`font-black box-border caret-transparent leading-[19.2px] outline-[3px] font-poppins ${props.shippingTextClassName}`}
              >
                {props.shippingHighlightText ? (
                  <>
                    <span className={props.shippingHighlightClassName}>
                      {props.shippingHighlightText}
                    </span>{" "}
                    {props.shippingText}
                  </>
                ) : (
                  props.shippingText
                )}
              </p>
            </div>
          </>
        )}
      </div>

      {props.showFooter === "true" && (
        <>
          <div className="relative box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 text-center mt-0 md:mt-[5px]">
            <h4 className={props.footerTitleClassName}>{props.footerTitle}</h4>
          </div>
          <div className="relative box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 text-center mt-0 md:mt-[5px]">
            <h4 className={props.footerShippingClassName}>
              {props.footerShippingText}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};
