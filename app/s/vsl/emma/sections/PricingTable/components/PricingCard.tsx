export type PricingCardProps = {
  outerClassName: string;
  headerClassName: string;
  contentClassName: string;
  title?: string;
  supplyText?: string;
  supplyBottleText?: string;
  headerImageSrc?: string;
  bottleImageSrc: string;
  bottleImageClassName: string;
  price: string;
  originalPrice: string;
  ctaHref: string;
  showBiggestDiscount?: boolean;
  showLeanBellyRecipes?: boolean;
  isBestValue?: boolean;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div
      className={`box-border shrink-0 max-w-full w-full md:w-[33.3333%] ${props.outerClassName} reveal`}
    >
      <div className="shadow-[rgba(0,0,0,0.2)_0px_0px_5px_0px] box-border border border-teal-800 overflow-hidden rounded-[10px] border-solid transition-transform duration-300 hover:-translate-y-1 hover:shadow-[rgba(0,0,0,0.3)_0px_8px_24px_0px]">
        <div className={`box-border ${props.headerClassName}`}>
          {props.isBestValue ? (
            <div className="bg-amber-300 bg-[url('https://gutrenewalformula.com/pages/er-vslyt-inter/assets/images/bestvalue.png')] bg-no-repeat bg-contain box-border text-center bg-[position:left_50%] rounded-t-sm">
              <img
                src="https://c.animaapp.com/mnsem251Wpf2gA/assets/Header.webp"
                className="box-border inline w-full"
              />
            </div>
          ) : (
            <>
              <span className="text-black text-[28px] font-black box-border block leading-[42px] font-myriad_pro">
                {props.title}
              </span>
              <span className="text-black text-xl font-semibold box-border leading-[30px] font-myriad_pro">
                {props.supplyText}{" "}
                <span className="font-normal box-border">
                  {props.supplyBottleText}
                </span>
              </span>
            </>
          )}
        </div>
        <div className={`box-border rounded-b-sm ${props.contentClassName}`}>
          <div className="box-border text-center">
            <img
              src={props.bottleImageSrc}
              className={`box-border inline m-auto pt-6 transition-transform duration-500 hover:scale-105 ${props.bottleImageClassName}`}
            />
            <div className="box-border my-2">
              <span className="text-black text-[55px] font-black box-border leading-[82.5px] font-myriad_pro">
                {props.price}
              </span>
              <span className="text-black text-2xl font-semibold box-border leading-9 font-myriad_pro">
                /bottle
              </span>
            </div>
            {(props.showBiggestDiscount || props.showLeanBellyRecipes) && (
              <div className="box-border grid">
                {props.showBiggestDiscount && (
                  <span className="text-white font-extrabold box-border block max-w-[315px] text-left w-full px-6 py-1 font-inter bg-red-500 m-auto">
                    <img
                      src="https://c.animaapp.com/mnsem251Wpf2gA/assets/check-Copy.webp"
                      className="box-border inline"
                    />
                    BIGGEST DISCOUNT
                  </span>
                )}
                {props.showLeanBellyRecipes && (
                  <span className="text-white font-extrabold bg-blue-500 box-border block max-w-[315px] text-left w-full mt-1 mb-auto mx-auto px-6 py-1 font-inter">
                    <img
                      src="https://c.animaapp.com/mnsem251Wpf2gA/assets/check-Copy.webp"
                      className="box-border inline"
                    />
                    LEAN BELLY SHAKES RECIPES
                  </span>
                )}
              </div>
            )}
          </div>
          <div className={`box-border text-center ${props.isBestValue ? "mt-2" : props.showLeanBellyRecipes ? "mt-2" : ""}`}>
            <a
              href={props.ctaHref}
              className="text-blue-600 box-border underline inline-block cta-pulse rounded-sm transition-opacity duration-200 hover:opacity-90 active:scale-95"
            >
              <img
                src="https://c.animaapp.com/mnsem251Wpf2gA/assets/CTA.webp"
                className="box-border inline"
              />
            </a>
            <img
              src="https://c.animaapp.com/mnsem251Wpf2gA/assets/paymentmethod.webp"
              className="box-border inline"
            />
          </div>
          <div className="box-border text-center mt-6 pb-2">
            <span className="text-emerald-950 text-2xl font-semibold box-border leading-9 decoration-red-600 line-through font-inter">
              {props.originalPrice}
            </span>
            <span className="text-emerald-950 text-2xl font-extrabold box-border leading-9 pl-4 font-inter">
              {props.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
