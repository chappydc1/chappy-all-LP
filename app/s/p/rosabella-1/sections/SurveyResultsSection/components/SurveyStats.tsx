import copy from "../../../copy.json"
import { SurveyStat } from "./SurveyStat"

export const SurveyStats = () => {
  const { heading, subheading, stats } = copy.surveyResults;
  return (
    <div className="box-border caret-transparent outline-[3px] w-full mt-0 px-4 md:mt-4 md:px-0">
      <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-left font-montserrat md:text-[32px] md:leading-[41.6px]">
        {heading}
      </div>
      <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-2 font-montserrat md:text-base md:leading-[20.8px]">
        {subheading}
      </div>
      <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-6 md:flex-row md:mt-9">
        {stats.map((stat, i) => (
          <>
            {i > 0 && (
              <div key={`gap-${i}`} className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-4 md:basis-4"></div>
            )}
            <SurveyStat
              key={stat.percentage}
              percentage={stat.percentage}
              title={stat.title}
              description={stat.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};
