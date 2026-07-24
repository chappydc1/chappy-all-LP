import { FealsAnnouncementBar } from "./sections/AnnouncementBar";
import { FealsHeader } from "./sections/Header";
import { FealsMainContent } from "./sections/MainContent";
import { FealsAccountModal } from "./components/FealsAccountModal";
import { FealsCartDrawer } from "./components/FealsCartDrawer";

export const FealsApp = () => {
  return (
    <>
      <FealsAnnouncementBar />
      <FealsHeader />
      <FealsMainContent />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]"></div>
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <FealsAccountModal />
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]"></div>
          </div>
        </div>
      </div>
      <div className="fixed items-center box-border caret-transparent flex flex-col justify-center outline-[3px] translate-x-[-50.0%] z-[100000] p-5 left-2/4 bottom-0"></div>
      <FealsCartDrawer />
      <div className="box-border caret-transparent hidden outline-[3px]">
        <a
          href="https://www.dailystory.com/"
          className="box-border caret-transparent outline-[3px]"
        >
          Powered by DailyStory
        </a>
      </div>
    </>
  );
};
