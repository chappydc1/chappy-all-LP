import { MensHealthCurrencySelector } from "./CurrencySelector";
import { MensHealthCartButton } from "./CartButton";

export const MensHealthHeaderActions = () => {
  return (
    <div className="text-sm items-center box-border caret-transparent gap-x-3 flex flex-wrap col-end-[secondary-nav] col-start-[secondary-nav] row-end-[secondary-nav] row-start-[secondary-nav] justify-end justify-self-end leading-[22.4px] outline-[3px] gap-y-3 md:text-base md:gap-x-6 md:leading-[25.6px]">
      <ul className="text-sm items-center box-border caret-transparent gap-x-4 flex leading-[22.4px] list-none outline-[3px] gap-y-4 pl-0 md:text-base md:gap-x-6 md:leading-[25.6px] md:gap-y-6">
        <li className="text-sm box-border caret-transparent hidden shrink-0 leading-[22.4px] outline-[3px] md:text-base md:block md:leading-[25.6px]">
          <MensHealthCurrencySelector />
        </li>
        <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <a
            href="/a/account/login"
            className="relative text-sm box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-harmonia_sans_w01_regular before:md:text-base before:md:leading-[25.6px]"
          >
            <img
              src="https://c.animaapp.com/mrag9of1Udpwd9/assets/icon-4.svg"
              alt="Icon"
              className="text-sm box-border caret-transparent h-[22px] leading-[22.4px] outline-[3px] w-[22px] md:text-base md:leading-[25.6px]"
            />
          </a>
        </li>
        <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <MensHealthCartButton />
        </li>
      </ul>
    </div>
  );
};
