// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";

export const ProductReviewCard = () => {
  return (
    <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] outline-[3px] w-min ml-[7px] p-px md:basis-0">
      <div className="box-border caret-transparent flex flex-col outline-[3px] w-[200px] border mt-2.5 pt-3.5 pb-3 px-2.5 rounded-[15px] border-solid border-black/30 md:w-[245px]">
        <div className="text-black text-sm font-bold box-border caret-transparent basis-[0%] shrink-0 leading-6 min-h-0 min-w-0 outline-[3px] text-center mt-[3px] px-[5px] py-px rounded-[1px] font-montserrat md:text-[19px] md:min-h-[auto] md:min-w-[auto]">
          {adv.productCard.name}
        </div>
        <div className="items-center self-end box-border caret-transparent flex justify-center min-h-0 min-w-0 outline-[3px] w-full pt-[5px] px-2.5 md:min-h-[auto] md:min-w-[auto]">
          <img
            title=""
            src={media.productCard.productImage}
            href=""
            alt=""
            className="text-black items-start box-border caret-transparent flex basis-[0%] shrink-0 h-[160.484px] justify-start max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[108px] mt-[7px] pt-[5px] rounded-[1px] md:h-[206.328px] md:min-h-[auto] md:min-w-[auto] md:w-[110px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full mt-3 px-[5px] py-3 md:min-h-[auto] md:min-w-[auto]">
          <a
            title="L1"
            loop="none"
            href={adv.meta.ctaUrl}
            className="text-black text-sm font-bold bg-yellow-400 box-border caret-transparent inline-block basis-[0%] shrink-0 leading-[14px] max-w-full outline-[3px] text-center px-2.5 py-3.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-[15px] md:leading-[15px] md:px-5 md:py-[15px]"
          >
            {adv.productCard.ctaText}
          </a>
        </div>
        <div className="text-[32px] font-bold box-border caret-transparent leading-8 min-h-0 min-w-0 outline-[3px] mt-[15px] font-helvetica md:min-h-[auto] md:min-w-[auto]">
          <div className="text-base box-border caret-transparent leading-4 outline-[3px] text-center px-[5px] font-montserrat md:text-lg md:leading-[18px]">
            {adv.productCard.reviewsHeading}
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] text-left w-full px-[5px] py-3 md:min-h-[auto] md:min-w-[auto]">
          <img
            title=""
            src={media.productCard.stars}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[15px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[73px] md:h-4 md:min-h-[auto] md:min-w-[auto] md:w-[83px]"
          />
          <div className="text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] text-right p-px font-montserrat md:min-h-[auto] md:min-w-[auto]">
            {adv.productCard.rating}
          </div>
        </div>
        <div className="text-neutral-400 text-xs font-light box-border caret-transparent leading-3 min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-[13px] md:leading-[13px] md:min-h-[auto] md:min-w-[auto]">
          {adv.productCard.ratingsCount}
        </div>
        <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full pt-3 pb-[5px] px-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            5 Star
          </div>
          <img
            title=""
            src={media.productCard.star5}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[17px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[90px] pl-2.5 md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:pl-[21px]"
          />
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            90%
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            4 Star
          </div>
          <img
            title=""
            src={media.productCard.star4}
            href=""
            alt=""
            className="text-black box-border caret-transparent basis-[0%] shrink-0 h-[17px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[90px] pl-1 pr-[5px] rounded-[1px] md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:pl-[9px] md:pr-0"
          />
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            7%
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            3 Star
          </div>
          <img
            title=""
            src={media.productCard.star3}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[17px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[90px] pl-1 pr-[5px] md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:pl-[9px] md:pr-0"
          />
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            2%
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            2 Star
          </div>
          <img
            title=""
            src={media.productCard.star2}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[17px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[90px] pl-1 pr-[5px] md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:pl-2.5 md:pr-0"
          />
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            0%
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            1 Star
          </div>
          <img
            title=""
            src={media.productCard.star1}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[17px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[90px] pl-1 pr-[5px] md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:pl-[7px] md:pr-0"
          />
          <div className="text-green-600 text-sm font-bold box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            1%
          </div>
        </div>
        <div className="text-base font-bold box-border caret-transparent leading-4 min-h-0 min-w-0 outline-[3px] text-center mt-[15px] pl-[5px] pb-[5px] font-montserrat md:text-lg md:leading-[18px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-base box-border caret-transparent leading-4 outline-[3px] md:text-lg md:leading-[18px]">
            {adv.productCard.byFeatureHeading}
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            Price
          </div>
          <div className="box-border caret-transparent flex justify-end min-h-0 min-w-0 outline-[3px] w-full px-2.5 md:min-h-[auto] md:min-w-[auto]">
            <img
              title=""
              src={media.productCard.stars}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[15px] justify-start max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[70px] md:min-h-[auto] md:min-w-[auto] md:w-[85px]"
            />
          </div>
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-helvetica md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            5.0
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            Effect
          </div>
          <div className="box-border caret-transparent flex justify-end min-h-0 min-w-0 outline-[3px] w-full px-2.5 md:min-h-[auto] md:min-w-[auto]">
            <img
              title=""
              src={media.productCard.stars}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[15px] justify-start max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[70px] md:min-h-[auto] md:min-w-[auto] md:w-[85px]"
            />
          </div>
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-helvetica md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            5.0
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] w-full p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            Comfort
          </div>
          <div className="box-border caret-transparent flex justify-end min-h-0 min-w-0 outline-[3px] w-full pl-[5px] pr-2.5 md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
            <img
              title=""
              src={media.productCard.stars}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[15px] justify-start max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[70px] md:min-h-[auto] md:min-w-[auto] md:w-[85px]"
            />
          </div>
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-helvetica md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            5.0
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between min-h-0 min-w-0 outline-[3px] text-right w-full mb-[5px] p-[5px] md:min-h-[auto] md:min-w-[auto]">
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            Quality
          </div>
          <div className="box-border caret-transparent flex justify-end min-h-0 min-w-0 outline-[3px] w-full px-2.5 md:min-h-[auto] md:min-w-[auto]">
            <img
              title=""
              src={media.productCard.stars}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[15px] justify-start max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[70px] md:min-h-[auto] md:min-w-[auto] md:w-[85px]"
            />
          </div>
          <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 outline-[3px] p-px font-helvetica md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            4.8
          </div>
        </div>
      </div>
    </div>
  );
};
