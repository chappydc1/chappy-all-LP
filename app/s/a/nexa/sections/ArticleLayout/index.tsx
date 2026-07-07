import { NexaArticleContent } from "./components/NexaArticleContent";
import { NexaProductSidebar } from "./components/NexaProductSidebar";

export const NexaArticleLayout = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] mr-px pt-px pb-10 px-px md:flex-nowrap md:mr-0">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1098px] min-h-[25px] outline-[3px] w-min mx-auto pl-2.5 pr-px py-px md:basis-0 md:pl-px">
        <div className="box-border caret-transparent flex outline-[3px] mt-0 pr-2.5 py-3 md:mt-2.5">
          <NexaArticleContent />
          <NexaProductSidebar />
        </div>
      </div>
    </div>
  );
};
