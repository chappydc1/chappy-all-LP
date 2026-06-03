export const HeadlineSection = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center mt-0 md:mt-5">
      <h2 className="text-black text-[16px] font-black box-border caret-transparent leading-[21px] font-sans md:text-[24px] md:leading-[30px]">
        <span className="text-[24px] font-black box-border caret-transparent leading-[29px] tracking-[-0.03em] md:text-[36px] md:leading-[42px]">
          NO OZEMPIC... Just 4 Ingredients!
        </span>
        <br className="text-[16px] box-border caret-transparent leading-[21px] md:text-[24px] md:leading-[30px]" />
        This is the{" "}
        <span className="text-red-600 text-[16px] box-border caret-transparent leading-[21px] md:text-[24px] md:leading-[30px]">
          new recipe
        </span>
        {" "}celebrities are using to drop up to{" "}
        <span className="text-white text-[16px] bg-red-600 box-border caret-transparent leading-[21px] px-1.5 py-0.5 rounded-bl rounded-br rounded-tl rounded-tr md:text-[24px] md:leading-[30px]">
          14 pounds in just 10 days!
        </span>
      </h2>
    </div>
  );
};
