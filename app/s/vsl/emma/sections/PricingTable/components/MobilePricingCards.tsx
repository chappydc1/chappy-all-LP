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

export const MobilePricingCards = (props: MobilePricingCardsProps) => {
  return (
    <div className="box-border block pt-4 px-4 md:hidden">
      {/* 6-Pack Card */}
      <div className="box-border reveal">
        <div className="bg-amber-300 bg-[url('/images/emma/bestvalue.png')] bg-no-repeat bg-contain box-border text-center bg-[position:left_50%] rounded-t-sm">
          <img
            src={props.headerImageSrc}
            className="box-border inline w-full"
          />
        </div>
        <div className="bg-[linear-gradient(rgb(255,247,218),rgb(255,255,255))] box-border rounded-b-sm border border-teal-800">
          <div className="box-border text-center">
            <img
              src={props.bottleSixImageSrc}
              className="box-border inline w-[345px] m-auto pt-6 max-w-full"
            />
            <div className="box-border my-2">
              <span className="text-black text-[55px] font-black box-border leading-[82.5px] font-myriad_pro">
                {props.sixPackPricePerBottle}
              </span>
              <span className="text-black text-2xl font-semibold box-border leading-9 font-myriad_pro">
                /bottle
              </span>
            </div>
            <div className="box-border grid">
              <span className="text-white font-extrabold bg-red-500 box-border block max-w-[315px] text-left w-full m-auto px-6 py-1 font-inter">
                <img src={props.checkImageSrc} className="box-border inline" />
                BIGGEST DISCOUNT
              </span>
              <span className="text-white font-extrabold bg-blue-500 box-border block max-w-[315px] text-left w-full mt-1 mb-auto mx-auto px-6 py-1 font-inter">
                <img src={props.checkImageSrc} className="box-border inline" />
                LEAN BELLY SHAKES RECIPES
              </span>
            </div>
          </div>
          <div className="box-border text-center mt-2">
            <a
              href={props.sixPackHref}
              className="text-blue-600 box-border underline inline-block cta-pulse rounded-sm transition-opacity duration-200 hover:opacity-90 active:scale-95"
            >
              <img src={props.ctaImageSrc} className="box-border inline max-w-full" />
            </a>
            <img src={props.paymentMethodImageSrc} className="box-border inline max-w-full" />
          </div>
          <div className="box-border text-center mt-6 pb-2">
            <span className="text-emerald-950 text-2xl font-semibold box-border leading-9 decoration-red-600 line-through font-inter">
              {props.sixPackOriginalPrice}
            </span>
            <span className="text-emerald-950 text-2xl font-extrabold box-border leading-9 pl-4 font-inter">
              {props.sixPackDiscountedPrice}
            </span>
          </div>
        </div>
      </div>

      {/* 3-Pack Card */}
      <div className="box-border mt-4 reveal delay-100">
        <div className="bg-emerald-200 box-border text-center py-4 rounded-t-sm">
          <span className="text-black text-[28px] font-black box-border block leading-[42px] font-myriad_pro">
            DOCTOR&#39;S CHOICE
          </span>
          <span className="text-black text-xl font-semibold box-border leading-[30px] font-myriad_pro">
            90 Day Supply{" "}
            <span className="font-normal box-border">(3 Bottles)</span>
          </span>
        </div>
        <div className="bg-white box-border rounded-b-sm border border-teal-800">
          <div className="box-border text-center">
            <img
              src={props.bottleThreeImageSrc}
              className="box-border inline w-[302px] m-auto pt-6 max-w-full"
            />
            <div className="box-border my-2">
              <span className="text-black text-[55px] font-black box-border leading-[82.5px] font-myriad_pro">
                {props.threePackPricePerBottle}
              </span>
              <span className="text-black text-2xl font-semibold box-border leading-9 font-myriad_pro">
                /bottle
              </span>
            </div>
            <div className="box-border grid">
              <span className="text-white font-extrabold bg-blue-500 box-border block max-w-[315px] text-left w-full mt-1 mb-auto mx-auto px-6 py-1 font-inter">
                <img src={props.checkImageSrc} className="box-border inline" />
                LEAN BELLY SHAKES RECIPES
              </span>
            </div>
          </div>
          <div className="box-border text-center mt-2">
            <a
              href={props.threePackHref}
              className="text-blue-600 box-border underline inline-block transition-opacity duration-200 hover:opacity-90 active:scale-95"
            >
              <img src={props.ctaImageSrc} className="box-border inline max-w-full" />
            </a>
            <img src={props.paymentMethodImageSrc} className="box-border inline max-w-full" />
          </div>
          <div className="box-border text-center mt-6 pb-2">
            <span className="text-emerald-950 text-2xl font-semibold box-border leading-9 decoration-red-600 line-through font-inter">
              {props.threePackOriginalPrice}
            </span>
            <span className="text-emerald-950 text-2xl font-extrabold box-border leading-9 pl-4 font-inter">
              {props.threePackDiscountedPrice}
            </span>
          </div>
        </div>
      </div>

      {/* 1-Pack Card */}
      <div className="box-border mt-4 reveal delay-200">
        <div className="bg-emerald-200 box-border text-center py-4 rounded-t-sm">
          <span className="text-black text-[28px] font-black box-border block leading-[42px] font-myriad_pro">
            STARTER
          </span>
          <span className="text-black text-xl font-semibold box-border leading-[30px] font-myriad_pro">
            30 Day Supply{" "}
            <span className="font-normal box-border">(1 Bottle)</span>
          </span>
        </div>
        <div className="bg-white box-border rounded-b-sm border border-teal-800">
          <div className="box-border text-center">
            <img
              src={props.bottleOneImageSrc}
              className="box-border inline w-[234px] m-auto pt-6 max-w-full"
            />
            <div className="box-border my-2">
              <span className="text-black text-[55px] font-black box-border leading-[82.5px] font-myriad_pro">
                {props.onePackPricePerBottle}
              </span>
              <span className="text-black text-2xl font-semibold box-border leading-9 font-myriad_pro">
                /bottle
              </span>
            </div>
          </div>
          <div className="box-border text-center">
            <a
              href={props.onePackHref}
              className="text-blue-600 box-border underline inline-block transition-opacity duration-200 hover:opacity-90 active:scale-95"
            >
              <img src={props.ctaImageSrc} className="box-border inline max-w-full" />
            </a>
            <img src={props.paymentMethodImageSrc} className="box-border inline max-w-full" />
          </div>
          <div className="box-border text-center mt-6 pb-2">
            <span className="text-emerald-950 text-2xl font-semibold box-border leading-9 decoration-red-600 line-through font-inter">
              {props.onePackOriginalPrice}
            </span>
            <span className="text-emerald-950 text-2xl font-extrabold box-border leading-9 pl-4 font-inter">
              {props.onePackDiscountedPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
