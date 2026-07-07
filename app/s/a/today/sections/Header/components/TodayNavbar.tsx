import { TodayBrand } from "./TodayBrand";
import { TodayNavbarActions } from "./TodayNavbarActions";

export const TodayNavbar = () => {
  return (
    <div className="sticky bg-white border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] z-50 border-b border-solid top-0">
      <div className="items-center box-border caret-transparent flex h-[58px] justify-between max-w-[1284px] outline-[3px] mx-auto px-3 md:h-[60px] md:px-5">
        <TodayBrand />
        <TodayNavbarActions />
      </div>
    </div>
  );
};
