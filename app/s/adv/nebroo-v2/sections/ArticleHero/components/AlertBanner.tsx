export const AlertBanner = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative bg-orange-100 box-border caret-transparent basis-full grow max-w-full min-h-[25px] outline-[3px] w-min border-lime-200 pt-0 pb-2.5 px-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-y-[3px] border-l border-r border-solid md:basis-0 md:pt-2.5">
        <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start outline-[3px] md:flex-nowrap"></div>
        <div className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left pt-2.5 pb-px px-px font-montserrat md:text-[23px] md:leading-[34.5px] md:pb-2.5">
          <b className="text-[17px] font-bold box-border caret-transparent leading-[25.5px] outline-[3px] md:text-[23px] md:leading-[34.5px]">
            <span className="text-red-600 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] md:text-[23px] md:leading-[34.5px]">
              UPDATE:
            </span>
          </b>
          Nebroo Hearing Aids SELLING OUT faster than expected! Lock in your
          order NOW to get 70% OFF + FAST SHIPPING to the US
          <div className="text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] md:text-[23px] md:leading-[34.5px]"></div>
          <div className="text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] md:text-[23px] md:leading-[34.5px]"></div>
          <div className="text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] md:text-[23px] md:leading-[34.5px]"></div>
        </div>
      </div>
    </div>
  );
};
