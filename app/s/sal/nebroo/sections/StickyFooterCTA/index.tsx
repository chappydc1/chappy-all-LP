export const StickyFooterCTA = () => {
  return (
    <div className="sticky items-stretch bg-slate-500 box-border caret-transparent flex flex-wrap justify-center max-w-full z-[50] pt-[3px] pb-[5px] px-2.5 bottom-0 md:flex-nowrap md:py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.2)]">
      <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min md:basis-0">
        <button
          title="Apply Discount & Check Availability"
          type="button"
          onClick={() => {
            const el = document.getElementById("offer");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative text-slate-500 text-[17px] font-bold items-stretch bg-white shadow-[rgba(37,42,50,0.32)_0px_1px_4px_1px] caret-transparent flex flex-col leading-[normal] max-w-full text-center align-middle w-full mx-auto px-2.5 py-3 rounded-[5px] font-montserrat md:[align-items:normal] md:w-auto md:px-[30px] md:py-2.5 transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-500"
        >
          Apply Discount &amp; Check Availability
        </button>
      </div>
    </div>
  );
};
