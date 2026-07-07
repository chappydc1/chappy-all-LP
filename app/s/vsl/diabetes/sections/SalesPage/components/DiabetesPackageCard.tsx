export type DiabetesPackageCardProps = {
  containerVariant: string;
  href: string;
  title?: string;
  linkVariant: string;
  cardVariant: string;
  badgeVariant: string;
  badgeText: string;
  packageTitle: string;
  supplyText: string;
  bottleImageSrc: string;
  bottleImageAlt?: string;
  bottleImageVariant: string;
  price: string;
  savingsText: string;
  savingsVariant: string;
  discountText: string;
  discountVariant: string;
  guaranteeText: string;
  guaranteeVariant: string;
  cardsImageSrc: string;
  totalOriginalPrice: string;
  totalPrice: string;
  shippingText: string;
  freeShippingText?: string;
  freeShippingVariant?: string;
};

export const DiabetesPackageCard = (props: DiabetesPackageCardProps) => {
  return (
    <div
      className={`box-border caret-transparent shrink-0 max-w-full order-none outline-[3px] w-full mb-4 px-3 md:w-[33.3333%] ${props.containerVariant}`}
    >
      <a
        href={props.href}
        title={props.title}
        className={`bg-white box-border caret-transparent block outline-[3px] border-yellow-600 overflow-hidden mx-0 p-[3px] rounded-2xl border-2 border-solid md:mx-2.5 ${props.linkVariant}`}
      >
        <div
          className={`items-center box-border caret-transparent gap-x-2 grid-cols-[1fr_1fr] outline-[3px] overflow-hidden py-2 rounded-[18px] md:[align-items:normal] md:gap-x-[normal] md:[grid-template-areas:none] md:grid-cols-none md:py-0 ${props.cardVariant}`}
        >
          <div
            className={`text-[22.4px] font-extrabold box-border caret-transparent leading-[33.6px] outline-[3px] md:text-base md:leading-6 md:px-2 md:py-1 ${props.badgeVariant}`}
          >
            {props.badgeText}
          </div>
          <div className="relative box-border caret-transparent col-end-[img] col-start-[img] row-end-[img] row-start-[img] outline-[3px]">
            <div className="box-border caret-transparent leading-4 outline-[3px] p-0 md:px-2 md:py-4">
              <b className="text-xl font-bold box-border caret-transparent block leading-5 outline-[3px] md:text-[28px] md:leading-7">
                {props.packageTitle}
              </b>
              {props.supplyText}
            </div>
            <img
              src={props.bottleImageSrc}
              alt={props.bottleImageAlt}
              className={`box-border caret-transparent inline max-w-full outline-[3px] ${props.bottleImageVariant}`}
            />
          </div>
          <div className="box-border caret-transparent col-end-[info] col-start-[info] row-end-[info] row-start-[info] outline-[3px]">
            <div className="items-center box-border caret-transparent gap-x-1 flex leading-4 outline-[3px] gap-y-1 text-start w-fit mx-auto">
              <b className="text-[80px] font-bold box-border caret-transparent block tracking-[-4.8px] leading-[80px] outline-[3px] text-center md:text-[64px] md:tracking-[normal] md:leading-[64px]">
                <sup className="relative text-5xl box-border caret-transparent tracking-[-4.8px] leading-[0px] outline-[3px] align-baseline -top-6 md:text-[38.4px] md:tracking-[normal] md:top-[-19.2px]">
                  $
                </sup>
                {props.price}
              </b>
              <span className="text-[12.8px] font-extrabold box-border caret-transparent block leading-[12.8px] outline-[3px] md:text-base md:leading-4">
                PER
                <br className="text-[12.8px] box-border caret-transparent leading-[12.8px] outline-[3px] md:text-base md:leading-4" />
                BOTTLE
              </span>
            </div>
            <div className="text-base font-extrabold box-border caret-transparent leading-6 outline-[3px] md:text-[12.8px] md:leading-[19.2px]">
              <div
                className={`text-base items-center box-border caret-transparent justify-center leading-6 outline-[3px] px-0 py-2 border-b border-t md:text-[12.8px] md:leading-[19.2px] md:p-[6.4px] ${props.savingsVariant}`}
              >
                <i className="text-base italic box-border caret-transparent leading-6 outline-[3px] md:text-[12.8px] md:leading-[19.2px]"></i>
                {props.savingsText}
              </div>
              <div
                className={`text-base items-center box-border caret-transparent justify-center leading-6 outline-[3px] px-0 py-2 border-b md:text-[12.8px] md:leading-[19.2px] md:p-[6.4px] ${props.discountVariant}`}
              >
                <i className="text-base italic box-border caret-transparent leading-6 outline-[3px] md:text-[12.8px] md:leading-[19.2px]"></i>
                {props.discountText}
              </div>
              <div
                className={`text-base items-center box-border caret-transparent justify-center leading-6 outline-[3px] px-0 py-2 border-b md:text-[12.8px] md:leading-[19.2px] md:p-[6.4px] ${props.guaranteeVariant}`}
              >
                <i className="text-base italic box-border caret-transparent leading-6 outline-[3px] md:text-[12.8px] md:leading-[19.2px]"></i>
                {props.guaranteeText}
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent col-end-[footer] col-start-[footer] row-end-[footer] row-start-[footer] outline-[3px]">
            <div className="text-[18.4px] bg-[linear-gradient(0deg,rgb(28,161,30),rgb(12,156,14))] box-border caret-transparent leading-[27.6px] outline-[3px] uppercase m-4 p-[15.64px] rounded-lg md:text-2xl md:leading-9 md:px-2 md:py-[12.8px] hover:shadow-[rgb(232,248,193)_0px_4px_10px_0px]">
              <div className="text-[22.08px] bg-clip-text bg-[linear-gradient(rgb(255,255,255),rgb(255,255,255))] box-border caret-transparent leading-[33.12px] outline-[3px] font-impact md:text-2xl md:leading-9">
                Add to cart
              </div>
            </div>
            <img
              src={props.cardsImageSrc}
              alt="Cards"
              className="box-border caret-transparent hidden max-w-[220px] outline-[3px] mb-2 md:inline"
            />
          </div>
          <div className="text-base box-border caret-transparent col-end-[totals] col-start-[totals] row-end-[totals] row-start-[totals] leading-6 outline-[3px] md:text-[14.4px] md:leading-[21.6px]">
            <div className="text-base box-border caret-transparent leading-6 outline-[3px] md:text-[14.4px] md:leading-[21.6px]">
              Total:{" "}
              <s className="text-base box-border caret-transparent leading-6 outline-[3px] decoration-red-600 line-through decoration-2 md:text-[14.4px] md:leading-[21.6px]">
                {props.totalOriginalPrice}
              </s>
              <b className="text-base font-bold box-border caret-transparent leading-6 outline-[3px] md:text-[14.4px] md:leading-[21.6px]">
                {props.totalPrice}
              </b>
            </div>
            <div className="text-base font-extrabold box-border caret-transparent leading-6 outline-[3px] md:text-[14.4px] md:leading-[21.6px]">
              {props.freeShippingText ? (
                <>
                  + 
                  <span
                    className={`${props.freeShippingVariant ?? ""} text-base box-border caret-transparent leading-6 outline-[3px] md:text-[14.4px] md:leading-[21.6px]`}
                  >
                    {props.freeShippingText}
                  </span>
                  {props.shippingText}
                </>
              ) : (
                props.shippingText
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
