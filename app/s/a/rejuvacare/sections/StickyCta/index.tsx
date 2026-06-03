export const StickyCta = () => {
  return (
    <div className="fixed items-stretch self-center bg-white box-border caret-transparent hidden flex-row-reverse flex-wrap justify-start max-w-full outline-[3px] w-full z-[99999] border-neutral-200 px-2.5 py-0 border-t-2 border-solid bottom-0 md:sticky md:flex-row md:flex-nowrap md:py-2.5">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1200px] min-h-[25px] outline-[3px] w-min mx-auto pt-[5px] pb-2.5 px-px md:basis-0 md:py-px">
        <div className="box-border caret-transparent outline-[3px] w-full p-px">
          <div className="box-border caret-transparent flex justify-center outline-[3px] w-full mt-px p-px">
            <a
              title="Get up to 50% off today only  "
              className="text-white text-xl font-extrabold self-center bg-emerald-500 shadow-[rgba(0,0,0,0.19)_0px_2px_7px_1px] box-border caret-transparent flex justify-center leading-[23px] max-w-full outline-[3px] text-center w-full px-2.5 py-5 rounded-[10px] font-montserrat md:text-[19px] md:leading-[23.16px] md:w-[367px]"
            >
              Get 50% off today only  ➜
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
