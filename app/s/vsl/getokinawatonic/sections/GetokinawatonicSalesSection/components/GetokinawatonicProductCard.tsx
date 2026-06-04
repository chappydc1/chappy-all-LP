export type GetokinawatonicProductCardProps = {
  containerVariantClass: string;
  title: string;
  supplyText: string;
  productImageUrl: string;
  productImageAlt: string;
  priceContainerVariantClass: string;
  pricePerBottle: string;
  promoImageUrl?: string;
  promoImageAlt?: string;
  href: string;
  buttonImageVariantClass: string;
  originalPrice: string;
  totalPrice: string;
  guaranteeText: string;
  paymentImageUrl: string;
  paymentImageAlt: string;
};

export const GetokinawatonicProductCard = (props: GetokinawatonicProductCardProps) => {
  return (
    <div
      className={`text-neutral-600 bg-[linear-gradient(rgb(255,255,255)_0%,rgb(230,231,232)_100%)] shadow-[rgba(0,0,0,0.2)_1px_4px_16px_0px] box-border caret-transparent outline-[3px] text-center pt-[30px] pb-[35px] px-[35px] border-solid font-blinkmacsystemfont ${props.containerVariantClass}`}
    >
      <h1 className="text-zinc-800 text-3xl font-bold box-border caret-transparent tracking-[-0.5px] leading-[33px] outline-[3px] capitalize mt-2.5 font-poppins md:text-[40px] md:leading-[44px]">
        {props.title}
      </h1>
      <h3 className="text-emerald-950 text-[26px] font-medium box-border caret-transparent leading-[33.8px] outline-[3px] capitalize mt-[5px] mb-[5%] font-poppins md:text-3xl md:leading-[39px]">
        {props.supplyText}
      </h3>

      <img
        src={props.productImageUrl}
        alt={props.productImageAlt}
        className="box-border caret-transparent max-w-full outline-[3px] mx-auto"
      />

      <div
        className={`box-border caret-transparent flex justify-center outline-[3px] ${props.priceContainerVariantClass}`}
      >
        <h1 className="text-emerald-950 text-[53px] font-bold box-border caret-transparent leading-[58.3px] min-h-0 min-w-0 outline-[3px] pr-2.5 font-oswald md:text-[84px] md:leading-[92.4px] md:min-h-[auto] md:min-w-[auto]">
          {props.pricePerBottle}
        </h1>
        <h4 className="text-teal-900 text-lg box-border caret-transparent leading-[30px] min-h-0 min-w-0 outline-[3px] text-left mt-[23px] mb-2.5 font-oswald md:text-3xl md:min-h-[auto] md:min-w-[auto]">
          per{" "}
          <br className="text-lg box-border caret-transparent outline-[3px] md:text-3xl" />
          bottle
        </h4>
      </div>

      {props.promoImageUrl ? (
        <img
          src={props.promoImageUrl}
          alt={props.promoImageAlt || "promo"}
          className="box-border caret-transparent max-w-full outline-[3px] mb-0 mx-auto md:mb-2.5"
        />
      ) : null}

      <a
        href={props.href}
        className="text-teal-500 box-border caret-transparent outline-[3px] hover:outline-0 hover:underline"
      >
        <img
          src="/images/getokinawatonic/buy-now.svg"
          alt="img"
          className={`shadow-[rgba(0,0,0,0.4)_1px_4px_4px_0px] box-border caret-transparent max-w-full outline-[3px] w-[88%] mt-0 mx-auto rounded-[50px] md:w-[90%] md:mt-[5px] ${props.buttonImageVariantClass}`}
        />
      </a>

      <h4 className="text-neutral-800/80 text-lg font-bold box-border caret-transparent leading-[19.8px] outline-[3px] mt-[30px] font-ibm_plex_sans">
        <span className="text-red-600 font-normal box-border caret-transparent outline-[3px] line-through">
          <span className="text-black box-border caret-transparent outline-[3px]">
            {props.originalPrice}
          </span>
        </span>{" "}
        {props.totalPrice}
      </h4>

      <h5 className="text-neutral-800/80 text-[19px] font-semibold box-border caret-transparent leading-[20.9px] outline-[3px] my-2.5 font-poppins">
        {props.guaranteeText}
      </h5>

      <img
        src={props.paymentImageUrl}
        alt={props.paymentImageAlt}
        className="box-border caret-transparent max-w-full outline-[3px] mb-0 mx-auto md:mb-2.5"
      />
    </div>
  );
};
