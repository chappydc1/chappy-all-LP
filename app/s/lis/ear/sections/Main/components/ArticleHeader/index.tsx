import copy from "../../../../copy.json";
import { EarCleanerArticleTitle } from "./components/EarCleanerArticleTitle";
import { EarCleanerArticleAuthor } from "./components/EarCleanerArticleAuthor";
import { EarCleanerComparisonTable } from "./components/ComparisonTable";

export const EarCleanerArticleHeader = () => {
  const { callout_strong, callout_rest, tldr } = copy.article_header;

  return (
    <div className="box-border">
      <div className="box-border w-full z-[999] px-4 md:px-10">
        <div className="box-border max-w-screen-md w-full mx-auto">
          <div className="box-border pt-8 md:pt-[46px]">
            <div className="items-stretch box-border flex flex-col justify-center text-left pb-4 md:items-start animate-fade-in-up">
              <EarCleanerArticleTitle />
              <div className="box-border min-h-[auto] min-w-[auto] pb-5 md:pb-4"></div>
              <EarCleanerArticleAuthor />
              <div className="box-border min-h-[auto] min-w-[auto] pb-5 md:pb-4"></div>
              <div className="italic bg-orange-50 border-l-indigo-950 box-border min-h-[auto] min-w-[auto] w-full mb-2.5 pl-1.5 pr-2 py-2 border-l-[3px] md:mb-3.5 md:p-2.5">
                <div className="text-base not-italic box-border tracking-[-0.32px] leading-6 md:text-[18.4px] md:tracking-[-0.368px] md:leading-[27.6px]">
                  <strong className="font-bold">{callout_strong}</strong>
                  {callout_rest}
                </div>
              </div>
              <EarCleanerComparisonTable />
              <p className="text-sm box-border leading-[21px] min-h-[auto] min-w-[auto] mt-3 md:text-base md:leading-6 md:mt-4">
                <strong className="font-bold">TLDR: </strong>
                {tldr}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
