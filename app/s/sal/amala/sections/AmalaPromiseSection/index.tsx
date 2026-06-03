import { AmalaPromiseItem } from "../AmalaPromiseSection/components/AmalaPromiseItem";

export type AmalaPromiseSectionItem = {
  imageSrc: string;
  text: string;
  alt: string;
  title: string;
  layoutVariant: string;
};

export type AmalaPromiseSectionProps = {
  heading: string;
  sectionVariant: string;
  outerClassName: string;
  contentClassName: string;
  headingWrapperClassName: string;
  desktopListWrapperClassName: string;
  mobileListWrapperClassName: string;
  leftIconSrc: string;
  rightIconSrc: string;
  leftIconClassName: string;
  rightIconClassName: string;
  showTopIcons: string;
  desktopItems: AmalaPromiseSectionItem[];
  mobileItems: AmalaPromiseSectionItem[];
};

export const AmalaPromiseSection = (props: AmalaPromiseSectionProps) => {
  return (
    <section
      className={`items-center bg-no-repeat box-border caret-transparent flex-col justify-items-center outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px] ${props.sectionVariant}`}
    >
      <div
        className={`text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] outline-[3px] text-start w-full bg-center md:flex-row ${props.outerClassName}`}
      >
        <div
          className={`box-border caret-transparent outline-[3px] align-top w-full ${props.contentClassName}`}
        >
          {props.showTopIcons === "true" && (
            <>
              <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
                <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                  <img
                    src={props.leftIconSrc}
                    alt=""
                    title=""
                    className={props.leftIconClassName}
                  />
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
                <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                  <img
                    src={props.rightIconSrc}
                    alt=""
                    title=""
                    className={props.rightIconClassName}
                  />
                </div>
              </div>
            </>
          )}

          <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
            <div
              className={`box-border caret-transparent outline-[3px] w-full ${props.headingWrapperClassName}`}
            >
              <div className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]">
                <p className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]">
                  <strong className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]">
                    {props.heading}
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
            <div className={props.desktopListWrapperClassName}>
              <div className="items-start box-border caret-transparent hidden md:flex flex-wrap mt-[30px] md:mt-10">
                {props.desktopItems.map((item, index) => (
                  <div key={index} className="flex-1 min-w-0">
                    {index > 0 && (
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-2.5 min-w-2.5 outline-[3px] w-2.5"></div>
                    )}
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]">
                      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
                        <div className="box-border caret-transparent flex flex-col outline-[3px] w-full">
                          <AmalaPromiseItem
                            imageSrc={item.imageSrc}
                            text={item.text}
                            alt={item.alt}
                            title={item.title}
                            layoutVariant={item.layoutVariant}
                          />
                        </div>
                      </div>
                    </div>
                    {(index + 1) % 3 === 0 &&
                      index !== props.desktopItems.length - 1 && (
                        <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-2.5 min-w-2.5 outline-[3px] w-2.5">
                          <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
                            <div className="box-border caret-transparent flex flex-col outline-[3px] w-full">
                              <div className="items-start box-border caret-transparent flex flex-wrap mt-[30px]">
                                <div className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="items-center box-border caret-transparent flex justify-center outline-[3px] md:hidden">
            <div className={props.mobileListWrapperClassName}>
              {props.mobileItems.map((item, index) => (
                <div key={index}>
                  {index > 0 && (
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-2.5 min-h-[auto] min-w-2.5 outline-[3px] w-2.5"></div>
                  )}
                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]">
                          <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                            <AmalaPromiseItem
                              imageSrc={item.imageSrc}
                              text={item.text}
                              alt={item.alt}
                              title={item.title}
                              layoutVariant={item.layoutVariant}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {(index + 1) % 2 === 0 &&
                    index !== props.mobileItems.length - 1 && (
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-2.5 min-h-[auto] min-w-2.5 outline-[3px] w-2.5">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[25px]">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
