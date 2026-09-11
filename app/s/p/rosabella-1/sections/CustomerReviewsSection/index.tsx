'use client';
import { useState } from "react"
import copy from "../../copy.json"
import media from "../../media.json"
import { CustomerReviewCard } from "./components/CustomerReviewCard"

export const CustomerReviewsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const { eyebrow, heading, ratingText, ratingLabel, loadMoreText, initial, additional } = copy.customerReviews;

  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-emerald-800 font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-center mb-2.5 font-montserrat">
            {eyebrow}
          </div>
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            {heading}
          </div>
          <div className="items-center box-border caret-transparent flex justify-start outline-[3px] text-left w-full mt-4 md:justify-center">
            <img
              title=""
              src={media.icons.stars}
              alt=""
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[104px] mr-3"
            />
            <div className="text-black text-sm box-border caret-transparent tracking-[-0.32px] leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
              {ratingText} |{" "}
              <span className="text-sm font-medium box-border caret-transparent leading-[18.2px] outline-[3px] md:text-base md:leading-[20.8px]">
                &lsquo;{ratingLabel}&rsquo;
              </span>
            </div>
          </div>

          {/* First reviews */}
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full border-pink-400 mt-6 pt-6 border-t border-solid md:flex-row md:mt-10 md:pt-10">
            {initial.map((review, i) => (
              <>
                {i > 0 && (
                  <div key={`gap-${i}`} className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-5 md:basis-5"></div>
                )}
                <CustomerReviewCard
                  key={review.customerName}
                  rating={review.rating}
                  reviewText={review.reviewText}
                  customerImageUrl={review.customerImageUrl}
                  customerName={review.customerName}
                />
              </>
            ))}
          </div>

          {/* Additional reviews revealed on click */}
          {showMore && (
            <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-6 md:flex-row md:mt-8">
              {additional.map((review, i) => (
                <>
                  {i > 0 && (
                    <div key={`gap-${i}`} className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-5 md:basis-5"></div>
                  )}
                  <CustomerReviewCard
                    key={review.customerName}
                    rating={review.rating}
                    reviewText={review.reviewText}
                    customerImageUrl={review.customerImageUrl}
                    customerName={review.customerName}
                  />
                </>
              ))}
            </div>
          )}

          {/* Load More button */}
          {!showMore && (
            <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-6 md:justify-center md:mt-10">
              <button
                type="button"
                onClick={() => setShowMore(true)}
                className="text-black text-sm font-semibold box-border caret-transparent block tracking-[-0.4px] leading-[15.4px] max-w-full min-h-[auto] min-w-[auto] outline-none text-center underline font-montserrat md:text-xl md:leading-[22px] cursor-pointer bg-transparent border-none p-0"
              >
                {loadMoreText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
