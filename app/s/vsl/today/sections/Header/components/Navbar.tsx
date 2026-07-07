import { TodayBrand } from "../../Header/components/Brand";
import { TodayNavbarActions } from "../../Header/components/NavbarActions";

export const TodayNavbar = () => {
  return (
    <div className="sticky bg-white border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] z-50 border-b border-solid top-0">
      <div className="items-center box-border caret-transparent flex h-[50px] justify-between max-w-[1200px] outline-[3px] mx-auto px-3 md:h-14 md:px-5">
        <TodayBrand />
        <TodayNavbarActions />
      </div>
    </div>
  );
};
