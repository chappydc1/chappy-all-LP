import { AbcNewsArticleContent } from "./AbcNewsArticleContent";
import { AbcNewsArticleSidebar } from "./AbcNewsArticleSidebar";

export const AbcNewsArticleLayout = () => {
  return (
    <div className="items-start bg-white box-border caret-transparent flex flex-wrap justify-center outline-[3px] mx-[6.25%]">
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(12,1fr)] max-w-[1248px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:gap-x-6 md:grid-cols-[repeat(24,1fr)]">
        <AbcNewsArticleContent />
        <AbcNewsArticleSidebar />
      </div>
    </div>
  );
};
