import copy from "../../copy.json"
import { TimelineItem } from "./components/TimelineItem"
import { GuaranteeCallout } from "./components/GuaranteeCallout"

const CONNECTOR_BASE = "absolute items-start box-border caret-transparent flex h-full justify-start outline-[3px] w-full top-2 md:h-auto md:-top-8 before:accent-auto before:bg-black before:bottom-[-43px] before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[calc(100%_+_26px)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-10 before:outline-[3px] before:pointer-events-auto before:absolute before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:z-[1] before:border-separate before:left-[5px] before:font-apple_system before:md:h-px before:md:w-full before:md:left-[25px] before:md:bottom-2 after:accent-auto after:bg-pink-400 after:bottom-[-43px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[calc(100%_+_26px)] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:no-underline after:indent-[0px] after:normal-case after:visible after:w-px after:z-[1] after:border-separate after:left-[5px] after:font-apple_system after:md:h-px after:md:w-full after:md:left-[25px] after:md:bottom-2";
const CONNECTOR_LAST = "absolute items-start box-border caret-transparent flex h-full justify-start outline-[3px] w-full top-2 md:h-auto md:-top-8";

export const ResultsTimelineSection = () => {
  const { heading, items } = copy.resultsTimeline;
  return (
    <div className="items-stretch bg-stone-200 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-[30px] md:flex-nowrap md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            {heading}
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-[30px] md:flex-row md:mt-[72px]">
            {items.map((item, i) => (
              <>
                {i > 0 && (
                  <div key={`gap-${i}`} className="box-border caret-transparent basis-12 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[38px]"></div>
                )}
                <TimelineItem
                  key={item.week}
                  week={item.week}
                  title={item.title}
                  description={item.description}
                  benefitOne={item.benefitOne}
                  benefitTwo={item.benefitTwo}
                  connectorClassName={i < items.length - 1 ? CONNECTOR_BASE : CONNECTOR_LAST}
                />
              </>
            ))}
          </div>
          <GuaranteeCallout />
        </div>
      </div>
    </div>
  );
};
