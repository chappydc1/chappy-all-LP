import { AdvertorialBanner } from "./components/AdvertorialBanner";
import { AlertBanner } from "./components/AlertBanner";
import { ArticleLayout } from "../ArticleLayout";

export const MainLayout = () => {
  return (
    <div className="text-gray-800 text-sm bg-white bg-no-repeat bg-size-[100%] box-border caret-transparent outline-[3px] text-center font-montserrat">
      <main className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full">
        <AdvertorialBanner />
        <AlertBanner />
        <ArticleLayout />
      </main>
    </div>
  );
};
