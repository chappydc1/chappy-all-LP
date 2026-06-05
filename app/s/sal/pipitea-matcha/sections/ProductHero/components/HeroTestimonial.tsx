export type HeroTestimonialProps = {
  rootVariantClass: string;
  containerVariantClass: string;
  columnVariantClass: string;
  imageWrapperVariantClass: string;
  heroImageVariantClass: string;
  contentWrapperVariantClass: string;
  rowVariantClass: string;
  lowerWrapperVariantClass: string;
  avatarWrapperVariantClass: string;
  avatarImageVariantClass: string;
  authorTextWrapperVariantClass: string;
  authorText: string;
  verifiedBadgeImageVariantClass: string;
  verifiedTextWrapperVariantClass: string;
};

export const HeroTestimonial = (props: HeroTestimonialProps) => {
  return (
    <div
      href=""
      className={`items-start box-border caret-transparent flex-wrap border border-zinc-700 mt-[25px] rounded-lg border-solid ${props.rootVariantClass}`}
    >
      <div
        href=""
        className={`box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] ${props.containerVariantClass}`}
      >
        <div
          href=""
          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
        >
          <div
            href=""
            className={`items-start box-border caret-transparent flex flex-col outline-[3px] w-full ${props.imageWrapperVariantClass}`}
          >
            <img
              src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/28.webp"
              alt=""
              href=""
              title=""
              className={`box-border caret-transparent max-w-full object-scale-down outline-[3px] ${props.heroImageVariantClass}`}
            />
          </div>
        </div>
        <div
          href=""
          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
        >
          <div
            href=""
            className={`text-black text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left w-full mt-3 ${props.contentWrapperVariantClass}`}
          >
            <div
              href=""
              className="box-border caret-transparent outline-[3px] w-full"
            >
              <p href="" className="box-border caret-transparent outline-[3px]">
                <span
                  href=""
                  className="box-border caret-transparent outline-[3px]"
                >
                  &quot;I&#39;ve been dealing with constant bloating and
                  digestive issues for years. I tried probiotics, digestive
                  enzymes, even cut out half the foods I love. Nothing worked
                  long-term. Since starting Ceremonial Matcha, my gut feels so
                  much better. I can actually eat a normal meal without looking
                  six months pregnant an hour later. The bloating is finally
                  manageable, and I don&#39;t feel miserable after every meal
                  anymore.&quot;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          href=""
          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
        >
          <div
            href=""
            className={`box-border caret-transparent flex flex-col outline-[3px] w-full ${props.contentWrapperVariantClass}`}
          >
            <div
              href=""
              className={`items-center box-border caret-transparent flex flex-wrap justify-between mt-[15px] ${props.contentWrapperVariantClass}`}
            >
              <div
                href=""
                className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.containerVariantClass}`}
              >
                <div
                  href=""
                  className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
                >
                  <div
                    href=""
                    className={`box-border caret-transparent flex flex-col outline-[3px] w-full ${props.contentWrapperVariantClass}`}
                  >
                    <div
                      href=""
                      className={`items-center box-border caret-transparent flex flex-wrap ${props.contentWrapperVariantClass}`}
                    >
                      <div
                        href=""
                        className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.containerVariantClass}`}
                      >
                        <div
                          href=""
                          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
                        >
                          <div
                            href=""
                            className={props.avatarWrapperVariantClass}
                          >
                            <img
                              src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/29.webp"
                              alt=""
                              sizes="40px"
                              href=""
                              title=""
                              className={`box-border caret-transparent max-w-full object-cover outline-[3px] rounded-[500px] ${props.avatarImageVariantClass}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        href=""
                        className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.containerVariantClass}`}
                      >
                        <div
                          href=""
                          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
                        >
                          <div
                            href=""
                            className={`text-black box-border caret-transparent outline-[3px] text-left w-full ${props.authorTextWrapperVariantClass}`}
                          >
                            <div
                              href=""
                              className="box-border caret-transparent outline-[3px] w-full"
                            >
                              <p
                                href=""
                                className="box-border caret-transparent outline-[3px]"
                              >
                                <strong
                                  href=""
                                  className="font-bold box-border caret-transparent outline-[3px]"
                                >
                                  {props.authorText}
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                href=""
                className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.containerVariantClass}`}
              >
                <div
                  href=""
                  className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
                >
                  <div
                    href=""
                    className={`box-border caret-transparent flex flex-col outline-[3px] w-full ${props.contentWrapperVariantClass}`}
                  >
                    <div
                      href=""
                      className={`items-center box-border caret-transparent flex flex-wrap ${props.contentWrapperVariantClass}`}
                    >
                      <div
                        href=""
                        className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.containerVariantClass}`}
                      >
                        <div
                          href=""
                          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
                        >
                          <div
                            href=""
                            className={`items-center box-border caret-transparent flex flex-col outline-[3px] w-full mr-1.5 ${props.contentWrapperVariantClass}`}
                          >
                            <img
                              src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/10.svg"
                              alt=""
                              sizes="144px"
                              href=""
                              title=""
                              className={`box-border caret-transparent max-w-full outline-[3px] w-4 ${props.verifiedBadgeImageVariantClass}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        href=""
                        className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.containerVariantClass}`}
                      >
                        <div
                          href=""
                          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.columnVariantClass}`}
                        >
                          <div
                            href=""
                            className={`text-black box-border caret-transparent outline-[3px] text-left w-full ${props.verifiedTextWrapperVariantClass}`}
                          >
                            <div
                              href=""
                              className="box-border caret-transparent outline-[3px] w-full"
                            >
                              <p
                                href=""
                                className="box-border caret-transparent outline-[3px]"
                              >
                                <strong
                                  href=""
                                  className="font-bold box-border caret-transparent outline-[3px]"
                                >
                                  Verified Customer
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
