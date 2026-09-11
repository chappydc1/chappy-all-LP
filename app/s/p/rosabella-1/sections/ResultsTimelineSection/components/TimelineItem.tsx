export type TimelineItemProps = {
  week: string;
  title: string;
  description: string;
  benefitOne: string;
  benefitTwo: string;
  connectorClassName: string;
};

export const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div className="relative box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className={props.connectorClassName}>
        <div className="bg-pink-400 box-border caret-transparent h-[11px] min-h-[auto] min-w-[auto] outline-[3px] w-[11px] border-pink-400 border-4 border-solid md:h-4 md:w-4 md:border-[6px]"></div>
      </div>
      <div className="box-border caret-transparent outline-[3px] w-full pl-[25px] md:pl-0">
        <div className="text-black text-xl box-border caret-transparent hidden tracking-[-0.32px] leading-[26px] outline-[3px] text-left font-montserrat md:block">
          {props.week}
        </div>
        <div className="text-white bg-pink-400 box-border caret-transparent hidden tracking-[-0.32px] leading-4 max-w-fit outline-[3px] text-left mr-auto mt-3.5 px-2.5 py-[7.5px] rounded-sm font-montserrat md:block">
          {props.title}
        </div>
        <div className="text-white text-[13px] bg-pink-400 box-border caret-transparent block tracking-[-0.32px] leading-[13px] max-w-fit outline-[3px] text-left mr-auto pt-1.5 pb-[5px] px-2.5 rounded-sm font-montserrat md:text-base md:hidden md:leading-4 md:py-[7.5px]">
          <b className="text-[13px] font-bold box-border caret-transparent leading-[13px] outline-[3px] md:text-base md:leading-4">
            <span className="text-yellow-400 text-[13px] box-border caret-transparent leading-[13px] outline-[3px] md:text-base md:leading-4">
              {props.week}
            </span>
          </b>{" "}
          {props.title}
        </div>
        <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-3.5 font-montserrat md:text-base md:leading-[20.8px]">
          {props.description}
        </div>
        <div className="box-border caret-transparent flex outline-[3px] w-full mt-3.5">
          <img
            title=""
            src="/lp-images-files-videos-fonts/p/rosabella-1/56.svg"
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-3.5 mr-2"
          />
          <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            {props.benefitOne}
          </div>
        </div>
        <div className="box-border caret-transparent flex outline-[3px] w-full mt-3.5">
          <img
            title=""
            src="/lp-images-files-videos-fonts/p/rosabella-1/56.svg"
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-3.5 mr-2"
          />
          <div className="text-black text-[15px] font-medium box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            {props.benefitTwo}
          </div>
        </div>
      </div>
    </div>
  );
};
