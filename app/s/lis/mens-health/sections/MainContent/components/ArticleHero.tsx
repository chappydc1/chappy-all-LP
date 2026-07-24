import { MensHealthArticleHeader } from "./ArticleHeader";
import { MensHealthAuthorInfo } from "./AuthorInfo";

export const MensHealthArticleHero = () => {
  return (
    <div className="relative text-sm items-center self-stretch box-border caret-transparent flex flex-row shrink-0 justify-center leading-[22.4px] min-h-px outline-[3px] mr-px pl-px md:text-base md:flex-col md:leading-[25.6px] md:mr-[15px] md:pl-[15px]">
      <div className="relative text-sm items-center self-auto box-border caret-transparent flex basis-0 flex-col grow shrink justify-center leading-[22.4px] min-h-px min-w-0 outline-[3px] mb-[27px] pl-4 pr-[15px] pb-[13px] md:text-base md:self-stretch md:basis-auto md:grow-0 md:shrink-0 md:leading-[25.6px] md:min-w-[auto] md:mb-0 md:px-0">
        <MensHealthArticleHeader />
        <MensHealthAuthorInfo />
      </div>
    </div>
  );
};
