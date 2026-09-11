import { FaqColumn } from "./components/FaqColumn"

export const FaqSection = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-emerald-800 font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-center mb-2.5 font-montserrat">
            Frequently Asked Questions
          </div>
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            Everything You Want to Know Before You Order
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-6 md:flex-row md:mt-10">
            <FaqColumn
              items={[
                {
                  question: "How do I take Rosabella Beetroot?",
                  answer:
                    "Take 2 capsules daily with water, ideally in the morning. Taking Rosabella Beetroot consistently helps support healthy blood flow and circulation over time. Regular daily use is key.",
                  closedIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-13.svg",
                  openIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-14.svg",
                },
                {
                  question: "When will I see results?",
                  answer:
                    "Many users notice improvements in energy levels and circulation within the first 2 weeks. Overall vitality and daily stamina often continue to improve over the following weeks. Long term circulatory support builds gradually with consistent daily use.",
                  closedIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-15.svg",
                  openIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-16.svg",
                },
                {
                  question: "What if it doesn't work for me?",
                  answer:
                    "You are covered by our 90 Day Empty Bottle Guarantee. Try Rosabella Beetroot for a full 90 days. If you are not satisfied, contact us for a full refund. No need to return the empty bottles.",
                  closedIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-17.svg",
                  openIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-18.svg",
                },
              ]}
            />
            <div className="box-border caret-transparent basis-3 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-10"></div>
            <FaqColumn
              items={[
                {
                  question: "Is this a natural formula?",
                  answer:
                    "Yes. Rosabella Beetroot contains a single ingredient: pure organic beetroot powder. No fillers, binders, or synthetic ingredients. Non GMO and third party tested for purity and quality.",
                  closedIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-19.svg",
                  openIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-20.svg",
                },
                {
                  question: "Will this help with my energy levels?",
                  answer:
                    "Rosabella Beetroot naturally contains dietary nitrates, which play a key role in how the body supports healthy blood flow and oxygen delivery. Rather than forcing stimulation like caffeine, it supports your body's natural circulation and energy systems over time.",
                  closedIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-21.svg",
                  openIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-22.svg",
                },
                {
                  question: "How fast is shipping?",
                  answer:
                    "Orders ship from our US facility within 24 hours. Tracking is provided immediately and most US orders arrive within 3 to 5 business days.",
                  closedIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-23.svg",
                  openIconUrl: "/lp-images-files-videos-fonts/p/rosabella-1/icon-24.svg",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
