export type PromiseItemProps = {
  imageUrl: string;
  imageClassName: string;
  label: string;
  useSpan: string;
};

export const PromiseItem = (props: PromiseItemProps) => {
  return (
    <div
      className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"
    >
      <div
        className="items-center box-border caret-transparent flex justify-center outline-[3px]"
      >
        <div
          className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full"
        >
          <img
            src={props.imageUrl}
            alt=""
            title=""
            className={props.imageClassName}
          />
        </div>
      </div>
      <div
        className="items-center box-border caret-transparent flex justify-center outline-[3px]"
      >
        <div
          className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
        >
          <div
            className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
          >
            <p
              className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
            >
              {props.useSpan === "true" ? (
                <span
                  className="text-[12.3px] box-border caret-transparent leading-[18.45px] outline-[3px]"
                >
                  {props.label}
                </span>
              ) : (
                props.label
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
