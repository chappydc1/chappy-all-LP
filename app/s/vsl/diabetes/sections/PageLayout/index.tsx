import { DiabetesHeader } from "../Header";
import { DiabetesNewsTicker } from "../NewsTicker";
import { DiabetesHeroSection } from "../HeroSection";

export const DiabetesPageLayout = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] w-full mx-auto font-nunito_sans">
      <DiabetesHeader />
      <DiabetesNewsTicker />
      <DiabetesHeroSection />
    </main>
  );
};
