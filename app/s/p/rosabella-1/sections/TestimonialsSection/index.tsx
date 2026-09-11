import { TestimonialCarousel } from "./components/TestimonialCarousel"

export const TestimonialsSection = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-[30px] md:flex-nowrap md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="bg-stone-200 box-border caret-transparent outline-[3px] w-full px-[23px] py-[30px] rounded-bl rounded-br rounded-tl rounded-tr md:pl-[52px] md:pr-8 md:pt-16 md:pb-[60px]">
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            Real People. Real Results.
          </div>
          <div className="items-center box-border caret-transparent flex justify-center outline-[3px] text-left w-full mt-4">
            <img
              title=""
              src="/lp-images-files-videos-fonts/p/rosabella-1/16.svg"
              alt=""
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[75px] mr-2 md:w-[107px]"
            />
            <div className="text-black text-sm font-semibold box-border caret-transparent tracking-[-0.32px] leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
              Rated 4.8 / 5.0 | &apos;Excellent&apos;
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};
