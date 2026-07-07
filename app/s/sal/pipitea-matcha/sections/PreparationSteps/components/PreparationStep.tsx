export type PipiteaMatchaPreparationStepProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export const PipiteaMatchaPreparationStep = (props: PipiteaMatchaPreparationStepProps) => {
  return (
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
            className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
          >
            <div
              href=""
              className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
            >
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  href=""
                  className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mb-5"
                >
                  <img
                    src={props.imageSrc}
                    alt=""
                    href=""
                    title=""
                    className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-md"
                  />
                </div>
              </div>
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  href=""
                  className="text-black text-[20.4583px] box-border caret-transparent leading-[24.55px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[23px] md:leading-[27.6px]"
                >
                  <div
                    href=""
                    className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] w-full md:text-[23px] md:leading-[27.6px]"
                  >
                    <p
                      href=""
                      className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                    >
                      <strong
                        href=""
                        className="text-[20.4583px] font-bold box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                      >
                        {props.title}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  href=""
                  className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
                >
                  <div
                    href=""
                    className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                  >
                    <p
                      href=""
                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                    >
                      {props.description}
                      <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]" />
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
