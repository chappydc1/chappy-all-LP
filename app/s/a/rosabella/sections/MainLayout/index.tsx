import { RosabellaAdvertorialBanner } from "./components/AdvertorialBanner";
import { RosabellaAlertBanner } from "./components/AlertBanner";
import { RosabellaArticleLayout } from "../ArticleLayout";

export const RosabellaMainLayout = () => {
  return (
    <div className="text-gray-800 text-sm bg-white bg-no-repeat bg-size-[100%] box-border caret-transparent outline-[3px] text-center font-montserrat">
      <main className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full">
        <RosabellaAdvertorialBanner />
        <RosabellaAlertBanner />
        <RosabellaArticleLayout />
      </main>
    </div>
  );
};
