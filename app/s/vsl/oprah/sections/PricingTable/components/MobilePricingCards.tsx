export type MobilePricingCardsProps = {
  headerImageSrc: string;
  bottleSixImageSrc: string;
  bottleThreeImageSrc: string;
  bottleOneImageSrc: string;
  checkImageSrc: string;
  ctaImageSrc: string;
  paymentMethodImageSrc: string;
  sixPackHref: string;
  threePackHref: string;
  onePackHref: string;
  sixPackPricePerBottle: string;
  threePackPricePerBottle: string;
  onePackPricePerBottle: string;
  sixPackOriginalPrice: string;
  sixPackDiscountedPrice: string;
  threePackOriginalPrice: string;
  threePackDiscountedPrice: string;
  onePackOriginalPrice: string;
  onePackDiscountedPrice: string;
};

type MobileOfferProps = {
  title: string;
  bottleImageSrc: string;
  href: string;
  pricePerBottle: string;
  originalPrice: string;
  discountedPrice: string;
  checkImageSrc: string;
  ctaImageSrc: string;
  paymentMethodImageSrc: string;
  featured?: boolean;
};

const MobileOffer = ({
  title,
  bottleImageSrc,
  href,
  pricePerBottle,
  originalPrice,
  discountedPrice,
  checkImageSrc,
  ctaImageSrc,
  paymentMethodImageSrc,
  featured = false,
}: MobileOfferProps) => (
  <article className={`box-border overflow-hidden rounded-md border-2 bg-white shadow-lg transition-[transform,box-shadow] delay-75 duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3 hover:shadow-2xl ${featured ? "border-emerald-800" : "border-emerald-200"}`}>
    <div className={`${featured ? "bg-emerald-800 text-white" : "bg-emerald-200 text-emerald-950"} py-3 text-center font-work_sans`}>
      <h3 className="text-2xl font-black uppercase leading-tight">{title}</h3>
    </div>
    <div className="box-border px-4 py-5 text-center font-work_sans">
      <img src={bottleImageSrc} alt={`${title} bottles`} className="mx-auto max-h-[180px] max-w-full" />
      <div className="mt-3 flex items-center justify-center gap-2 text-left text-sm font-bold text-emerald-950">
        <img src={checkImageSrc} alt="" className="h-5 w-5" />
        Free Shipping + Bonus Gifts
      </div>
      <div className="mt-4 text-emerald-950">
        <span className="text-lg font-bold">Only </span>
        <span className="text-5xl font-black">{pricePerBottle}</span>
        <span className="font-bold"> / bottle</span>
      </div>
      <p className="mt-2 text-sm text-zinc-600">
        <span className="line-through">{originalPrice}</span> Today: <b>{discountedPrice}</b>
      </p>
      <a href={href} className="mt-4 block animate-cta-pulse rounded-[12px] bg-white p-1.5">
        <img src={ctaImageSrc} alt="Buy now" className="mx-auto max-w-full" />
      </a>
      <img src={paymentMethodImageSrc} alt="Payment methods" className="mx-auto mt-3 max-w-[260px]" />
    </div>
  </article>
);

export const MobilePricingCards = (props: MobilePricingCardsProps) => {
  return (
    <div className="box-border block px-3 py-6 md:hidden">
      <img src={props.headerImageSrc} alt="Choose your package" className="mx-auto mb-4 max-w-full" />
      <div className="box-border flex flex-col gap-5">
        <MobileOffer
          title="Best Value"
          bottleImageSrc={props.bottleSixImageSrc}
          href={props.sixPackHref}
          pricePerBottle={props.sixPackPricePerBottle}
          originalPrice={props.sixPackOriginalPrice}
          discountedPrice={props.sixPackDiscountedPrice}
          checkImageSrc={props.checkImageSrc}
          ctaImageSrc={props.ctaImageSrc}
          paymentMethodImageSrc={props.paymentMethodImageSrc}
          featured
        />
        <MobileOffer
          title="Doctor's Choice"
          bottleImageSrc={props.bottleThreeImageSrc}
          href={props.threePackHref}
          pricePerBottle={props.threePackPricePerBottle}
          originalPrice={props.threePackOriginalPrice}
          discountedPrice={props.threePackDiscountedPrice}
          checkImageSrc={props.checkImageSrc}
          ctaImageSrc={props.ctaImageSrc}
          paymentMethodImageSrc={props.paymentMethodImageSrc}
        />
        <MobileOffer
          title="Starter"
          bottleImageSrc={props.bottleOneImageSrc}
          href={props.onePackHref}
          pricePerBottle={props.onePackPricePerBottle}
          originalPrice={props.onePackOriginalPrice}
          discountedPrice={props.onePackDiscountedPrice}
          checkImageSrc={props.checkImageSrc}
          ctaImageSrc={props.ctaImageSrc}
          paymentMethodImageSrc={props.paymentMethodImageSrc}
        />
      </div>
    </div>
  );
};
