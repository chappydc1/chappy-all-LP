import { PrimepicksHeroText } from "./PrimepicksHeroText";
import { PrimepicksArticlePreview } from "./PrimepicksArticlePreview";

export const PrimepicksHeroContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1000px] mx-auto">
      <div className="bg-white box-border caret-transparent mb-0 p-0 rounded-none border-0 border-none md:mb-[35px] md:p-6 md:rounded-[10px]">
        <div className="box-border caret-transparent grid">
          <div className="bg-slate-800 bg-[url('/assets/aGVyb193ZWIuanBn.jpg')] bg-size-[auto,cover] box-border caret-transparent col-start-1 row-start-1 min-h-[auto] min-w-[auto] bg-[position:0%,50%_0%,50%]"></div>
          <PrimepicksHeroText />
        </div>
        <PrimepicksArticlePreview variantClass="block md:hidden" />
        <PrimepicksArticlePreview variantClass="hidden md:block" />
      </div>
    </div>
  );
};
