import { Brand } from "../../Header/components/Brand";
import { NavbarActions } from "../../Header/components/NavbarActions";

export const Navbar = () => {
  return (
    <div className="sticky bg-white border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] z-50 border-b border-solid top-0">
      <div className="items-center box-border caret-transparent flex h-[58px] justify-between max-w-[1284px] outline-[3px] mx-auto px-3 md:h-[60px] md:px-5">
        <Brand />
        <NavbarActions />
      </div>
    </div>
  );
};
