export type ComparisonRowProps = {
  rootClassName: string;
  labelContainerClassName: string;
  textClassName: string;
  label: string;
  firstIconCellClassName: string;
};

export const ComparisonRow = (props: ComparisonRowProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex outline-[3px] w-full ${props.rootClassName}`}
    >
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[200px] md:w-full ${props.labelContainerClassName}`}
      >
        <div
          className={`text-sm box-border caret-transparent outline-[3px] text-left font-montserrat md:text-base md:leading-6 md:text-right ${props.textClassName}`}
        >
          {props.label}
        </div>
      </div>
      <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div
          className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full p-2.5 ${props.firstIconCellClassName}`}
        >
          <img
            title=""
            src="/images/rejuvacare/1722846383829_icon_check.webp"
            {...{ href: "" }}
            alt=""
            className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[25px] mx-px"
          />
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full p-2.5">
          <img
            title=""
            src="/images/rejuvacare/1722907474978_icon_ex_circle_gray.webp"
            {...{ href: "" }}
            alt=""
            className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[25px] mx-px"
          />
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full p-2.5">
          <img
            title=""
            src="/images/rejuvacare/1722907474978_icon_ex_circle_gray.webp"
            {...{ href: "" }}
            alt=""
            className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[25px] mx-px"
          />
        </div>
      </div>
    </div>
  );
};
