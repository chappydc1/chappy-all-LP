import copy from "../../../copy.json"
import media from "../../../media.json"

export const ProblemOverview = () => {
  const { heading, body, symptoms } = copy.problemSolution;
  return (
    <div className="box-border caret-transparent flex flex-col outline-[3px] w-full md:flex-row">
      <div className="box-border caret-transparent basis-full shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[542px]">
        <img
          title=""
          src={media.problemSolution.problemImage}
          alt=""
          className="text-black box-border caret-transparent inline max-w-full outline-[3px] rounded-bl rounded-br rounded-tl rounded-tr"
        />
      </div>
      <div className="box-border caret-transparent basis-5 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[70px] md:basis-[70px]"></div>
      <div className="items-center box-border caret-transparent flex basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-left font-montserrat md:text-[32px] md:leading-[41.6px]">
            {heading}
          </div>
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-5 font-montserrat md:text-base md:leading-[20.8px]">
            {body}
          </div>
          {symptoms.map((symptom, i) => (
            <div key={i} className={`box-border caret-transparent flex outline-[3px] w-full${i === 0 ? " mt-5" : " mt-4"}`}>
              <img
                title=""
                src={media.icons.bullet}
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[21px] mr-3.5"
              />
              <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
                {symptom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
