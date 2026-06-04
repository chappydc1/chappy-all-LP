export type ComparisonRowProps = {
  rowClassName: string;
  middleClassName: string;
  middleText: string;
  middleTextClassName: string;
  middleInnerClassName: string;
  rightClassName: string;
  rightContentClassName: string;
  rightIconSrc: string;
  rightText: string;
  rightTextClassName: string;
};

export const ComparisonRow = (props: ComparisonRowProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] ${props.rowClassName}`}
    >
      <div className="box-border caret-transparent flex basis-[0%] flex-col grow h-[110px] justify-center min-h-[auto] outline-[3px] px-[5px] md:px-2.5">
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <img
              src="/s/sal/amala/1763702956506_1730181221_checkIcon.svg"
              alt=""
              title=""
              className="box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[25px] md:h-9 md:w-9"
            />
          </div>
        </div>
      </div>

      <div
        className={`bg-gray-800 box-border caret-transparent flex basis-[0%] flex-col grow justify-center max-w-[46%] min-h-[auto] min-w-[46%] outline-[3px] w-[46%] px-[5px] md:max-w-[40%] md:min-w-[40%] md:w-2/5 md:px-2.5 ${props.middleClassName}`}
      >
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className={props.middleInnerClassName}>
            <div className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] w-full md:text-xl md:leading-[30px]">
              <p className={props.middleTextClassName}>{props.middleText}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow h-[110px] justify-center min-h-[auto] outline-[3px] px-[5px] md:px-2.5 ${props.rightClassName}`}
      >
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className={props.rightContentClassName}>
            <img
              src={props.rightIconSrc}
              alt=""
              title=""
              className="box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[25px] md:h-9 md:w-9"
            />
            {props.rightText ? (
              <p className={props.rightTextClassName}>{props.rightText}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
