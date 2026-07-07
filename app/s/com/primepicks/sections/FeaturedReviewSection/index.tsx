import { PrimepicksFeaturedReviewCard } from "./components/PrimepicksFeaturedReviewCard";

export const PrimepicksFeaturedReviewSection = () => {
  return (
    <section className="box-border caret-transparent mt-6 pb-4 md:mt-8 md:pb-20">
      <div className="box-border caret-transparent max-w-[1000px] mx-auto px-4 md:px-0">
        <PrimepicksFeaturedReviewCard />
      </div>
    </section>
  );
};
