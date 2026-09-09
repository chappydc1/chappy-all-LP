import { HeaderLogo } from "./components/HeaderLogo"

export const Header = () => {
  return (
    <div className="items-stretch bg-zinc-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-3 md:flex-nowrap md:py-5">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <HeaderLogo />
      </div>
    </div>
  );
};
