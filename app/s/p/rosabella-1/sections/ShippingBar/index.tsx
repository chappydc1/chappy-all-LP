import copy from "../../copy.json"

export const ShippingBar = () => {
  const { message, threshold } = copy.shippingBar;
  return (
    <div className="items-stretch bg-emerald-800 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-1.5 md:flex-nowrap md:py-2.5">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="text-white text-xs font-bold box-border caret-transparent leading-[14.4px] outline-[3px] p-px font-montserrat text-center md:text-sm md:leading-[16.8px]">
          {message}{" "}
          <span className="text-xs box-border caret-transparent leading-[14.4px] outline-[3px] md:text-sm md:leading-[16.8px]">
            {threshold}
          </span>
          +
        </div>
      </div>
    </div>
  );
};
