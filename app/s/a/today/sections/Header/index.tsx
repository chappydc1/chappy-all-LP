import { TodayNavbar } from "../Header/components/Navbar";
import { TodayMobileNav } from "../Header/components/MobileNav";
import { TodayNewsBar } from "../Header/components/NewsBar";

export const TodayHeader = () => {
  return (
    <header className="bg-white box-border caret-transparent outline-[3px] w-full">
      <TodayNavbar />
      <TodayMobileNav />
      <TodayNewsBar />
    </header>
  );
};
