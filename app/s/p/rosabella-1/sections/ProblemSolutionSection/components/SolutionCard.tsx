import copy from "../../../copy.json"
import media from "../../../media.json"

export const SolutionCard = () => {
  const { eyebrow, heading, body, features } = copy.problemSolution.solution;
  return (
    <div className="bg-pink-50 box-border caret-transparent flex flex-col outline-[3px] w-full mt-[30px] pt-[30px] pb-0 px-[22px] rounded-bl rounded-br rounded-tl rounded-tr md:flex-row md:mt-[60px] md:pl-[66px] md:pr-[73px] md:pt-[50px] md:pb-[33px]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-black font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-center mb-2.5 font-montserrat md:text-left">
            {eyebrow}
          </div>
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px] md:text-left">
            {heading}
          </div>
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-center mt-5 font-montserrat md:text-base md:leading-[20.8px] md:text-left">
            {body}
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-[26px] md:flex-row md:mt-10">
            <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full">
              {features.slice(0, 2).map((feature, i) => (
                <div key={i} className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full${i > 0 ? "" : ""}`}>
                  {i > 0 && <div className="box-border caret-transparent basis-[26px] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-11" />}
                  <img
                    title=""
                    src={media.problemSolution.featureIcons[i]}
                    alt=""
                    className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-9"
                  />
                  <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-center mt-4 font-montserrat md:text-base md:leading-[20.8px]">
                    {feature.line1}
                    <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                      {feature.line2}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent basis-[54px] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-11"></div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
              <div className="box-border caret-transparent flex outline-[3px] w-full">
                {features.slice(2, 4).map((feature, i) => (
                  <div key={i} className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    {i > 0 && <div className="box-border caret-transparent basis-[26px] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-11" />}
                    <img
                      title=""
                      src={media.problemSolution.featureIcons[i + 2]}
                      alt=""
                      className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-9"
                    />
                    <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-center mt-4 font-montserrat md:text-base md:leading-[20.8px]">
                      {feature.line1}
                      <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                        {feature.line2}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent basis-0 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[70px] md:basis-20"></div>
      <div className="box-border caret-transparent basis-full shrink-0 mt-[-60px] max-w-[440px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto md:basis-[440px] md:mt-[-147.92px]">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <img
            title=""
            src={media.problemSolution.bottleImage}
            alt=""
            className="text-black box-border caret-transparent inline max-w-full outline-[3px] translate-y-[75px] md:translate-y-[62px]"
          />
        </div>
      </div>
    </div>
  );
};
