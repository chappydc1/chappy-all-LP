export type FaqItemProps = {
  title: string;
  content: React.ReactNode;
  className: string;
  contentTag: string;
};

export const FaqItem = (props: FaqItemProps) => {
  const ContentTag = props.contentTag as "p" | "h3";

  return (
    <div
      className={`bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 rounded-bl rounded-br rounded-tl rounded-tr border-solid ${props.className}`}
    >
      <div
        className="text-black text-base font-bold box-border caret-transparent flex basis-[0%] justify-between leading-6 min-h-2.5 min-w-[auto] outline-[3px] text-left w-full px-5 py-[15px] rounded-[5px] md:text-[17px] md:leading-[25.5px]"
      >
        <div
          className="text-base box-border caret-transparent flex basis-[0%] flex-col grow leading-6 max-w-[calc(100%_-_30px)] min-h-[auto] min-w-[auto] outline-[3px] w-fit md:text-[17px] md:leading-[25.5px]"
        >
          {props.title}
        </div>
        <img
          src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/icon-1.svg"
          alt="Icon"
          className="text-base box-border caret-transparent h-[15px] leading-6 outline-[3px] w-[15px] mx-[5px] my-auto md:text-[17px] md:leading-[25.5px]"
        />
      </div>
      <div
        className="box-border caret-transparent flex basis-[0%] flex-col grow max-h-0 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden"
      >
        <div
          className="relative box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] pt-2.5 pb-5 px-5"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
          >
            <div
              className="text-black text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full"
            >
              <div
                className="box-border caret-transparent outline-[3px] w-full"
              >
                <ContentTag className="box-border caret-transparent outline-[3px]">
                  {props.content}
                </ContentTag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
