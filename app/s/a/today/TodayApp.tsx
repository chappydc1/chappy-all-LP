import { TodayHeader } from "./sections/Header";
import { TodayMainContent } from "./sections/MainContent";
import { TodayFooter } from "./sections/Footer";

export const TodayApp = () => {
  return (
    <>
      <TodayHeader />
      <TodayMainContent />
      <TodayFooter />
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
    </>
  );
};
