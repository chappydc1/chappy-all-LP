export const MensHealthCurrencySelector = () => {
  return (
    <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
      <button
        type="button"
        aria-label="Change country or currency"
        className="text-sm items-center bg-transparent caret-transparent gap-x-2.5 flex leading-[22.4px] outline-[3px] gap-y-2.5 p-0 md:text-base md:leading-[25.6px]"
      >
        <div className="text-sm items-center box-border caret-transparent gap-x-2 hidden leading-[22.4px] outline-[3px] gap-y-2 md:text-base md:leading-[25.6px]">
          <span className="text-sm bg-[url('https://ultimapeak.com/cdn/shop/t/169/assets/country-flags.png?v=37230036826556269641772204443')] bg-no-repeat box-border caret-transparent shrink-0 h-5 leading-[22.4px] outline-[3px] w-5 bg-[position:-126px_-315px] md:text-base md:leading-[25.6px]"></span>
          <span className="text-xs font-bold box-border caret-transparent leading-[19.2px] outline-[3px] md:text-sm md:leading-[22.4px]">
            USD $
          </span>
        </div>
        <img
          src="https://c.animaapp.com/mrag9of1Udpwd9/assets/icon-2.svg"
          alt="Icon"
          className="text-sm box-border caret-transparent hidden shrink-0 h-[7px] leading-[22.4px] outline-[3px] w-2.5 md:text-base md:leading-[25.6px]"
        />
      </button>
    </div>
  );
};
