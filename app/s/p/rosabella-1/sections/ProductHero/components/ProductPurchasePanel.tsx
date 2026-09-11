'use client';
import copy from "../../../copy.json"
import media from "../../../media.json"
import { ProductBenefits } from "./ProductBenefits"
import { CheckoutTrustBadges } from "./CheckoutTrustBadges"
import { ProductAccordion } from "./ProductAccordion"

function getArrivalDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export const ProductPurchasePanel = () => {
  const arrivalDate = getArrivalDate();
  const { ratingText, ratingLabel, productName, tagline, stockText, ctaText, ctaHref, subscriptionNote, guarantee } = copy.productHero;
  return (
    <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[23px] px-5 md:max-w-[calc(51.5%_-_35px)] md:mt-0 md:px-0">
      <div className="box-border caret-transparent outline-[3px] w-full">
        <div className="items-center box-border caret-transparent flex justify-start outline-[3px] text-left w-full mb-3">
          <img
            title=""
            src={media.icons.stars}
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[104px] mr-3"
          />
          <div className="text-black text-sm box-border caret-transparent tracking-[-0.32px] leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            {ratingText} | <span className="text-sm font-medium box-border caret-transparent leading-[18.2px] outline-[3px] md:text-base md:leading-[20.8px]">
              &lsquo;{ratingLabel}&rsquo;
            </span>
          </div>
        </div>
        <div className="text-2xl font-semibold box-border caret-transparent tracking-[-1.2px] leading-[31.2px] outline-[3px] text-left mb-3 font-montserrat md:text-[40px] md:leading-[52px]">
          {productName}
        </div>
        <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
          {tagline}
        </div>
        <ProductBenefits />
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full mt-5">
          <img
            title=""
            src={media.icons.stock}
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[13px] mr-2"
          />
          <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            {stockText}{' '}
            <span className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
              {arrivalDate}
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent h-[69px] outline-[3px] w-full mt-2.5 md:h-[88px]">
          <a
            title={ctaText}
            href={ctaHref}
            className="text-white text-lg font-semibold items-center bg-[#C82084] box-border caret-transparent flex h-full justify-center tracking-[-0.72px] leading-[21.6px] max-w-full outline-[3px] text-center border-[#C82084] px-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid font-montserrat md:text-2xl md:leading-[28.8px] hover:text-[#C82084] hover:bg-transparent"
          >
            {ctaText}
          </a>
        </div>
        <div className="text-black text-sm box-border caret-transparent leading-[21px] outline-[3px] mt-[15px] font-montserrat md:text-[15px] md:leading-[22.5px]">
          {subscriptionNote}
        </div>
        <CheckoutTrustBadges />
        <div className="bg-stone-200/40 box-border caret-transparent outline-[3px] w-full mt-5 p-[15px] md:p-6">
          <div className="items-center box-border caret-transparent flex outline-[3px] w-full">
            <img
              title=""
              src={media.icons.guarantee}
              alt=""
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[15px] mr-2"
            />
            <div className="text-base font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-xl md:leading-[26px]">
              {guarantee.title}
            </div>
          </div>
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-2 font-montserrat md:text-base md:leading-[20.8px]">
            {guarantee.text}
          </div>
        </div>
        <ProductAccordion />
      </div>
    </div>
  );
};
