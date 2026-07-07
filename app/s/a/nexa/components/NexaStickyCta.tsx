// @ts-nocheck
import adv from "../copy.json";

export const NexaStickyCta = () => {
  return (
    <div
      title="Stickybar"
      {...({ name: "Stickybar" } as { name: string })}
      className="fixed bg-white shadow-[rgb(51,51,51)_0px_2px_20px_3px] box-border caret-transparent hidden outline-[3px] w-full z-[99999] mt-[10%] py-2.5 bottom-0"
    >
      <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pt-[7px] pb-[9px] px-px md:flex-nowrap">
        <div className="box-border caret-transparent block basis-full grow justify-center max-w-none min-h-[25px] outline-[3px] w-full mx-auto p-px md:flex md:max-w-[1140px]">
          <a
            title="Enter link text here"
            loop="none"
            href={adv.meta.ctaUrl}
            className="text-black text-[21px] font-bold bg-yellow-400 box-border caret-transparent block justify-center leading-[21px] max-w-full outline-[3px] text-center mx-[25px] px-2.5 py-[15px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-red-600 md:text-base md:font-normal md:bg-transparent md:hidden md:justify-normal md:leading-4 md:mx-0 md:p-0 md:rounded-none md:font-times_new_roman"
          >
            {adv.stickyCta.mobileText}
          </a>
          <button
            title="5th"
            type="button"
            loop="none"
            className="text-white text-lg font-semibold bg-green-600 caret-transparent hidden justify-start leading-[27px] max-w-full outline-[3px] text-center align-middle border border-green-600 mx-auto my-2.5 px-[75px] py-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-2xl md:leading-9 md:px-[55px]"
          >
            {adv.stickyCta.mobileText}
          </button>
          <button
            title="6th"
            type="button"
            loop="none"
            className="text-white text-lg font-semibold bg-green-600 caret-transparent hidden justify-start leading-[27px] max-w-full outline-[3px] text-center align-middle border border-green-600 mx-auto my-2.5 px-[55px] py-2.5 rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-2xl md:leading-9"
          >
            {adv.stickyCta.desktopText}
          </button>
          <a
            title="GET 50% OFF Now!"
            loop="none"
            href={adv.meta.ctaUrl}
            className="text-black text-xl font-bold bg-yellow-400 box-border caret-transparent hidden leading-5 max-w-full outline-[3px] text-center px-[50px] py-[17px] rounded-bl rounded-br rounded-tl rounded-tr font-montserrat md:text-[27px] md:flex md:leading-[27px] md:px-[140px]"
          >
            {adv.stickyCta.desktopText}
          </a>
        </div>
      </div>
    </div>
  );
};
