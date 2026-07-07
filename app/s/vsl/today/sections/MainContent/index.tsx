import { TodayHeroSection } from "../HeroSection";
import { TodayFeaturedImage } from "../../components/FeaturedImage";

export const TodayMainContent = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] py-5 md:py-10">
      <TodayHeroSection />
      <TodayFeaturedImage />
    </main>
  );
};
