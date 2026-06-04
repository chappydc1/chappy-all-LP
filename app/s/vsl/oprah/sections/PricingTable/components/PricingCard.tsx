export type PricingCardProps = {
  outerClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  title?: string;
  supplyText?: string;
  supplyBottleText?: string;
  bottleImageSrc: string;
  bottleImageClassName?: string;
  price: string;
  originalPrice: string;
  ctaHref: string;
  showBiggestDiscount?: boolean;
  showLeanBellyRecipes?: boolean;
  isBestValue?: boolean;
};

const ctaImageSrc = "/images/oprah/CTA.webp";
const paymentMethodImageSrc = "/images/oprah/paymentmethod.webp";

export const PricingCard = ({
  outerClassName = "",
  headerClassName = "",
  contentClassName = "bg-white",
  title = "GUT SUPERHERO",
  supplyText = "180 Day Supply",
  supplyBottleText = "(6 Bottles)",
  bottleImageSrc,
  bottleImageClassName = "w-[300px]",
  price,
  originalPrice,
  ctaHref,
  showBiggestDiscount = false,
  showLeanBellyRecipes = false,
  isBestValue = false,
}: PricingCardProps) => {
  const hasOfferBar = showBiggestDiscount || showLeanBellyRecipes;

  return (
    <div className={`box-border shrink-0 w-full md:w-1/3 ${outerClassName}`}>
      <article
        className={`relative box-border overflow-hidden rounded-[7px] border border-[#006f68] bg-white font-work_sans shadow-[0_2px_8px_rgba(0,0,0,0.28)] transition-[transform,box-shadow] delay-75 duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:-translate-y-4 hover:shadow-[0_18px_28px_rgba(0,0,0,0.24)] ${
          isBestValue ? "md:-translate-y-8 md:hover:-translate-y-12" : ""
        }`}
      >
        {isBestValue && (
          <div className="absolute left-[-40px] top-[17px] z-20 w-[170px] -rotate-[32deg] bg-[#d92f3a] py-1 text-center text-[17px] font-black leading-none text-white">
            Best Value
          </div>
        )}
        <div
          className={`box-border min-h-[112px] px-4 py-5 text-center ${
            isBestValue
              ? "bg-[linear-gradient(180deg,#f7e7ad_0%,#e8bf3f_100%)]"
              : "bg-[#a8edcf]"
          } ${headerClassName}`}
        >
          <h3
            className="text-[28px] font-black uppercase leading-tight text-black md:text-[31px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="mt-1 text-[18px] font-black leading-tight text-black md:text-[22px]">
            {supplyText} <span className="font-semibold">{supplyBottleText}</span>
          </p>
        </div>
        <div
          className={`box-border px-7 pb-5 pt-7 text-center ${
            isBestValue ? "bg-[linear-gradient(180deg,#fff8dc_0%,#ffffff_100%)]" : contentClassName
          }`}
        >
          <div className="relative mx-auto flex h-[240px] items-center justify-center md:h-[260px]">
            <div className="absolute h-[210px] w-[210px] rounded-full bg-[#f4d7b8] md:h-[230px] md:w-[230px]" />
            <img
              src={bottleImageSrc}
              alt={`${title.replace(/&#39;/g, "'")} bottles`}
              className={`relative z-10 mx-auto box-border max-w-full ${bottleImageClassName}`}
            />
          </div>

          <div className="mt-1 flex items-end justify-center text-black">
            <span className="text-[56px] font-black leading-none md:text-[64px]">{price}</span>
            <span className="pb-1 text-[26px] font-black leading-none">/bottle</span>
          </div>

          <div className={`mx-auto mt-7 max-w-[340px] space-y-1 ${hasOfferBar ? "" : "invisible"}`}>
            <div className={`${showBiggestDiscount ? "bg-[#f43d3d]" : "bg-transparent"} flex items-center justify-start gap-1 py-1 pl-3 pr-2 text-left text-[17px] font-black uppercase leading-none text-white md:text-[18px]`}>
              {showBiggestDiscount && (
                <>
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center border-2 border-black bg-white text-[20px] font-normal leading-none text-black shadow-[1px_1px_0_rgba(0,0,0,0.45)]" aria-hidden="true">✓</span>
                  <span className="whitespace-nowrap">BIGGEST DISCOUNT</span>
                </>
              )}
            </div>
            <div className={`${showLeanBellyRecipes ? "bg-[#3b7ff2]" : "bg-transparent"} flex items-center justify-start gap-1 py-1 pl-3 pr-2 text-left text-[17px] font-black uppercase leading-none text-white md:text-[18px]`}>
              {showLeanBellyRecipes && (
                <>
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center border-2 border-black bg-white text-[20px] font-normal leading-none text-black shadow-[1px_1px_0_rgba(0,0,0,0.45)]" aria-hidden="true">✓</span>
                  <span className="whitespace-nowrap">LEAN BELLY SHAKES RECIPES</span>
                </>
              )}
            </div>
          </div>

          <a href={ctaHref} className="mx-auto mt-5 block max-w-[340px] animate-cta-pulse rounded-[12px] bg-white p-1.5">
            <img src={ctaImageSrc} alt="Order now" className="mx-auto w-full max-w-full" />
          </a>
          <img src={paymentMethodImageSrc} alt="Payment methods" className="mx-auto mt-4 max-w-[220px]" />

          <div className="mt-10 flex items-center justify-center gap-5 text-[26px] font-black text-[#05352e]">
            <span className="relative after:absolute after:left-0 after:top-1/2 after:h-[3px] after:w-full after:-translate-y-1/2 after:-rotate-6 after:bg-red-600">
              {originalPrice}
            </span>
            <span>{price}</span>
          </div>
        </div>
      </article>
    </div>
  );
};
