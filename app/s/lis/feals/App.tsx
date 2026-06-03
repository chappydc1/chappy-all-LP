import { CookieConsent } from "./components/CookieConsent";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Header } from "./sections/Header";
import { MainContent } from "./sections/MainContent";
import { LegacyFooter } from "./sections/LegacyFooter";
import { AccountModal } from "./components/AccountModal";
import { CartDrawer } from "./components/CartDrawer";

export const App = () => {
  return (
    <>
      <CookieConsent />
      <AnnouncementBar />
      <Header />
      <MainContent />
      <LegacyFooter />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]"></div>
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <AccountModal />
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
      <CartDrawer />
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
