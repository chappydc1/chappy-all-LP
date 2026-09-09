'use client';
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
  return (
    <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[23px] px-5 md:max-w-[calc(51.5%_-_35px)] md:mt-0 md:px-0">
      <div className="box-border caret-transparent outline-[3px] w-full">
        <div className="items-center box-border caret-transparent flex justify-start outline-[3px] text-left w-full mb-3">
          <img
            title=""
            src="/s/p/rosabella-1/44.svg"
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[104px] mr-3"
          />
          <div className="text-black text-sm box-border caret-transparent tracking-[-0.32px] leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            Rated 4.8 / 5.0 | <span className="text-sm font-medium box-border caret-transparent leading-[18.2px] outline-[3px] md:text-base md:leading-[20.8px]">
              &lsquo;Excellent&rsquo;
            </span>
          </div>
        </div>
        <div className="text-2xl font-semibold box-border caret-transparent tracking-[-1.2px] leading-[31.2px] outline-[3px] text-left mb-3 font-montserrat md:text-[40px] md:leading-[52px]">
          Rosabella Beetroot Capsules
        </div>
        <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
          Supports healthy blood flow and circulation - naturally, every day.
        </div>
        <ProductBenefits />
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full mt-5">
          <img
            title=""
            src="/s/p/rosabella-1/1.svg"
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[13px] mr-2"
          />
          <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            In Stock, ready to ship - arrives by{' '}
            <span className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
              {arrivalDate}
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent h-[69px] outline-[3px] w-full mt-2.5 md:h-[88px]">
          <a
            title="ADD TO CART"
            href="https://get.tryrosabella.com/beetroot/subtxt/of?utm_source=s3"
            className="text-white text-lg font-semibold items-center bg-[#C82084] box-border caret-transparent flex h-full justify-center tracking-[-0.72px] leading-[21.6px] max-w-full outline-[3px] text-center border-[#C82084] px-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid font-montserrat md:text-2xl md:leading-[28.8px] hover:text-[#C82084] hover:bg-transparent"
          >
            ADD TO CART
          </a>
        </div>
        <div className="text-black text-sm box-border caret-transparent leading-[21px] outline-[3px] mt-[15px] font-montserrat md:text-[15px] md:leading-[22.5px]">
          By default your selected package will continue to be delivered
          automatically unless you choose to change or cancel. You can easily
          adjust or cancel anytime.
        </div>
        <CheckoutTrustBadges />
        <div className="bg-stone-200/40 box-border caret-transparent outline-[3px] w-full mt-5 p-[15px] md:p-6">
          <div className="items-center box-border caret-transparent flex outline-[3px] w-full">
            <img
              title=""
              src="/s/p/rosabella-1/7.svg"
              alt=""
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[15px] mr-2"
            />
            <div className="text-base font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-xl md:leading-[26px]">
              90 Day Money Back Guarantee
            </div>
          </div>
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-2 font-montserrat md:text-base md:leading-[20.8px]">
            Love your results within 90 days or get 100% of your money back, no
            questions asked.
          </div>
        </div>
        <ProductAccordion />
      </div>
    </div>
  );
};
