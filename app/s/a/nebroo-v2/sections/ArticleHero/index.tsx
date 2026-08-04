import { AlertBanner } from "./components/AlertBanner";
import { ArticleLayout } from "./components/ArticleLayout";

export const ArticleHero = () => {
  return (
    <div className="items-center self-center box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] pt-[5px] pb-[15px] px-0 md:flex-nowrap md:px-2.5">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1200px] min-h-[25px] outline-[3px] w-min pt-0 pb-2.5 px-2.5 md:basis-0 md:pt-2.5">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-[32px] font-bold box-border caret-transparent leading-[48px] outline-[3px] mt-[15px] font-helvetica"></div>
          <AlertBanner />
          <ArticleLayout />
        </div>
      </div>
    </div>
  );
};
