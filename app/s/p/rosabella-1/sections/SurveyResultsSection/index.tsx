import { SurveyStats } from "./components/SurveyStats"
import { MoneyBackGuarantee } from "./components/MoneyBackGuarantee"

export const SurveyResultsSection = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-[30px] md:flex-nowrap md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="bg-stone-200 box-border caret-transparent outline-[3px] w-full pt-0 pb-[30px] px-0 rounded-bl rounded-br rounded-tl rounded-tr md:pt-[60px] md:pb-[50px] md:px-[45px]">
          <div className="box-border caret-transparent flex flex-col-reverse outline-[3px] w-full md:flex-row">
            <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full">
              <SurveyStats />
            </div>
            <div className="box-border caret-transparent basis-5 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[11px] md:basis-[11px]"></div>
            <div className="box-border caret-transparent basis-full shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[415px] md:w-[415px]">
              <img
                title=""
                src="/lp-images-files-videos-fonts/p/rosabella-1/33.webp"
                alt=""
                className="text-black box-border caret-transparent inline max-w-full outline-[3px] rounded-tl rounded-tr md:rounded-t-none"
              />
            </div>
          </div>
          <MoneyBackGuarantee />
        </div>
      </div>
    </div>
  );
};
