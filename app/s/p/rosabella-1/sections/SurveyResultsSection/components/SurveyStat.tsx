export type SurveyStatProps = {
  percentage: string;
  title: string;
  description: string;
};

export const SurveyStat = (props: SurveyStatProps) => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="text-pink-400 text-5xl font-semibold box-border caret-transparent tracking-[-1.44px] leading-7 outline-[3px] text-left font-montserrat">
        {props.percentage}
      </div>
      <div className="text-black text-xl font-semibold box-border caret-transparent tracking-[-0.6px] leading-[26px] outline-[3px] text-left mt-3 font-montserrat">
        {props.title}
      </div>
      <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-[11px] font-montserrat md:text-base md:leading-[20.8px]">
        {props.description}
      </div>
    </div>
  );
};
