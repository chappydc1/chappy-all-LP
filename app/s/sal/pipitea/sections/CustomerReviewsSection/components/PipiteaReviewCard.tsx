export type PipiteaReviewCardProps = {
  firstName: string;
  firstReview: string;
  secondName: string;
  secondReview: string;
  secondNameClassName: string;
  secondReviewClassName: string;
};

export const PipiteaReviewCard = (props: PipiteaReviewCardProps) => {
  return (
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
            className="items-start bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px] box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] rounded-xl"
          >
            <div
              className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
            >
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <img
                    src=""
                    alt=""
                    title=""
                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-t-xl"
                  />
                </div>
              </div>
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <div
                    className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] pt-[15px] pb-[25px] px-[15px]"
                  >
                    <div
                      className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                    >
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                      >
                        <div
                          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                        >
                          <div
                            className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex basis-[0%] grow flex-wrap min-h-[auto] outline-[3px]"
                            >
                              <div
                                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                              >
                                <div
                                  className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mr-[5px] md:text-base md:leading-6"
                                >
                                  <div
                                    className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] w-full md:text-base md:leading-6"
                                  >
                                    <p
                                      className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6"
                                    >
                                      <strong
                                        className="text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6"
                                      >
                                        {props.firstName}
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                              >
                                <div
                                  className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mr-[5px]"
                                >
                                  <img
                                    src=""
                                    alt=""
                                    title=""
                                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[18px]"
                                  />
                                </div>
                              </div>
                              <div
                                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                              >
                                <div
                                  className="text-lime-600 text-[13.4583px] box-border caret-transparent leading-[20.1875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-[13px] md:leading-[19.5px]"
                                >
                                  <div
                                    className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] w-full md:text-[13px] md:leading-[19.5px]"
                                  >
                                    <p
                                      className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]"
                                    >
                                      <strong
                                        className="text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]"
                                      >
                                        Verified Buyer
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                      >
                        <div
                          className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[15px]"
                        >
                          <img
                            src=""
                            alt=""
                            title=""
                            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[103px]"
                          />
                        </div>
                      </div>
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                      >
                        <div
                          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[15px] md:text-base md:leading-6 text-[16.0583px] leading-[24.0875px]"
                        >
                          <div
                            className="box-border caret-transparent outline-[3px] w-full md:text-base md:leading-6 text-[16.0583px] leading-[24.0875px]"
                          >
                            <p
                              className="box-border caret-transparent outline-[3px] md:text-base md:leading-6 text-[16.0583px] leading-[24.0875px]"
                            >
                              {props.firstReview}
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
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <div
            className="items-start bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px] box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5 rounded-xl md:mt-[35px]"
          >
            <div
              className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
            >
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <img
                    src=""
                    alt=""
                    title=""
                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-t-xl"
                  />
                </div>
              </div>
              <div
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                >
                  <div
                    className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] pt-[15px] pb-[25px] px-[15px]"
                  >
                    <div
                      className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                    >
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                      >
                        <div
                          className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                        >
                          <div
                            className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
                          >
                            <div
                              className="items-center box-border caret-transparent flex basis-[0%] grow flex-wrap min-h-[auto] outline-[3px]"
                            >
                              <div
                                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                              >
                                <div
                                  className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mr-[5px] ${props.secondNameClassName}`}
                                >
                                  <div
                                    className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] w-full ${props.secondNameClassName}`}
                                  >
                                    <p
                                      className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] ${props.secondNameClassName}`}
                                    >
                                      <strong
                                        className={`text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] ${props.secondNameClassName}`}
                                      >
                                        {props.secondName}
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                              >
                                <div
                                  className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mr-[5px]"
                                >
                                  <img
                                    src=""
                                    alt=""
                                    title=""
                                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[18px]"
                                  />
                                </div>
                              </div>
                              <div
                                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                              >
                                <div
                                  className="text-lime-600 text-[13.4583px] box-border caret-transparent leading-[20.1875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-[13px] md:leading-[19.5px]"
                                >
                                  <div
                                    className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] w-full md:text-[13px] md:leading-[19.5px]"
                                  >
                                    <p
                                      className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]"
                                    >
                                      <strong
                                        className="text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]"
                                      >
                                        Verified Buyer
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                      >
                        <div
                          className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[15px]"
                        >
                          <img
                            src=""
                            alt=""
                            title=""
                            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[103px]"
                          />
                        </div>
                      </div>
                      <div
                        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                      >
                        <div
                          className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[15px] md:text-base md:leading-6 ${props.secondReviewClassName}`}
                        >
                          <div
                            className={`box-border caret-transparent outline-[3px] w-full md:text-base md:leading-6 ${props.secondReviewClassName}`}
                          >
                            <p
                              className={`box-border caret-transparent outline-[3px] md:text-base md:leading-6 ${props.secondReviewClassName}`}
                            >
                              {props.secondReview}
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
  );
};
