export type PipiteaSplitContentBlockProps = {
  layoutVariant: string;
  imageUrl: string;
  imageSizes: string;
  heading: React.ReactNode;
  headingContainerClassName: string;
  headingInnerClassName: string;
  headingClassName: string;
  strongClassName: string;
  mobileImageClassName: string;
  desktopImageClassName: string;
  content: React.ReactNode;
};

export const PipiteaSplitContentBlock = (props: PipiteaSplitContentBlockProps) => {
  const isImageFirst = props.layoutVariant === "image-first";

  const contentColumn = (
    <div
      className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
    >
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
            className="items-start box-border caret-transparent flex-wrap flex min-h-[auto] min-w-[auto]"
          >
            <div
              className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] min-h-[auto]"
            >
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div className={props.headingContainerClassName}>
                  <div className={props.headingInnerClassName}>
                    <h2 className={props.headingClassName}>
                      <strong className={props.strongClassName}>
                        {props.heading}
                      </strong>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <div
                    className="items-start box-border caret-transparent flex-wrap flex min-h-[auto] min-w-[auto] mt-[25px] mb-[3px] md:hidden md:min-h-0 md:min-w-0"
                  >
                    <div
                      className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] min-h-[auto] md:min-h-0"
                    >
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] md:min-w-0"
                      >
                        <div
                          className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0"
                        >
                          <img
                            src={props.imageUrl}
                            alt=""
                            title=""
                            className={props.mobileImageClassName}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {props.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const imageColumn = (
    <div
      className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
    >
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
            className="items-start box-border caret-transparent flex-wrap hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]"
          >
            <div
              className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] min-h-0 md:min-h-[auto]"
            >
              <div
                className="items-center box-border caret-transparent flex justify-center outline-[3px] min-w-0 md:min-w-[auto]"
              >
                <div
                  className="box-border caret-transparent outline-[3px] w-full items-center flex flex-col min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                >
                  <img
                    src={props.imageUrl}
                    alt=""
                    sizes={props.imageSizes}
                    title=""
                    className={props.desktopImageClassName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="items-center box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] md:flex-row"
    >
      {isImageFirst ? imageColumn : contentColumn}
      <div
        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
      ></div>
      {isImageFirst ? contentColumn : imageColumn}
    </div>
  );
};
