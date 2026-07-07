"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { NuzPainPointsGrid } from "./components/PainPointsGrid";
import { NuzRecommendedSection } from "./components/RecommendedSection";

export const NuzPainPointsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`bg-white box-border caret-transparent pt-[33px] pb-5 md:pt-[59px] md:pb-[70px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1200px]">
        <div className="block md:hidden mb-4">
          <NuzPainPointsGrid />
        </div>
        <NuzRecommendedSection />
      </div>
    </div>
  );
};
