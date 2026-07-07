import { JavyArticleTitle } from "./components/JavyArticleTitle";
import { JavyArticleAuthor } from "./components/JavyArticleAuthor";
import { JavyComparisonTable } from "../../../Main/components/ArticleHeader/components/ComparisonTable";

export const JavyArticleHeader = () => {
  return (
    <div className="box-border">
      <div className="box-border w-full z-[999] px-4 md:px-10">
        <div className="box-border max-w-screen-md w-full mx-auto">
          <div className="box-border pt-8 md:pt-[46px]">
            <div className="items-stretch box-border flex flex-col justify-center text-left pb-4 md:items-start animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <JavyArticleTitle />
              <div className="box-border min-h-[auto] min-w-[auto] pb-5 md:pb-4"></div>
              <JavyArticleAuthor />
              <div className="box-border min-h-[auto] min-w-[auto] pb-5 md:pb-4"></div>
              <div className="italic bg-orange-50 border-l-indigo-950 box-border min-h-[auto] min-w-[auto] w-full mb-2.5 pl-1.5 pr-2 py-2 border-l-[3px] md:mb-3.5 md:p-2.5">
                <div className="text-base not-italic box-border tracking-[-0.32px] leading-6 md:text-[18.4px] md:tracking-[-0.368px] md:leading-[27.6px]">
                  <strong className="text-base font-bold box-border tracking-[-0.32px] leading-6 md:text-[18.4px] md:tracking-[-0.368px] md:leading-[27.6px]">
                    &quot;Read this
                  </strong>
                  {" "}BEFORE your next coffee run!&quot;
                  <br className="text-base box-border tracking-[-0.32px] leading-6 md:text-[18.4px] md:tracking-[-0.368px] md:leading-[27.6px]" />
                </div>
              </div>
              <JavyComparisonTable />
              <p className="text-neutral-500 text-[10px] box-border hidden leading-[15px] mt-5 md:text-xs md:leading-[18px] md:mt-4">
                *Mainstream coffees based on a 16 oz coffee drink, Protein
                drinks based on a 11-12 oz ready-to-drink protein shake.
              </p>
              <p className="text-sm box-border leading-[21px] min-h-[auto] min-w-[auto] mt-3 md:text-base md:leading-6 md:mt-4">
                <strong className="text-sm font-bold box-border leading-[21px] md:text-base md:leading-6">
                  TLDR:{" "}
                </strong>
                Drinking Javvy Protein Coffee has 11+ life changing benefits 👇
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
