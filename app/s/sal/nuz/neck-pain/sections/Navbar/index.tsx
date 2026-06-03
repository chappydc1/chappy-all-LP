import { NavbarMobile } from "./components/NavbarMobile";
import { NavbarDesktop } from "./components/NavbarDesktop";

export const Navbar = () => {
  return (
    <div className="relative bg-sky-950 box-border caret-transparent h-[50px] z-50 pt-0 pb-[13px] px-[15px] md:h-[75px] md:pt-[11px]">
      <NavbarMobile />
      <NavbarDesktop />
    </div>
  );
};
