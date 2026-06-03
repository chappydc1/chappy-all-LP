export type PurchaseMetaProps = {
  iconSrc: string;
  iconSize: string;
  iconClassName: string;
  text: string;
};

export const PurchaseMeta = (props: PurchaseMetaProps) => {
  return (
    <div
      className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
    >
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
            className="items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
          >
            <div
              className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
            >
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <img
                    src={props.iconSrc}
                    alt=""
                    sizes={props.iconSize}
                    title=""
                    className={`box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] ${props.iconClassName}`}
                  />
                </div>
              </div>
            </div>
            <div
              className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
            >
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="text-black text-[12.0583px] box-border caret-transparent leading-[18.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2 md:text-[15px] md:leading-[22.5px]"
                >
                  <div
                    className="text-[12.0583px] box-border caret-transparent leading-[18.0875px] outline-[3px] w-full md:text-[15px] md:leading-[22.5px]"
                  >
                    <p
                      className="text-[12.0583px] box-border caret-transparent leading-[18.0875px] outline-[3px] md:text-[15px] md:leading-[22.5px]"
                    >
                      {props.text}
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
};
