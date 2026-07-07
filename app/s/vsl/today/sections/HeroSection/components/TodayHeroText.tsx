export const TodayHeroText = () => {
  return (
    <div className="box-border caret-transparent max-w-4xl outline-[3px] mx-auto px-4 py-6 font-ui_sans_serif">
      <h1 className="text-gray-700 text-xl font-extrabold box-border caret-transparent tracking-[-0.5px] leading-[22px] outline-[3px] mb-[18px] font-montserrat md:text-3xl md:tracking-[-0.75px] md:leading-[33px]">
        <span className="text-red-600 text-xl box-border caret-transparent tracking-[-0.5px] leading-[22px] outline-[3px] md:text-3xl md:tracking-[-0.75px] md:leading-[33px]">
          URGENT:
        </span>
        Scientists uncover a natural cure for Type 2 Diabetes that can be made
        at home
      </h1>
      <div className="items-start box-border caret-transparent flex outline-[3px] border-red-600 mb-4 pl-3 py-1 border-l-[3px] border-solid font-montserrat">
        <p className="text-gray-700 text-base font-medium box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mb-4 md:text-xl md:leading-[25px]">
          Over 15,000 Americans have already reversed Type 2 Diabetes for less
          than $45
        </p>
      </div>
    </div>
  );
};
