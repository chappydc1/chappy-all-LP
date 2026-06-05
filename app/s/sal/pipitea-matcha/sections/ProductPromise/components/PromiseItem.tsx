export type PromiseItemProps = {
  outerClassName: string;
  wrapperClassName: string;
  contentClassName: string;
  containerClassName: string;
  itemOuterClassName: string;
  itemWrapperClassName: string;
  itemContentClassName: string;
  itemContainerClassName: string;
  iconWrapperClassName: string;
  imageClassName: string;
  imageSizes: string;
  firstImageSrc: string;
  firstText: string;
  firstTextUsesSpan: string;
  dividerClassName: string;
  secondImageSrc: string;
  secondText: string;
  secondImageSizes: string;
  thirdImageSrc: string;
  thirdText: string;
  thirdImageSizes: string;
  showThirdItem: string;
};

export const PromiseItem = (props: PromiseItemProps) => {
  const hasThirdItem = props.showThirdItem === "true";
  const firstTextUsesSpan = props.firstTextUsesSpan === "true";

  return (
    <div href="" className={props.outerClassName}>
      <div href="" className={props.wrapperClassName}>
        <div href="" className={props.contentClassName}>
          <div href="" className={props.containerClassName}>
            <div href="" className={props.itemOuterClassName}>
              <div href="" className={props.itemWrapperClassName}>
                <div href="" className={props.itemContentClassName}>
                  <div href="" className={props.itemContainerClassName}>
                    <div href="" className={props.itemOuterClassName}>
                      <div href="" className={props.itemWrapperClassName}>
                        <div href="" className={props.iconWrapperClassName}>
                          <img
                            src={props.firstImageSrc}
                            alt=""
                            sizes={props.imageSizes}
                            href=""
                            title=""
                            className={props.imageClassName}
                          />
                        </div>
                      </div>
                      <div href="" className={props.itemWrapperClassName}>
                        <div
                          href=""
                          className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px] min-h-[auto] min-w-[auto]"
                        >
                          <div
                            href=""
                            className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                          >
                            {firstTextUsesSpan ? (
                              <p
                                href=""
                                className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                              >
                                <span
                                  href=""
                                  className="text-[12.3px] box-border caret-transparent leading-[18.45px] outline-[3px]"
                                >
                                  {props.firstText}
                                </span>
                              </p>
                            ) : (
                              <p
                                href=""
                                className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                              >
                                {props.firstText}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div href="" className={props.dividerClassName}></div>
            <div href="" className={props.itemOuterClassName}>
              <div href="" className={props.itemWrapperClassName}>
                <div href="" className={props.itemContentClassName}>
                  <div href="" className={props.itemContainerClassName}>
                    <div href="" className={props.itemOuterClassName}>
                      <div href="" className={props.itemWrapperClassName}>
                        <div href="" className={props.iconWrapperClassName}>
                          <img
                            src={props.secondImageSrc}
                            alt=""
                            sizes={props.secondImageSizes}
                            href=""
                            title=""
                            className={props.imageClassName}
                          />
                        </div>
                      </div>
                      <div href="" className={props.itemWrapperClassName}>
                        <div
                          href=""
                          className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px] min-h-[auto] min-w-[auto]"
                        >
                          <div
                            href=""
                            className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                          >
                            {firstTextUsesSpan ? (
                              <p
                                href=""
                                className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                              >
                                <span
                                  href=""
                                  className="text-[12.3px] box-border caret-transparent leading-[18.45px] outline-[3px]"
                                >
                                  {props.secondText}
                                </span>
                              </p>
                            ) : (
                              <p
                                href=""
                                className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                              >
                                {props.secondText}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {hasThirdItem ? (
              <>
                <div href="" className={props.dividerClassName}></div>
                <div href="" className={props.itemOuterClassName}>
                  <div href="" className={props.itemWrapperClassName}>
                    <div href="" className={props.itemContentClassName}>
                      <div href="" className={props.itemContainerClassName}>
                        <div href="" className={props.itemOuterClassName}>
                          <div href="" className={props.itemWrapperClassName}>
                            <div href="" className={props.iconWrapperClassName}>
                              <img
                                src={props.thirdImageSrc}
                                alt=""
                                sizes={props.thirdImageSizes}
                                href=""
                                title=""
                                className={props.imageClassName}
                              />
                            </div>
                          </div>
                          <div href="" className={props.itemWrapperClassName}>
                            <div
                              href=""
                              className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px] min-h-[auto] min-w-[auto]"
                            >
                              <div
                                href=""
                                className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                              >
                                {firstTextUsesSpan ? (
                                  <p
                                    href=""
                                    className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                                  >
                                    <span
                                      href=""
                                      className="text-[12.3px] box-border caret-transparent leading-[18.45px] outline-[3px]"
                                    >
                                      {props.thirdText}
                                    </span>
                                  </p>
                                ) : (
                                  <p
                                    href=""
                                    className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                                  >
                                    {props.thirdText}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
