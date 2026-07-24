import { MensHealthNavigationMenu } from "./components/NavigationMenu";
import { MensHealthHeaderLogo } from "./components/HeaderLogo";
import { MensHealthHeaderActions } from "./components/HeaderActions";

export const MensHealthHeader = () => {
  return (
    <header className="relative text-sm box-border caret-transparent hidden leading-[22.4px] outline-[3px] z-10 top-0 md:text-base md:leading-[25.6px]">
      <div className="text-sm box-border caret-transparent block leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="text-sm box-border caret-transparent block leading-[22.4px] outline-[3px] mx-auto md:text-base md:leading-[25.6px]">
          <div className="text-sm items-center backdrop-blur-0 bg-white box-border caret-transparent gap-x-3 grid [grid-template-areas:'main-nav_logo_secondary-nav'] grid-cols-[minmax(0px,1fr)_auto_minmax(0px,1fr)] grid-rows-[auto] leading-[22.4px] outline-[3px] pl-[max(20px,50%_-_800px)] pr-[max(20px,50%_-_800px)] gap-y-3 py-0 font-harmonia_sans_w01_regular md:text-base md:gap-x-6 md:[grid-template-areas:'logo_main-nav_secondary-nav'] md:grid-cols-[minmax(0px,1fr)_fit-content(55%)_minmax(0px,1fr)] md:leading-[25.6px] md:pl-[max(48px,50%_-_800px)] md:pr-[max(48px,50%_-_800px)] md:gap-y-6 md:py-2">
            <div className="text-sm box-border caret-transparent col-end-[main-nav] col-start-[main-nav] row-end-[main-nav] row-start-[main-nav] leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
              <div className="text-sm items-center box-border caret-transparent gap-x-4 flex leading-[22.4px] outline-[3px] gap-y-4 md:text-base md:gap-x-6 md:leading-[25.6px] md:gap-y-6">
                <button
                  type="button"
                  className="relative text-sm bg-transparent caret-transparent block leading-[22.4px] outline-[3px] p-0 md:text-base md:hidden md:leading-[25.6px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-harmonia_sans_w01_regular before:md:text-base before:md:leading-[25.6px]"
                >
                  <img
                    src="https://c.animaapp.com/mrag9of1Udpwd9/assets/icon-1.svg"
                    alt="Icon"
                    className="text-sm box-border caret-transparent h-[22px] leading-[22.4px] outline-[3px] w-[22px] md:text-base md:leading-[25.6px]"
                  />
                </button>
                <MensHealthNavigationMenu />
              </div>
            </div>
            <MensHealthHeaderLogo />
            <MensHealthHeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
};
