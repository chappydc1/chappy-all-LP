export type PipiteaComparisonRowProps = {
  rootVariant: string;
  leftColumnVariant: string;
  contentColumnVariant: string;
  contentInnerVariant: string;
  contentText: React.ReactNode;
  contentTextClassName: string;
  renderContentTextWrapper: boolean;
  rightColumnVariant: string;
  rightImageSrc: string;
  rightPreTextClassName: string;
  rightContent: React.ReactNode;
  rightContentClassName: string;
  renderRightContentInnerWrapper: boolean;
};

export const PipiteaComparisonRow = (props: PipiteaComparisonRowProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] ${props.rootVariant}`}
    >
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow h-[110px] justify-center min-h-[auto] outline-[3px] px-[5px] md:h-[100px] md:px-2.5 ${props.leftColumnVariant}`}
      >
        <div
          className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
        >
          <div
            className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
          >
            <img
              src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765558371251_Check.webp"
              alt=""
              title=""
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[25px] md:w-9"
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-pink-950 box-border caret-transparent flex basis-[0%] flex-col grow justify-center max-w-[46%] min-h-[auto] min-w-[46%] outline-[3px] w-[46%] px-[5px] md:max-w-[40%] md:min-w-[40%] md:px-2.5 ${props.contentColumnVariant}`}
      >
        <div
          className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
        >
          <div
            className={`text-[14.0583px] box-border caret-transparent leading-[21.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-xl md:leading-[30px] ${props.contentInnerVariant}`}
          >
            <div
              className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] w-full md:text-xl md:leading-[30px]"
            >
              {props.renderContentTextWrapper ? (
                <>
                  <p
                    className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-xl md:leading-[30px]"
                  ></p>
                  <h3
                    className={`text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-xl md:leading-[30px] ${props.contentTextClassName}`}
                  >
                    {props.contentText}
                  </h3>
                  <p className="text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-xl md:leading-[30px]"></p>
                </>
              ) : (
                <p
                  className={`text-[14.0583px] box-border caret-transparent leading-[21.0875px] outline-[3px] md:text-xl md:leading-[30px] ${props.contentTextClassName}`}
                >
                  {props.contentText}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow h-[110px] justify-center min-h-[auto] outline-[3px] px-[5px] md:h-[100px] md:px-2.5 ${props.rightColumnVariant}`}
      >
        <div
          className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
        >
          <div
            className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
          >
            <img
              src={props.rightImageSrc}
              alt=""
              title=""
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[25px] md:w-9"
            />
            <p
              className={`text-[10px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[13px] md:leading-[19.5px] ${props.rightPreTextClassName}`}
            ></p>
            {props.renderRightContentInnerWrapper ? (
              <div className={props.rightContentClassName}>
                <div className="text-[10px] box-border caret-transparent leading-[15px] outline-[3px] text-center md:text-sm md:leading-[21px]">
                  <span className="text-[10px] box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[21px]">
                    {props.rightContent}
                  </span>
                </div>
              </div>
            ) : (
              <div className={props.rightContentClassName}>
                {props.rightContent}
              </div>
            )}
            <p className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
