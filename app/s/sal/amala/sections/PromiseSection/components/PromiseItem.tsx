export type PromiseItemProps = {
  imageSrc: string;
  text: string;
  alt: string;
  title: string;
  layoutVariant: string;
};

export const PromiseItem = (props: PromiseItemProps) => {
  if (props.layoutVariant === "compact") {
    return (
      <div className="box-border caret-transparent flex flex-col outline-[3px] basis-[0%] grow min-h-[auto]">
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="items-center box-border caret-transparent flex outline-[3px] flex-col min-h-[auto] min-w-[auto] w-full">
            <img
              src={props.imageSrc}
              alt={props.alt}
              title={props.title}
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[94px]"
            />
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
          <div className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]">
            <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]">
              <p className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]">
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.layoutVariant === "compactWrapped") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent flex outline-[3px] flex-col min-h-[auto] min-w-[auto] w-full">
          <div className="box-border caret-transparent flex items-start flex-wrap min-h-[auto] min-w-[auto]">
            <div className="box-border caret-transparent flex flex-col outline-[3px] basis-[0%] grow min-h-[auto]">
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="items-center box-border caret-transparent flex outline-[3px] flex-col min-h-[auto] min-w-[auto] w-full">
                  <img
                    src={props.imageSrc}
                    alt={props.alt}
                    title={props.title}
                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[94px]"
                  />
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]">
                  <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]">
                    <p className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]">
                      {props.text}
                    </p>
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
    <div className="box-border caret-transparent flex items-start flex-wrap">
      <div className="box-border caret-transparent flex outline-[3px] basis-[0%] flex-col grow">
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
          <div className="box-border caret-transparent flex flex-col outline-[3px] items-center w-full">
            <img
              src={props.imageSrc}
              alt={props.alt}
              title={props.title}
              className="box-border caret-transparent max-w-full outline-[3px] w-[94px]"
            />
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
          <div className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]">
            <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]">
              <p className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]">
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
