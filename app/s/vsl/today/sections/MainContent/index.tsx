import { HeroSection } from "../HeroSection";
import { FeaturedImage } from "../../components/FeaturedImage";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] py-5 md:py-10">
      <HeroSection />
      <FeaturedImage />
    </main>
  );
};
