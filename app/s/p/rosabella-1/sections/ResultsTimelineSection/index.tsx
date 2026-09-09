import { TimelineItem } from "./components/TimelineItem"
import { GuaranteeCallout } from "./components/GuaranteeCallout"

export const ResultsTimelineSection = () => {
  return (
    <div className="items-stretch bg-stone-200 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-[30px] md:flex-nowrap md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            What Rosabella Beetroot Users Experience Over Time
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-[30px] md:flex-row md:mt-[72px]">
            <TimelineItem
              week="Week 1-2:"
              title="Circulation Support Begins"
              description="Your body starts responding to the natural nitrates in beetroot as daily blood flow support kicks in."
              benefitOne="More consistent energy throughout the day"
              benefitTwo="Less of that heavy sluggish feeling"
              connectorClassName="absolute items-start box-border caret-transparent flex h-full justify-start outline-[3px] w-full top-2 md:h-auto md:-top-8 before:accent-auto before:bg-black before:bottom-[-43px] before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[calc(100%_+_26px)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-10 before:outline-[3px] before:pointer-events-auto before:absolute before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:z-[1] before:border-separate before:left-[5px] before:font-apple_system before:md:h-px before:md:w-full before:md:left-[25px] before:md:bottom-2 after:accent-auto after:bg-pink-400 after:bottom-[-43px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[calc(100%_+_26px)] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:no-underline after:indent-[0px] after:normal-case after:visible after:w-px after:z-[1] after:border-separate after:left-[5px] after:font-apple_system after:md:h-px after:md:w-full after:md:left-[25px] after:md:bottom-2"
            />
            <div className="box-border caret-transparent basis-12 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[38px]"></div>
            <TimelineItem
              week="Week 3-4:"
              title="Energy and Warmth Improve"
              description="As circulation is better supported, you start noticing real differences in how your body feels day to day."
              benefitOne="Hands and feet feel warmer"
              benefitTwo="Afternoon energy feels steadier"
              connectorClassName="absolute items-start box-border caret-transparent flex h-full justify-start outline-[3px] w-full top-2 md:h-auto md:-top-8 before:accent-auto before:bg-black before:bottom-[-43px] before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[calc(100%_+_26px)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-10 before:outline-[3px] before:pointer-events-auto before:absolute before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:z-[1] before:border-separate before:left-[5px] before:font-apple_system before:md:h-px before:md:w-full before:md:left-[25px] before:md:bottom-2 after:accent-auto after:bg-pink-400 after:bottom-[-43px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[calc(100%_+_26px)] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:no-underline after:indent-[0px] after:normal-case after:visible after:w-px after:z-[1] after:border-separate after:left-[5px] after:font-apple_system after:md:h-px after:md:w-full after:md:left-[25px] after:md:bottom-2"
            />
            <div className="box-border caret-transparent basis-12 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[38px]"></div>
            <TimelineItem
              week="Week 5-8:"
              title="Compounding Circulation Benefits"
              description="Ongoing daily use helps maintain healthy blood flow with clearer signs of improvement overall."
              benefitOne="More stamina during physical activity"
              benefitTwo="Sharper mental clarity throughout the day"
              connectorClassName="absolute items-start box-border caret-transparent flex h-full justify-start outline-[3px] w-full top-2 md:h-auto md:-top-8 before:accent-auto before:bg-black before:bottom-[-43px] before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[calc(100%_+_26px)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-10 before:outline-[3px] before:pointer-events-auto before:absolute before:no-underline before:indent-[0px] before:normal-case before:visible before:w-px before:z-[1] before:border-separate before:left-[5px] before:font-apple_system before:md:h-px before:md:w-full before:md:left-[25px] before:md:bottom-2 after:accent-auto after:bg-pink-400 after:bottom-[-43px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[calc(100%_+_26px)] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:no-underline after:indent-[0px] after:normal-case after:visible after:w-px after:z-[1] after:border-separate after:left-[5px] after:font-apple_system after:md:h-px after:md:w-full after:md:left-[25px] after:md:bottom-2"
            />
            <div className="box-border caret-transparent basis-12 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[38px]"></div>
            <TimelineItem
              week="Week 9-12+:"
              title="Long Term Circulatory Support"
              description="With consistent use, healthy circulation is better supported as part of a long term approach to daily wellness."
              benefitOne="Sustained energy levels"
              benefitTwo="Greater overall vitality and wellbeing"
              connectorClassName="absolute items-start box-border caret-transparent flex h-full justify-start outline-[3px] w-full top-2 md:h-auto md:-top-8"
            />
          </div>
          <GuaranteeCallout />
        </div>
      </div>
    </div>
  );
};
