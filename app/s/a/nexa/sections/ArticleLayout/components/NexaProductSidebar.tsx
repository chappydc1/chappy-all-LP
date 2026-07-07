import { NexaProductReviewCard } from "./NexaProductReviewCard";

export const NexaProductSidebar = () => {
  return (
    <div className="items-stretch box-border caret-transparent hidden flex-wrap justify-start max-w-full min-h-0 min-w-0 outline-[3px] p-px md:flex md:flex-nowrap md:min-h-[auto] md:min-w-[auto]">
      <NexaProductReviewCard />
    </div>
  );
};
