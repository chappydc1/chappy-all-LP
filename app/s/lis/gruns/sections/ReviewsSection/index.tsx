import { GrunsReviewsSummary } from "../ReviewsSection/components/ReviewsSummary";

export const GrunsReviewsSection = () => {
  return (
    <div className="bg-white box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent grow max-w-full outline-[3px]">
        <span className="bg-neutral-200 box-border caret-transparent block outline-[3px]">
          <GrunsReviewsSummary />
        </span>
      </div>
    </div>
  );
};
