import { useState } from "react";

export type AmalaFaqItemProps = {
  question: string;
  answer: string;
  rootClassName: string;
  iconSrc: string;
  iconAlt: string;
};

export const AmalaFaqItem = (props: AmalaFaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 rounded-bl rounded-br rounded-tl rounded-tr border-solid ${props.rootClassName}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black text-base font-bold box-border caret-transparent flex basis-[0%] justify-between leading-6 min-h-2.5 min-w-[auto] outline-[3px] text-left w-full px-5 py-[15px] rounded-[5px] md:text-[17px] md:leading-[25.5px] cursor-pointer"
      >
        <div className="text-base box-border caret-transparent flex basis-[0%] flex-col grow leading-6 max-w-[calc(100%_-_30px)] min-h-[auto] min-w-[auto] outline-[3px] w-fit md:text-[17px] md:leading-[25.5px]">
          {props.question}
        </div>
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className={`text-base box-border caret-transparent h-[15px] leading-6 outline-[3px] w-[15px] mx-[5px] my-auto md:text-[17px] md:leading-[25.5px] transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden transition-[max-height] duration-200 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}
      >
        <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] pt-2.5 pb-5 px-5">
          <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
            <div className="text-black text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full">
              <div className="box-border caret-transparent outline-[3px] w-full">
                <p className="box-border caret-transparent outline-[3px]">
                  {props.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
