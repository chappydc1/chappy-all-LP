import { HeroImage } from "../HeroSection/components/HeroImage";
import { HeroHeadline } from "../HeroSection/components/HeroHeadline";
import { HeroDescription } from "../HeroSection/components/HeroDescription";
import { HeroFeatureList } from "../HeroSection/components/HeroFeatureList";
import { HeroCTA } from "../HeroSection/components/HeroCTA";
import { HeroProductImage } from "../HeroSection/components/HeroProductImage";

export const HeroSection = () => {
  return (
    <div className="items-stretch bg-[url('https://assets.checkoutchamp.com/0415d360-e677-11ee-a7b2-eb6e26f0128b/1739335664233_BG_Desktop_v1.webp')] bg-no-repeat bg-cover box-border caret-transparent flex basis-[0%] shrink-0 flex-wrap justify-start max-w-full bg-[position:50%_top] px-0 py-px rounded-[1px] md:flex-nowrap md:px-px">
      <div className="box-border caret-transparent basis-[0%] grow shrink-0 min-h-[25px] min-w-[auto] w-min mx-0 px-0 py-2.5 rounded-[1px] md:mx-12 md:px-12">
        <div className="bg-white/90 box-border caret-transparent max-w-[500px] w-auto mr-0 mb-px pt-0 pb-3 px-0 font-helvetica md:w-full md:mr-auto md:pt-3 md:px-[15px] animate-fade-in" >
          <HeroImage />
          <div className="animate-fade-in" >
            <HeroHeadline />
          </div>
          <div className="animate-fade-in" >
            <HeroDescription />
          </div>
          <hr className="text-zinc-500 bg-slate-500 caret-transparent h-[5px] max-w-full w-[30%] border-slate-500 overflow-visible ml-px mr-auto my-[5px] border-b-0 border-x-0" />
          <div className="animate-fade-in" >
            <HeroFeatureList />
          </div>
          <div className="bg-white box-border caret-transparent w-full pt-2.5 px-px md:bg-transparent"></div>
          <div className="animate-fade-in" >
            <HeroCTA
              variant="button"
              buttonTitle="GET 70% OFF TODAY!"
              buttonText="GET 70% OFF TODAY! 👉   "
            />
            <HeroCTA
              variant="note"
              noteLabel="Note:"
              noteText=" Not Available on Amazon or eBay"
            />
          </div>
          <HeroProductImage
            src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1740116482834_1729153699510_1727912647492_Top_Comment_WEBP_50Kb.webp"
            className="hidden md:inline"
          />
          <HeroProductImage
            src="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1740397514621_Patricia_Green_Desktop_v3.1.webp"
            className="block md:hidden"
          />
        </div>
        <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start md:flex-nowrap"></div>
      </div>
    </div>
  );
};
