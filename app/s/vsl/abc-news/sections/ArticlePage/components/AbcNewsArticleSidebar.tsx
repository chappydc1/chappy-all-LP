import { AbcNewsPopularReadsSidebar } from "./AbcNewsPopularReadsSidebar";
import { AbcNewsLivePromo } from "./AbcNewsLivePromo";
import { AbcNewsSidebarAd } from "./AbcNewsSidebarAd";

export const AbcNewsArticleSidebar = () => {
  return (
    <div className="box-border caret-transparent hidden col-end-auto col-start-auto min-h-0 min-w-0 outline-[3px] md:block md:col-end-[span_8] md:col-start-[17] md:min-h-[auto] md:min-w-[auto]">
      <div className="box-border caret-transparent outline-[3px] mt-6 md:mt-12">
        <div className="box-border caret-transparent outline-[3px] mb-10">
          <AbcNewsPopularReadsSidebar />
        </div>
        <AbcNewsLivePromo />
        <AbcNewsSidebarAd />
      </div>
    </div>
  );
};
