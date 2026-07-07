import { PrimepicksSidebarScorePanel } from "./PrimepicksSidebarScorePanel";
import { PrimepicksSidebarProsCons } from "./PrimepicksSidebarProsCons";

export const PrimepicksSidebar = () => {
  return (
    <aside className="box-border caret-transparent hidden min-h-0 min-w-0 w-[300px] md:block md:min-h-[auto] md:min-w-[auto]">
      <div className="sticky bg-zinc-50 box-border caret-transparent gap-x-2 flex flex-col gap-y-2 border border-neutral-200 p-4 rounded-[10px] border-solid top-5">
        <PrimepicksSidebarScorePanel
          variant="review"
          score="9.8"
          starsImageUrl="/images/primepicks/green-stars.svg"
          rating="Excellent"
          reviewCount="9,137 Customer Reviews"
        />
        <PrimepicksSidebarScorePanel
          variant="breakdown"
          categories={[
            {
              label: "Quality",
              score: 10,
              barClassName:
                "absolute bg-emerald-500 box-border caret-transparent h-full w-full rounded-sm left-0 top-0",
            },
            {
              label: "Easy to Use",
              score: 10,
              barClassName:
                "absolute bg-emerald-500 box-border caret-transparent h-full w-full rounded-sm left-0 top-0",
            },
            {
              label: "Price",
              score: 9,
              barClassName:
                "absolute bg-emerald-500 box-border caret-transparent h-full w-[90%] rounded-sm left-0 top-0",
            },
            {
              label: "Support",
              score: 9,
              barClassName:
                "absolute bg-emerald-500 box-border caret-transparent h-full w-[90%] rounded-sm left-0 top-0",
              isLast: true,
            },
          ]}
        />
        <h4 className="text-emerald-500 text-lg font-bold box-border caret-transparent leading-5 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          PROS
        </h4>
        <PrimepicksSidebarProsCons
          textClassName="text-neutral-600 box-border caret-transparent block leading-[22px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          items={[
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Ultra-slim 1.8mm profile",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "5-month battery life",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Fast wireless charging",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Left-behind alerts",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "No subscription fees",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "IP68 water resistant",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Apple Find My certified",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Global tracking network",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Premium card material",
            },
            {
              iconSrc:
                "/images/primepicks/icon-3.svg",
              text: "Loud ring-to-find sound",
            },
          ]}
        />
        <h4 className="text-red-400 text-lg font-bold box-border caret-transparent leading-5 min-h-0 min-w-0 mt-2 md:min-h-[auto] md:min-w-[auto]">
          CONS
        </h4>
        <PrimepicksSidebarProsCons
          items={[
            {
              iconSrc:
                "/images/primepicks/icon-4.svg",
              text: "Often out of stock due to high demand",
            },
          ]}
          textClassName="text-neutral-600 box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
        />
        <a
          href="https://tagsleyshop.com/pp/us/"
          className="relative text-white text-xl font-bold items-center bg-indigo-600 shadow-[rgb(2,26,49)_0px_2px_0px_0px] box-border caret-transparent gap-x-3 flex justify-center min-h-0 min-w-[210px] gap-y-3 text-center uppercase w-full mt-2 px-6 py-5 rounded-[15px] md:min-h-[auto]"
        >
          <span className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            Visit site
          </span>
          <span className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <img
              src="/images/primepicks/icon-1.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 w-[15px]"
            />
          </span>
        </a>
      </div>
    </aside>
  );
};
