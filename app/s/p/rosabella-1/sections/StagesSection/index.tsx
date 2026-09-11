import copy from "../../copy.json"
import media from "../../media.json"
import { StageCard } from "./components/StageCard"

export const StagesSection = () => {
  const { heading, items } = copy.stages;
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pt-[60px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            {heading}
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-[30px] md:flex-row md:mt-10">
            {items.map((item, i) => (
              <>
                {i > 0 && (
                  <div key={`gap-${i}`} className="box-border caret-transparent basis-5 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
                )}
                <StageCard
                  key={item.stage}
                  imageUrl={media.stages.images[i]}
                  stage={item.stage}
                  title={item.title}
                  description={item.description}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
