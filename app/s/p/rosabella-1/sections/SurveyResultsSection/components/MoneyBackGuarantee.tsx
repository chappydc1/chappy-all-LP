import copy from "../../../copy.json"
import media from "../../../media.json"

export const MoneyBackGuarantee = () => {
  const { label, title, body, points } = copy.surveyResults.guarantee;
  return (
    <div className="relative box-border caret-transparent flex flex-col outline-[3px] w-full mt-[143px] px-[23px] md:flex-row md:-mt-5 md:px-0">
      <div className="absolute box-border caret-transparent basis-full shrink-0 max-w-[207px] min-h-0 min-w-0 outline-[3px] top-[-111px] w-6/12 right-[15px] md:static md:basis-[396px] md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-full md:right-auto md:top-auto">
        <div className="box-border caret-transparent outline-[3px] w-full mt-0 md:mt-[-60px]">
          <img
            title=""
            src={media.surveyResults.bottleImage}
            alt=""
            className="text-black box-border caret-transparent inline max-w-full outline-[3px]"
          />
        </div>
      </div>
      <div className="box-border caret-transparent basis-0 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[103px] md:basis-[103px]"></div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mb-4">
            <img
              title=""
              src={media.icons.guaranteeBadge}
              alt=""
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[51px]"
            />
          </div>
          <div className="text-pink-400 text-4xl font-semibold box-border caret-transparent tracking-[-1.2px] leading-[46.8px] outline-[3px] text-left font-montserrat md:text-[40px] md:leading-[52px]">
            {label}
          </div>
          <div className="text-black text-2xl font-semibold box-border caret-transparent tracking-[-0.72px] leading-[31.2px] outline-[3px] text-left mt-1.5 font-montserrat">
            {title}
          </div>
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-4 font-montserrat md:text-base md:leading-[20.8px]">
            {body}
          </div>
          <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full mt-4 md:flex-row md:mt-5">
            {points.map((point, i) => (
              <div key={i} className={`box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full${i > 0 ? " mt-3 md:mt-0" : ""}`}>
                <img
                  title=""
                  src={media.icons.check}
                  alt=""
                  className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-4 mr-2"
                />
                <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
