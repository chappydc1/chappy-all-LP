export type StatItemProps = {
  percentage: string;
  description: string;
  wrapperClassName: string;
  innerClassName: string;
  contentClassName: string;
  highlightWrapperClassName: string;
  highlightInnerClassName: string;
};

export const StatItem = (props: StatItemProps) => {
  const hasExtendedWrapper =
    !!props.wrapperClassName ||
    !!props.innerClassName ||
    !!props.contentClassName ||
    !!props.highlightWrapperClassName ||
    !!props.highlightInnerClassName;

  if (hasExtendedWrapper) {
    return (
      <div
        className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
      >
        <div
          className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
        >
          <div
            className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full flex flex-col ${props.wrapperClassName}`.trim()}
          >
            <div
              className={`box-border caret-transparent items-start flex flex-wrap min-h-[auto] min-w-[auto] ${props.innerClassName}`.trim()}
            >
              <div
                className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
              >
                <div
                  className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                >
                  <div
                    className={`text-zinc-700 text-[35px] box-border caret-transparent leading-[42px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full ${props.contentClassName}`.trim()}
                  >
                    <div
                      className={`box-border caret-transparent outline-[3px] w-full ${props.highlightWrapperClassName}`.trim()}
                    >
                      <p
                        className="box-border caret-transparent outline-[3px]"
                      >
                        <strong
                          className={`text-gray-800 font-bold box-border caret-transparent outline-[3px] ${props.highlightInnerClassName}`.trim()}
                        >
                          {props.percentage}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                >
                  <div
                    className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-[15px] md:text-lg md:leading-[27px]"
                  >
                    <div
                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                    >
                      <p
                        className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                      >
                        {props.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
    >
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="text-zinc-700 text-[35px] box-border caret-transparent leading-[42px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full"
        >
          <div
            className="box-border caret-transparent outline-[3px] w-full"
          >
            <p className="box-border caret-transparent outline-[3px]">
              <strong
                className="text-gray-800 font-bold box-border caret-transparent outline-[3px]"
              >
                {props.percentage}
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-[15px] md:text-lg md:leading-[27px]"
        >
          <div
            className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
          >
            <p
              className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
            >
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
