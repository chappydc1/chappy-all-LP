import { HeroText } from "../../HeroSection/components/HeroText";
import { ArticlePreview } from "../../HeroSection/components/ArticlePreview";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1000px] mx-auto">
      <div className="bg-white box-border caret-transparent mb-0 p-0 rounded-none border-0 border-none border-black md:border md:border-neutral-200 md:mb-[35px] md:p-6 md:rounded-[10px] md:border-solid">
        <div className="box-border caret-transparent grid">
          <div className="bg-neutral-300 bg-[url('/assets/aGVyb193ZWIuanBn.jpg')] bg-size-[auto,cover] box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] bg-[position:0%,50%_0%,50%]"></div>
          <HeroText />
        </div>
        <ArticlePreview variantClass="block md:hidden" />
        <ArticlePreview variantClass="hidden md:block" />
      </div>
    </div>
  );
};
