export type PricingCardProps = {
  href: string;
  liVariantClass: string;
  linkVariantClass: string;
  badgeText: string;
  badgeVariantClass: string;
  topSectionClass: string;
  title: string;
  titleClass: string;
  supplyText: string;
  imageWrapperClass: string;
  imageSrc: string;
  imageAlt: string;
  showFreeIcon: string;
  freeIconSrc: string;
  freeIconAlt: string;
  saveBadgeClass: string;
  saveTextClass: string;
  saveAmount: string;
  saveAmountDecimal: string;
  priceSectionClass: string;
  priceMainClass: string;
  priceValue: string;
  priceDecimal: string;
  featuresListClass: string;
  featureItemClass: string;
  feature1: string;
  feature2: string;
  feature3: string;
  buttonVariantClass: string;
  buttonImageSrc: string;
  buttonImageAlt: string;
  showCursorImage: string;
  cursorImageSrc: string;
  cursorImageAlt: string;
  cardImageSrc: string;
  cardImageAlt: string;
  totalTextClass: string;
  totalLabelClass: string;
  totalStrikeValue: string;
  totalValue: string;
  totalDecimal: string;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <li
      className={`box-border caret-transparent outline-[3px] ${props.liVariantClass}`}
    >
      <a
        href={props.href}
        className={`relative items-center box-border caret-transparent grid flex-col grid-cols-[repeat(2,1fr)] outline-[3px] rounded-[20px] md:flex md:grid-cols-none ${props.linkVariantClass}`}
      >
        <div
          className={`text-lg font-medium box-border caret-transparent col-end-1 col-start-[-1] leading-[18px] outline-[3px] uppercase w-full p-4 rounded-t-[20px] md:text-2xl md:col-end-auto md:col-start-auto md:leading-6 ${props.badgeVariantClass}`}
        >
          {props.badgeText}
        </div>

        <div
          className={`${props.topSectionClass} box-border caret-transparent outline-[3px] w-full pl-2.5 pr-0 py-4 md:pb-0 md:px-3`}
        >
          <strong
            className={`text-2xl font-bold box-border caret-transparent block leading-9 outline-[3px] md:text-[40px] md:leading-[60px] ${props.titleClass}`}
          >
            {props.title}
          </strong>
          <span className="text-base font-medium box-border caret-transparent block leading-6 outline-[3px] mb-4 md:text-2xl md:leading-9 md:mb-5">
            {props.supplyText}
          </span>

          <div
            className={`relative box-border caret-transparent outline-[3px] ${props.imageWrapperClass}`}
          >
            {props.showFreeIcon === "true" ? (
              <img
                src={props.freeIconSrc}
                alt={props.freeIconAlt}
                className="box-border caret-transparent h-auto object-contain outline-[3px] mx-auto md:h-[267px] absolute max-w-[75px] top-[-10%] z-[5] left-[10%] md:max-w-[120px]"
              />
            ) : null}

            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="relative box-border caret-transparent h-auto max-w-full object-contain outline-[3px] z-[2] mx-auto md:h-[267px]"
            />

            {props.saveAmount ? (
              <div
                className={`absolute items-center bg-red-600 box-border caret-transparent flex h-[76px] justify-center outline-[3px] w-[76px] z-10 px-4 py-1.5 bottom-0 md:bottom-5 ${props.saveBadgeClass}`}
              >
                <b className={props.saveTextClass}>
                  Save ${props.saveAmount}
                  <small className="text-[10px] box-border caret-transparent leading-[10px] outline-[3px]">
                    .{props.saveAmountDecimal}
                  </small>
                </b>
              </div>
            ) : null}
          </div>
        </div>

        <div
          className={`${props.priceSectionClass} box-border caret-transparent outline-[3px] pt-4 pb-5 px-2.5 md:pt-0 md:px-3`}
        >
          <div className="text-sm items-end box-border caret-transparent flex justify-center leading-[14px] outline-[3px] mb-5 md:text-2xl md:leading-6">
            <strong
              className={`text-[40px] font-semibold box-border caret-transparent flex leading-10 outline-[3px] -mb-1.5 ${props.priceMainClass}`}
            >
              ${props.priceValue}
              <small className="text-lg box-border caret-transparent block leading-[18px] outline-[3px] pt-2.5">
                .{props.priceDecimal}
              </small>
            </strong>
            {" / bottle"}
          </div>

          <ul
            className={`items-end box-border caret-transparent grid grid-cols-[repeat(1,1fr)] outline-[3px] text-left w-full pl-0 ${props.featuresListClass}`}
          >
            <li
              className={`text-xs font-medium items-center box-border caret-transparent gap-x-2 flex grid-cols-[20px_1fr] leading-3 outline-[3px] gap-y-2 md:text-base md:grid md:leading-4 before:accent-auto before:box-border before:caret-transparent before:block before:text-xs before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-montserrat before:md:text-base before:md:leading-4 ${props.featureItemClass}`}
            >
              {props.feature1}
            </li>
            <li
              className={`text-xs font-medium items-center box-border caret-transparent gap-x-2 flex grid-cols-[20px_1fr] leading-3 outline-[3px] gap-y-2 md:text-base md:grid md:leading-4 before:accent-auto before:box-border before:caret-transparent before:block before:text-xs before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-montserrat before:md:text-base before:md:leading-4 ${props.featureItemClass}`}
            >
              {props.feature2}
            </li>
            <li
              className={`text-xs font-medium items-center box-border caret-transparent gap-x-2 flex grid-cols-[20px_1fr] leading-3 outline-[3px] gap-y-2 md:text-base md:grid md:leading-4 before:accent-auto before:box-border before:caret-transparent before:block before:text-xs before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-montserrat before:md:text-base before:md:leading-4 ${props.featureItemClass}`}
            >
              {props.feature3}
            </li>
          </ul>

          <button
            className={`relative bg-transparent caret-transparent outline-[3px] mb-2 p-0 ${props.buttonVariantClass}`}
          >
            <img
              src={props.buttonImageSrc}
              alt={props.buttonImageAlt}
              className="box-border caret-transparent max-w-full object-contain outline-[3px]"
            />
            {props.showCursorImage === "true" ? (
              <img
                src={props.cursorImageSrc}
                alt={props.cursorImageAlt}
                className="absolute box-border caret-transparent max-w-full object-contain outline-[3px] w-[30px] z-10 right-0 top-5 md:w-[60px]"
              />
            ) : null}
          </button>

          <img
            src={props.cardImageSrc}
            alt={props.cardImageAlt}
            className="box-border caret-transparent max-w-full object-contain outline-[3px] w-full mb-3 mx-auto md:w-[70%]"
          />

          <div className="items-center box-border caret-transparent gap-x-3 hidden justify-center outline-[3px] gap-y-3 md:flex">
            <span
              className={`text-xl font-bold box-border caret-transparent inline leading-[30px] outline-[3px] md:text-2xl md:block md:leading-9 ${props.totalTextClass}`}
            >
              Total:{" "}
              <s
                className={`text-xl font-normal box-border caret-transparent leading-[30px] outline-[3px] decoration-red-600 line-through md:text-2xl md:leading-9 ${props.totalLabelClass}`}
              >
                {props.totalStrikeValue}
              </s>{" "}
              ${props.totalValue}
              <small className="text-[13px] box-border caret-transparent leading-[19.5px] outline-[3px]">
                .{props.totalDecimal}
              </small>
            </span>
          </div>
        </div>
      </a>
    </li>
  );
};
