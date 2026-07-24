export const MensHealthCartButton = () => {
  return (
    <a
      href="/cart"
      className="relative text-sm box-border caret-transparent block leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-harmonia_sans_w01_regular before:md:text-base before:md:leading-[25.6px]"
    >
      <img
        src="https://c.animaapp.com/mrag9of1Udpwd9/assets/icon-5.svg"
        alt="Icon"
        className="text-sm box-border caret-transparent h-[22px] leading-[22.4px] outline-[3px] w-[22px] md:text-base md:leading-[25.6px]"
      />
      <div className="absolute text-sm box-border caret-transparent leading-[22.4px] outline-[3px] top-[-5px] left-3.5 md:text-base md:leading-[25.6px]">
        <div className="text-white text-[9px] font-bold items-center bg-zinc-900 box-border caret-transparent grid h-4 justify-items-center leading-[9px] min-w-min opacity-0 outline-[3px] w-4 px-1 rounded-full">
          <span className="caret-transparent block outline-[3px]">
            <span className="box-border caret-transparent outline-[3px]">
              0
            </span>
          </span>
        </div>
      </div>
    </a>
  );
};
