import { DerilaArticleContent } from "../ArticleLayout/components/ArticleContent";
import { DerilaSidebarCta } from "../ArticleLayout/components/SidebarCta";

export const DerilaArticleLayout = () => {
  return (
    <div className="text-zinc-800 text-lg box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-[15px] md:max-w-[1023px]">
      <div className="items-start box-border caret-transparent flex justify-center ml-[-15px] mr-[-15px] outline-[3px]">
        <DerilaArticleContent />
        <DerilaSidebarCta />
      </div>
    </div>
  );
};
