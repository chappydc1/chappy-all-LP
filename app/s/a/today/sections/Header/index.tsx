import { TodayNavbar } from "./components/TodayNavbar";
import { TodayMobileNav } from "./components/TodayMobileNav";
import { TodayNewsBar } from "./components/TodayNewsBar";

export const TodayHeader = () => {
  return (
    <header className="bg-white box-border caret-transparent outline-[3px] w-full">
      <TodayNavbar />
      <TodayMobileNav />
      <TodayNewsBar />
    </header>
  );
};
