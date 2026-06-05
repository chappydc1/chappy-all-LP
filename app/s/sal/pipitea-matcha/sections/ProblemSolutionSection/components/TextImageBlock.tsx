export type TextImageBlockProps = {
  layoutVariant: string;
  imageUrl: string;
  imageSizes: string;
  heading: string;
  headingWrapperClassName: string;
  headingInnerWrapperClassName: string;
  headingClassName: string;
  strongClassName: string;
  content: React.ReactNode;
};

export const TextImageBlock = (props: TextImageBlockProps) => {
  const isImageFirst = props.layoutVariant === "image-first";

  const imageColumn = (
    <div
      href=""
      className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
    >
      <div
        href=""
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          href=""
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
            href=""
            className="items-start box-border caret-transparent flex-wrap hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]"
          >
            <div
              href=""
              className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] min-h-0 md:min-h-[auto]"
            >
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center outline-[3px] min-w-0 md:min-w-[auto]"
              >
                <div
                  href=""
                  className="box-border caret-transparent outline-[3px] w-full items-center flex flex-col min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                >
                  <img
                    src={props.imageUrl}
                    alt=""
                    sizes={props.imageSizes}
                    href=""
                    title=""
                    className="box-border caret-transparent h-full max-w-full min-h-0 min-w-0 outline-[3px] w-full rounded-[10px] md:min-h-[auto] md:min-w-[auto]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const textColumn = (
    <div
      href=""
      className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
    >
      <div
        href=""
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          href=""
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
            href=""
            className="items-start box-border caret-transparent flex-wrap flex min-h-[auto] min-w-[auto]"
          >
            <div
              href=""
              className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] min-h-[auto]"
            >
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  href=""
                  className={`box-border caret-transparent outline-[3px] w-full ${props.headingWrapperClassName}`}
                >
                  <div href="" className={props.headingInnerWrapperClassName}>
                    <h2 href="" className={props.headingClassName}>
                      <strong href="" className={props.strongClassName}>
                        {props.heading}
                      </strong>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  href=""
                  className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <div
                    href=""
                    className="items-start box-border caret-transparent flex-wrap flex min-h-[auto] min-w-[auto] mt-[25px] mb-[3px] md:hidden md:min-h-0 md:min-w-0"
                  >
                    <div
                      href=""
                      className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] min-h-[auto] md:min-h-0"
                    >
                      <div
                        href=""
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] md:min-w-0"
                      >
                        <div
                          href=""
                          className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0"
                        >
                          <img
                            src={props.imageUrl}
                            alt=""
                            href=""
                            title=""
                            className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-[10px] md:h-auto md:min-h-0 md:min-w-0"
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

  return (
    <div
      href=""
      className="items-center box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] md:flex-row"
    >
      {isImageFirst ? imageColumn : textColumn}
      <div
        href=""
        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
      ></div>
      {isImageFirst ? textColumn : imageColumn}
    </div>
  );
};
