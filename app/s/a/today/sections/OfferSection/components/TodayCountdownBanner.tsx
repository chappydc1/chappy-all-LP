export const TodayCountdownBanner = () => {
  return (
    <div className="relative bg-blue-950 border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-sky-500 box-border caret-transparent outline-[3px] py-10 border-t-4 border-solid">
      <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-[1210px] outline-[3px] text-center w-full mx-auto md:max-w-screen-xl">
        <h1 className="text-white text-[26px] box-border caret-transparent leading-[26px] max-w-[516.361px] outline-[3px] mb-6 md:text-[40px] md:leading-10 md:max-w-[794.399px]">
          Reader Access: Current Glyco Pulse Bundle Options
        </h1>
        <p className="text-blue-100 text-lg box-border caret-transparent leading-7 max-w-[760px] outline-[3px] px-4 md:text-xl md:leading-8">
          Compare the available bundles below. Multi-bottle options are shown
          for readers who want to follow a consistent daily routine.
        </p>
      </div>
    </div>
  );
};
