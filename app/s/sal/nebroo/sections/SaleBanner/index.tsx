export const SaleBanner = () => {
  return (
    <div className="items-stretch bg-slate-500 box-border caret-transparent flex flex-wrap justify-center max-w-full px-0 py-px md:flex-nowrap md:px-2.5 animate-slide-down">
      <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min px-0 py-px md:basis-0 md:px-2.5 text-center">
        <div className="text-white text-[15px] box-border caret-transparent basis-[0%] shrink-0 leading-[17px] px-0 py-2.5 rounded-[1px] font-montserrat md:text-[17px] md:px-2.5 animate-pulse-banner">
          <b className="text-[17px] font-bold box-border caret-transparent md:text-lg">
            {" "}
            🔥 SALE:{" "}
            <span className="text-yellow-400 text-[17px] box-border caret-transparent md:text-lg">
              FREE Shipping + 70% OFF
            </span>
            {" "}Today! 🔥
          </b>
        </div>
      </div>
    </div>
  );
};
