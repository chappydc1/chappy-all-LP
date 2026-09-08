import { SurveyStat } from "./SurveyStat"

export const SurveyStats = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] w-full mt-0 px-4 md:mt-4 md:px-0">
      <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-left font-montserrat md:text-[32px] md:leading-[41.6px]">
        Results Felt by Those Who Tried Rosabella Beetroot
      </div>
      <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-2 font-montserrat md:text-base md:leading-[20.8px]">
        We surveyed daily users to see how Rosabella Beetroot changed their
        lives.
      </div>
      <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-6 md:flex-row md:mt-9">
        <SurveyStat
          percentage="71%"
          title="Felt more energized daily"
          titleVariant="md:pr-3.5"
          description="Less reliance on coffee with steady, natural energy throughout the day."
        />
        <div className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-4 md:basis-4"></div>
        <SurveyStat
          percentage="82%"
          title="Felt circulation was better supported"
          titleVariant="md:pr-[7px]"
          description="Blood flow felt noticeably improved within the first few weeks of consistent use."
        />
        <div className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-4 md:basis-4"></div>
        <SurveyStat
          percentage="91%"
          title="Would recommend to a friend"
          titleVariant="md:pr-3.5"
          description="Satisfied with the results and continuing as part of their daily wellness routine."
        />
      </div>
    </div>
  );
};
