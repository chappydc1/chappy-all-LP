export type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
  wrapperClassName: string;
  innerClassName: string;
};

export const FaqItem = (props: FaqItemProps) => {
  return (
    <div href="" className={props.wrapperClassName}>
      <div
        href=""
        className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
      >
        <div href="" className={props.innerClassName}>
          <div
            href=""
            className="text-base box-border caret-transparent flex basis-[0%] leading-6 min-w-[auto] outline-[3px] md:text-[17px] md:leading-[25.5px] text-black font-bold justify-between min-h-2.5 text-left w-full px-5 py-[15px] rounded-[5px]"
          >
            <div
              href=""
              className="text-base box-border caret-transparent flex basis-[0%] flex-col grow leading-6 max-w-[calc(100%_-_30px)] min-h-[auto] min-w-[auto] outline-[3px] w-fit md:text-[17px] md:leading-[25.5px]"
            >
              {props.question}
            </div>
            <img
              src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/icon-1.svg"
              alt="Icon"
              className="text-base box-border caret-transparent h-[15px] leading-6 outline-[3px] w-[15px] mx-[5px] my-auto md:text-[17px] md:leading-[25.5px]"
            />
          </div>
          <div
            href=""
            className="box-border caret-transparent flex basis-[0%] flex-col grow max-h-0 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden"
          >
            <div
              href=""
              className="relative box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] pt-2.5 pb-5 px-5"
            >
              <div
                href=""
                className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
              >
                <div
                  href=""
                  className="text-black text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full"
                >
                  <div
                    href=""
                    className="box-border caret-transparent outline-[3px] w-full"
                  >
                    <p
                      href=""
                      className="box-border caret-transparent outline-[3px]"
                    >
                      {props.answer}
                      <br className="box-border caret-transparent outline-[3px]" />
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
