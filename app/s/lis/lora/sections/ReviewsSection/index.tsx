import { LoraReviewsSummary } from "./components/LoraReviewsSummary";

export const LoraReviewsSection = () => {
  return (
    <div className="bg-white box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent grow max-w-full outline-[3px]">
        <span className="bg-neutral-200 box-border caret-transparent block outline-[3px]">
          <LoraReviewsSummary />
        </span>
      </div>
    </div>
  );
};
