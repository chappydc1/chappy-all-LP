export type PipiteaHeroAccordionProps = {
  title: string;
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
};

export const PipiteaHeroAccordion = (props: PipiteaHeroAccordionProps) => {
  return (
    <div
      className="border-b-zinc-900/10 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border-b"
    >
      <div
        className="text-black text-base font-bold box-border caret-transparent flex basis-[0%] justify-between leading-6 min-h-2.5 min-w-[auto] outline-[3px] text-left w-full py-[17px] rounded-[5px] md:text-[17px] md:leading-[25.5px]"
      >
        <div
          className="text-base box-border caret-transparent flex basis-[0%] flex-col grow leading-6 max-w-[calc(100%_-_30px)] min-h-[auto] min-w-[auto] outline-[3px] w-fit md:text-[17px] md:leading-[25.5px]"
        >
          {props.title}
        </div>
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className="text-base box-border caret-transparent h-[15px] leading-6 outline-[3px] w-[15px] mx-[5px] my-auto md:text-[17px] md:leading-[25.5px]"
        />
      </div>
      <div
        className="box-border caret-transparent flex basis-[0%] flex-col grow max-h-0 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden"
      >
        <div
          className="relative box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] pb-5"
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
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
