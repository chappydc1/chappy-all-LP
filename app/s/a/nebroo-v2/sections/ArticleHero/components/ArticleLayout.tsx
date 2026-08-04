import { ArticleContent } from "./ArticleContent";
import { SidebarOffer } from "./SidebarOffer";

export const ArticleLayout = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] mt-1.5 md:flex-nowrap md:mt-5">
      <ArticleContent />
      <SidebarOffer />
    </div>
  );
};
