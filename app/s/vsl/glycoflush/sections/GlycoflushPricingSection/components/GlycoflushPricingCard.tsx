import { GlycoflushPricingCardCta } from "../../GlycoflushPricingSection/components/GlycoflushPricingCardCta";

export type GlycoflushPricingCardProps = {
  outerVariant: string;
  badgeContainerVariant: string;
  badgeText: string;
  badgeTextVariant: string;
  contentVariant: string;
  titleWrapperVariant: string;
  title: string;
  titleVariant: string;
  titleBoldVariant: string;
  supplyText: string;
  supplyTextVariant: string;
  imageSrc: string;
  imageAlt: string;
  imageVariant: string;
  pricingContainerVariant: string;
  originalPrice: string;
  discountedPrice: string;
  discountedPriceVariant: string;
  perBottleText: string;
  perBottleVariant: string;
  perBottleIconSrc: string;
  shippingText: string;
  shippingTextVariant: string;

  benefit1IconSrc: string;
  benefit1Text: string;
  benefit1TextVariant: string;
  benefit1IconWrapperVariant: string;

  benefit2IconSrc: string;
  benefit2Text: string;
  benefit2TextVariant: string;
  benefit2IconWrapperVariant: string;

  benefit3IconSrc: string;
  benefit3Text: string;
  benefit3TextVariant: string;
  benefit3IconWrapperVariant: string;

  benefit4IconSrc: string;
  benefit4Text: string;
  benefit4TextVariant: string;
  benefit4IconWrapperVariant: string;

  showBenefit4: string;
  showBenefit5: string;
  benefit5IconSrc: string;
  benefit5Text: string;
  benefit5TextVariant: string;
  benefit5IconWrapperVariant: string;

  showGuarantee: string;
  guaranteeText: string;

  showSurprise: string;
  surpriseText: string;
  surpriseImageSrc: string;
  surpriseImageAlt: string;

  ctaContainerVariant: string;
  ctaButtonVariant: string;
  ctaButtonInnerVariant: string;
  ctaButtonTextVariant: string;
  ctaButtonText: string;
  ctaImageSrc: string;
  ctaImageAlt: string;
  ctaShowPricing: string;
  ctaOriginalPrice: string;
  ctaDiscountedPrice: string;
  ctaShippingText: string;
  ctaShippingTextClassName: string;
  ctaShippingHighlightText: string;
  ctaShippingHighlightClassName: string;
  ctaShowFooter: string;
  ctaFooterTitle: string;
  ctaFooterTitleClassName: string;
  ctaFooterShippingText: string;
  ctaFooterShippingClassName: string;
};

export const GlycoflushPricingCard = (props: GlycoflushPricingCardProps) => {
  return (
    <div
      className={`relative shadow-[rgba(0,0,0,0.5)_0px_5px_20px_1px] box-border caret-transparent gap-x-0 flex flex-col flex-wrap outline-[3px] gap-y-0 w-full z-[2] rounded-[25px] border-[3px] border-solid md:flex-nowrap md:order-none ${props.outerVariant}`}
    >
      <div
        className={`relative box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap outline-[3px] gap-y-2.5 w-full z-[2] px-0 py-2.5 rounded-t-[20px] md:flex-nowrap md:px-[30px] ${props.badgeContainerVariant}`}
      >
        <div className="relative box-border caret-transparent gap-x-2.5 max-w-full outline-[3px] gap-y-2.5 text-center">
          <h4
            className={`box-border caret-transparent outline-[3px] font-poppins ${props.badgeTextVariant}`}
          >
            {props.badgeText}
          </h4>
        </div>
      </div>

      <div
        className={`relative box-border caret-transparent gap-x-0 flex flex-row flex-wrap justify-center outline-[3px] gap-y-0 w-full z-[2] pt-2.5 pb-0 px-[5px] md:flex-col md:flex-nowrap md:justify-normal md:pb-2.5 md:px-2.5 ${props.contentVariant}`}
      >
        <div className="relative items-center box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap justify-center outline-[3px] gap-y-2.5 w-6/12 z-[2] md:[align-items:normal] md:flex-nowrap md:justify-normal md:w-full">
          <div
            className={`relative box-border caret-transparent gap-x-2.5 max-w-full outline-[3px] gap-y-2.5 text-center ${props.titleWrapperVariant}`}
          >
            <h4
              className={`font-black box-border caret-transparent outline-[3px] font-poppins ${props.titleVariant}`}
            >
              <b
                className={`box-border caret-transparent outline-[3px] ${props.titleBoldVariant}`}
              >
                {props.title}
              </b>
            </h4>
          </div>

          <div className="relative box-border caret-transparent gap-x-2.5 max-w-full outline-[3px] gap-y-2.5 text-center mt-0 md:mt-[5px]">
            <h4
              className={`text-lg box-border caret-transparent leading-[18px] outline-[3px] font-poppins md:text-xl md:leading-5 ${props.supplyTextVariant}`}
            >
              {props.supplyText}
            </h4>
          </div>

          <div className="relative box-border caret-transparent gap-x-2.5 max-w-full outline-[3px] gap-y-2.5 text-center">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              sizes="(max-width: 800px) 100vw, 800px"
              className={`aspect-[auto_800_/_800] box-border caret-transparent inline-block outline-[3px] w-[800px] ${props.imageVariant}`}
            />
          </div>
        </div>

        <div
          className={`relative items-center box-border caret-transparent gap-x-[5px] flex flex-col flex-wrap justify-center outline-[3px] gap-y-[5px] w-6/12 z-[2] md:[align-items:normal] md:gap-x-2.5 md:flex-nowrap md:gap-y-2.5 md:w-full ${props.pricingContainerVariant}`}
        >
          <div className="relative items-end box-border caret-transparent gap-x-0 flex flex-wrap justify-center outline-[3px] gap-y-0 w-full z-[2]">
            <div className="relative self-center box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0">
              <p className="text-red-500 text-[25.6px] font-black box-border caret-transparent leading-[25.6px] outline-[3px] my-1.5 font-roboto after:accent-auto after:bg-black after:box-border after:caret-transparent after:text-red-500 after:block after:text-[25.6px] after:not-italic after:normal-nums after:font-black after:h-[3px] after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:top-2/4 after:-inset-x-1.5 after:font-roboto">
                {props.originalPrice}
              </p>
            </div>

            <div className="relative box-border caret-transparent gap-x-0 mb-[-5px] max-w-full outline-[3px] gap-y-0 md:-mb-2.5">
              <h2
                className={`text-[75px] font-black box-border caret-transparent leading-[75px] outline-[3px] my-1.5 font-roboto md:text-[90px] md:leading-[90px] ${props.discountedPriceVariant}`}
              >
                {props.discountedPrice}
              </h2>
            </div>

            <div className="relative box-border caret-transparent gap-x-0 max-w-full outline-[3px] gap-y-0 w-full mt-0 mb-[5px] md:mt-2.5 md:mb-0">
              <h3 className="font-extrabold box-border caret-transparent leading-[19.2px] outline-[3px] text-center my-4 font-poppins">
                <span className="relative box-border caret-transparent inline-block outline-[3px] align-bottom">
                  <span
                    className={`relative box-border caret-transparent inline-block outline-[3px] z-[1] left-0 top-0 ${props.perBottleVariant}`}
                  >
                    {props.perBottleText}
                  </span>
                  <img
                    src={props.perBottleIconSrc}
                    alt="Icon"
                    className="absolute box-border caret-transparent h-[calc(100%_+_20px)] outline-[3px] align-baseline w-[calc(100%_+_20px)] left-2/4 top-2/4"
                  />
                </span>
              </h3>
            </div>
          </div>

          <div className="relative self-center box-border caret-transparent gap-x-[5px] max-w-full outline-[3px] gap-y-[5px] text-center md:self-auto md:gap-x-2.5 md:gap-y-2.5">
            <ul className="box-border caret-transparent list-none outline-[3px] pl-0">
              <li className="relative items-center box-border caret-transparent flex justify-center outline-[3px] pb-[2.5px] md:pb-[5px]">
                <span
                  className={`text-xs font-extrabold box-border caret-transparent block leading-[23px] outline-[3px] font-poppins md:text-base md:leading-[30px] ${props.shippingTextVariant}`}
                >
                  {props.shippingText}
                </span>
              </li>

              <li className="relative items-center box-border caret-transparent flex justify-center outline-[3px] mt-[2.5px] md:mt-[5px] pb-[2.5px] md:pb-[5px]">
                <span
                  className={`relative box-border caret-transparent flex outline-[3px] top-0 ${props.benefit1IconWrapperVariant}`}
                >
                  <img
                    src={props.benefit1IconSrc}
                    alt="Icon"
                    className="box-border caret-transparent h-[15px] outline-[3px] align-baseline w-[15px] mr-[3.75px] md:h-5 md:w-5 md:mr-[5px]"
                  />
                </span>
                <span
                  className={`text-xs font-extrabold self-center box-border caret-transparent block leading-[23px] outline-[3px] pl-[5px] font-poppins md:text-base md:leading-[30px] ${props.benefit1TextVariant}`}
                >
                  {props.benefit1Text}
                </span>
              </li>

              <li className="relative items-center box-border caret-transparent flex justify-center outline-[3px] mt-[2.5px] md:mt-[5px] pb-[2.5px] md:pb-[5px]">
                <span
                  className={`relative box-border caret-transparent flex outline-[3px] top-0 ${props.benefit2IconWrapperVariant}`}
                >
                  <img
                    src={props.benefit2IconSrc}
                    alt="Icon"
                    className="box-border caret-transparent h-[15px] outline-[3px] align-baseline w-[15px] mr-[3.75px] md:h-5 md:w-5 md:mr-[5px]"
                  />
                </span>
                <span
                  className={`text-xs font-extrabold self-center box-border caret-transparent block leading-[23px] outline-[3px] pl-[5px] font-poppins md:text-base md:leading-[30px] ${props.benefit2TextVariant}`}
                >
                  {props.benefit2Text}
                </span>
              </li>

              <li className="relative items-center box-border caret-transparent flex justify-center outline-[3px] mt-[2.5px] md:mt-[5px] pb-[2.5px] md:pb-[5px]">
                <span
                  className={`relative box-border caret-transparent flex outline-[3px] top-0 ${props.benefit3IconWrapperVariant}`}
                >
                  <img
                    src={props.benefit3IconSrc}
                    alt="Icon"
                    className="box-border caret-transparent h-[15px] outline-[3px] align-baseline w-[15px] mr-[3.75px] md:h-5 md:w-5 md:mr-[5px]"
                  />
                </span>
                <span
                  className={`text-xs font-extrabold self-center box-border caret-transparent block leading-[23px] outline-[3px] pl-[5px] font-poppins md:text-base md:leading-[30px] ${props.benefit3TextVariant}`}
                >
                  {props.benefit3Text}
                </span>
              </li>

              {props.showBenefit4 === "true" && (
                <li className="relative items-center box-border caret-transparent flex justify-center outline-[3px] mt-[2.5px] md:mt-[5px]">
                  <span
                    className={`relative box-border caret-transparent flex outline-[3px] top-0 ${props.benefit4IconWrapperVariant}`}
                  >
                    <img
                      src={props.benefit4IconSrc}
                      alt="Icon"
                      className="box-border caret-transparent h-[15px] outline-[3px] align-baseline w-[15px] mr-[3.75px] md:h-5 md:w-5 md:mr-[5px]"
                    />
                  </span>
                  <span
                    className={`text-xs font-extrabold self-center box-border caret-transparent block leading-[23px] outline-[3px] pl-[5px] font-poppins md:text-base md:leading-[30px] ${props.benefit4TextVariant}`}
                  >
                    {props.benefit4Text}
                  </span>
                </li>
              )}

              {props.showBenefit5 === "true" && (
                <li className="relative items-center box-border caret-transparent flex justify-center outline-[3px] mt-[2.5px] md:mt-[5px]">
                  <span
                    className={`relative box-border caret-transparent flex outline-[3px] top-0 ${props.benefit5IconWrapperVariant}`}
                  >
                    <img
                      src={props.benefit5IconSrc}
                      alt="Icon"
                      className="box-border caret-transparent h-[15px] outline-[3px] align-baseline w-[15px] mr-[3.75px] md:h-5 md:w-5 md:mr-[5px]"
                    />
                  </span>
                  <span
                    className={`text-xs font-extrabold self-center box-border caret-transparent block leading-[23px] outline-[3px] pl-[5px] font-poppins md:text-base md:leading-[30px] ${props.benefit5TextVariant}`}
                  >
                    {props.benefit5Text}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {props.showGuarantee === "true" && (
            <div className="relative box-border caret-transparent gap-x-[5px] max-w-full outline-[3px] gap-y-[5px] text-center mt-0 md:gap-x-2.5 md:gap-y-2.5 md:mt-[5px]">
              <h4 className="text-yellow-400 text-lg box-border caret-transparent leading-[18px] outline-[3px] mt-2.5 mb-1 font-poppins md:text-xl md:leading-5">
                {props.guaranteeText}
              </h4>
            </div>
          )}

          {props.showSurprise === "true" && (
            <div className="relative box-border caret-transparent gap-x-[5px] max-w-full outline-[3px] gap-y-[5px] text-center origin-[50%_100%] mt-0 md:gap-x-2.5 md:gap-y-2.5 md:mt-[5px]">
              <h4 className="text-teal-300 text-lg box-border caret-transparent leading-[18px] outline-[3px] font-poppins md:text-xl md:leading-5">
                {props.surpriseText}{" "}
                <img
                  role="img"
                  alt={props.surpriseImageAlt}
                  src={props.surpriseImageSrc}
                  className="text-lg box-border caret-transparent inline h-[18px] leading-[18px] max-w-full outline-[3px] w-[18px] mx-[1.26px] md:text-xl md:h-5 md:leading-5 md:w-5 md:mx-[1.4px]"
                />
              </h4>
            </div>
          )}
        </div>
      </div>

      <GlycoflushPricingCardCta
        containerVariant={props.ctaContainerVariant}
        buttonVariant={props.ctaButtonVariant}
        buttonInnerVariant={props.ctaButtonInnerVariant}
        buttonTextVariant={props.ctaButtonTextVariant}
        buttonText={props.ctaButtonText}
        imageSrc={props.ctaImageSrc}
        imageAlt={props.ctaImageAlt}
        showPricing={props.ctaShowPricing}
        originalPrice={props.ctaOriginalPrice}
        discountedPrice={props.ctaDiscountedPrice}
        shippingText={props.ctaShippingText}
        shippingTextClassName={props.ctaShippingTextClassName}
        shippingHighlightText={props.ctaShippingHighlightText}
        shippingHighlightClassName={props.ctaShippingHighlightClassName}
        showFooter={props.ctaShowFooter}
        footerTitle={props.ctaFooterTitle}
        footerTitleClassName={props.ctaFooterTitleClassName}
        footerShippingText={props.ctaFooterShippingText}
        footerShippingClassName={props.ctaFooterShippingClassName}
      />
    </div>
  );
};
