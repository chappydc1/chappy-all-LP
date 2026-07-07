export type JavyComparisonRowProps = {
  rowVariant: "javvy" | "mainstream" | "protein";
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
  brandNameClass?: string;
  calories: string;
  caloriesSubtext?: string;
  protein: string;
  proteinSubtext?: string;
  sugar: string;
  sugarSubtext?: string;
  faceIconSrc: string;
  faceIconClass: string;
  col1Class: string;
  col2Class: string;
  col3Class: string;
  col4Class?: string;
  faceWrapperClass: string;
};

export const JavyComparisonRow = (props: JavyComparisonRowProps) => {
  const isJavvy = props.rowVariant === "javvy";

  return (
    <div
      className={`box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] w-3/12 md:basis-auto md:grow-0 ${isJavvy ? "bg-cyan-50 border-slate-300 pt-5 pb-2 rounded-[10px] border-2 border-solid" : "pt-3 md:pt-[15px]"}`}
    >
      {isJavvy ? (
        <div className="text-xs items-center box-border caret-transparent flex h-11 justify-center leading-[18px] text-center border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:px-0 relative border-b-slate-300/60 mx-[3px] px-1 py-4 md:mx-3">
          <div className="text-xs items-center box-border caret-transparent gap-x-1 flex flex-col leading-[14.4px] min-h-[auto] min-w-[auto] gap-y-1 text-center w-full pb-0.5 md:text-base md:leading-6 md:text-left md:pb-0 h-auto justify-center md:flex-row md:h-[54px]">
            <img
              src={props.logoSrc}
              alt={props.logoAlt ?? ""}
              className="text-xs box-border caret-transparent leading-[14.4px] max-h-8 max-w-full min-h-[auto] min-w-[auto] text-center w-4/5 mb-5 md:text-base md:leading-6 md:max-h-10 md:text-left md:w-full"
            />
          </div>
        </div>
      ) : (
        <div
          className={`text-xs items-center box-border caret-transparent flex justify-center leading-[18px] text-center md:text-base md:leading-6 md:text-left font-medium`}
        >
          <div className="text-xs items-center box-border caret-transparent gap-x-1 flex flex-col leading-[14.4px] min-h-[auto] min-w-[auto] gap-y-1 text-center w-full pb-0.5 md:text-base md:leading-6 md:text-left md:pb-0 relative bg-red-50 border-b-stone-300 border-t-stone-300 justify-end border-r-white/10 border-b border-r border-t">
            <div className="text-rose-700 text-xs items-center box-border caret-transparent flex h-[50px] justify-center leading-[15.6px] max-w-20 min-h-[auto] min-w-[auto] text-center pt-0.5 md:text-base md:h-14 md:leading-6 md:max-w-none md:text-left md:pt-0">
              <p
                className={`text-xs box-border caret-transparent leading-[15.6px] min-h-[auto] min-w-[auto] text-center md:text-base md:leading-6 md:text-left ${props.brandNameClass ?? ""}`}
              >
                {props.brandName}
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        className={`text-xs items-center box-border caret-transparent flex h-11 justify-center leading-[18px] text-center border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:px-0 ${props.col1Class}`}
      >
        <p
          className={`box-border caret-transparent min-h-[auto] min-w-[auto] text-center md:text-left ${isJavvy ? "text-sm font-medium leading-[21px] md:text-lg md:leading-[27px]" : "text-gray-500 text-xs leading-[18px] md:text-base md:leading-6"}`}
        >
          {props.calories}
        </p>
        {props.caloriesSubtext && (
          <p className="text-[10px] box-border caret-transparent leading-[10px] min-h-[auto] min-w-[auto] opacity-60 text-center md:text-xs md:leading-3 md:text-left">
            {props.caloriesSubtext}
          </p>
        )}
      </div>

      <div
        className={`text-xs items-center box-border caret-transparent flex h-11 justify-center leading-[18px] text-center border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:px-0 ${props.col2Class}`}
      >
        <p
          className={`box-border caret-transparent min-h-[auto] min-w-[auto] text-center md:text-left ${isJavvy ? "text-sm font-medium leading-[21px] md:text-lg md:leading-[27px]" : "text-gray-500 text-xs leading-[18px] md:text-base md:leading-6"}`}
        >
          {props.protein}
        </p>
        {props.proteinSubtext && (
          <p className="text-[10px] box-border caret-transparent leading-[10px] min-h-[auto] min-w-[auto] opacity-60 text-center md:text-xs md:leading-3 md:text-left">
            {props.proteinSubtext}
          </p>
        )}
      </div>

      <div
        className={`text-xs items-center box-border caret-transparent flex h-11 justify-center leading-[18px] text-center border-b md:text-base md:h-[50px] md:leading-6 md:text-left md:px-0 ${props.col3Class}`}
      >
        <p
          className={`box-border caret-transparent min-h-[auto] min-w-[auto] text-center md:text-left ${isJavvy ? "text-sm font-medium leading-[21px] md:text-lg md:leading-[27px]" : "text-gray-500 text-xs leading-[18px] md:text-base md:leading-6"}`}
        >
          {props.sugar}
        </p>
        {props.sugarSubtext && (
          <p className="text-gray-500 text-[9px] box-border caret-transparent leading-[9px] min-h-[auto] min-w-[auto] text-center md:text-[10px] md:leading-[10px] md:text-left">
            {props.sugarSubtext}
          </p>
        )}
      </div>

      <div
        className={`items-center box-border caret-transparent flex justify-center text-center py-4 md:text-base md:h-[50px] md:leading-6 md:text-left md:px-0 ${props.faceWrapperClass}`}
      >
        <img
          src={props.faceIconSrc}
          alt=""
          className={`box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] text-center md:text-base md:leading-6 md:text-left ${props.faceIconClass}`}
        />
      </div>
    </div>
  );
};
