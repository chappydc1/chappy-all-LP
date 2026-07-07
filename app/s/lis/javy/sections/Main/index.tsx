import { JavyArticleHeader } from "../Main/components/ArticleHeader";
import { JavyArticleSection } from "../Main/components/ArticleSection";
import { JavyOfferSection } from "../Main/components/OfferSection";
import { JavyStickyBuyBar } from "../Main/components/StickyBuyBar";

export const JavyMain = () => {
  return (
    <main className="box-border caret-transparent">
      <div className="box-border caret-transparent hidden">
        <div className="sticky text-white text-xs font-bold items-stretch bg-black box-border caret-transparent flex flex-col justify-center leading-[18px] min-h-12 md:text-base md:leading-6">
          <div className="text-xs box-border caret-transparent leading-[18px] px-4 md:text-base md:leading-6 md:px-10">
            <div className="text-xs box-border caret-transparent leading-[18px] max-w-screen-md w-full mx-auto md:text-base md:leading-6">
              <div className="text-xs font-normal items-center box-border caret-transparent gap-x-[0.8px] flex basis-[0%] grow justify-center leading-[18px] gap-y-2 md:text-base md:gap-x-2 md:leading-6">
                <div className="text-xs box-border caret-transparent leading-[18px] md:text-base md:leading-6">
                  <span className="text-xs font-extrabold box-border caret-transparent leading-[18px] md:text-base md:leading-6">
                    <strong className="text-xs font-bold box-border caret-transparent leading-[18px] md:text-base md:leading-6">
                      🏷️
                    </strong>
                    CYBER MONDAY SALE UP TO 59% -
                  </span>
                  <br className="text-xs box-border caret-transparent leading-[18px] md:text-base md:leading-6" />
                </div>
                <div className="text-xs items-center box-border caret-transparent gap-x-[2.4px] flex leading-[18px] md:text-base md:gap-x-2 md:leading-6">
                  <div className="text-xs font-extrabold box-border caret-transparent leading-[18px] px-[2.4px] md:text-base md:leading-6 md:px-0">
                    19:11:16
                  </div>
                  <div className="text-xs box-border caret-transparent hidden leading-[18px] md:text-base md:leading-6 before:accent-auto before:caret-transparent before:text-white before:table before:text-xs before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-filson_pro before:md:text-base before:md:leading-6 after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-xs after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[18px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-filson_pro after:md:text-base after:md:leading-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JavyArticleHeader />
      <JavyArticleSection />
      <JavyOfferSection />
      <JavyStickyBuyBar />
    </main>
  );
};
