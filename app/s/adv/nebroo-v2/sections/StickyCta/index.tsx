export const StickyCta = () => {
  return (
    <div className="sticky items-stretch bg-zinc-400 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] z-10 px-2.5 py-[15px] bottom-0 md:flex-nowrap">
      <div className="relative items-center box-border caret-transparent flex basis-full flex-row-reverse grow justify-center max-w-[1200px] min-h-[25px] outline-[3px] w-min md:basis-0">
        <a
          title="Get Nebroo Sticky"
          href="https://offer.nebroo.com/"
          className="text-slate-50 text-[22px] font-bold bg-green-700 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] box-border caret-transparent block tracking-[0.02px] leading-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center p-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-2xl md:leading-10 md:px-10 md:py-[25px] hover:bg-green-600"
        >
          GET 70% OFF Nebroo Hearing Aids Now!
        </a>
      </div>
    </div>
  );
};
