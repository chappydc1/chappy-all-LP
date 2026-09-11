import copy from "../../copy.json"
import { FaqColumn } from "./components/FaqColumn"

export const FaqSection = () => {
  const { eyebrow, heading, columns } = copy.faq;
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-emerald-800 font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-center mb-2.5 font-montserrat">
            {eyebrow}
          </div>
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            {heading}
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-6 md:flex-row md:mt-10">
            <FaqColumn items={columns[0]} />
            <div className="box-border caret-transparent basis-3 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-10"></div>
            <FaqColumn items={columns[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};
