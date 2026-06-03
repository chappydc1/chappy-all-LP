import { FinalCtaButton } from "../FinalCta/components/FinalCtaButton";

export const FinalCta = () => {
  return (
    <div
      role="link"
      className="relative items-center self-stretch bg-stone-50 bg-[url('https://c.animaapp.com/mpkdzooupOfzIE/assets/22.webp')] bg-no-repeat bg-cover box-border caret-transparent gap-x-0 flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] h-[540px] justify-end max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0 overflow-hidden bg-[position:left_20%] pb-12 md:bg-[url('https://cdn.shopify.com/s/files/1/0073/3134/8544/files/dryjanuary-relaxgummies-wine-desktop.png?v=1764776780')] md:flex-row md:justify-center md:max-w-none md:overflow-visible md:bg-[position:left_50%] md:pb-0"
    >
      <div className="relative items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2 w-auto px-4 md:justify-center md:w-6/12 md:px-0">
        <div className="text-stone-600 text-[32px] self-stretch box-border caret-transparent grow shrink tracking-[-1px] leading-9 min-h-[auto] min-w-[auto] outline-[3px] break-words text-center font-bookmania md:text-[40px] md:grow-0 md:shrink-0 md:tracking-[normal] md:leading-[48px] md:font-bookmania">
          <span className="text-[32px] box-border caret-transparent tracking-[-1px] leading-9 outline-[3px] break-words w-full font-bookmania md:text-[40px] md:tracking-[normal] md:leading-[48px] md:font-bookmania">
            <h3 className="text-[32px] box-border caret-transparent tracking-[-1px] leading-9 outline-[3px] break-words font-bookmania md:text-[40px] md:tracking-[normal] md:leading-[48px] md:font-bookmania">
              Ready to take a break from alcohol?
            </h3>
          </span>
        </div>
        <div className="text-stone-600 text-base self-stretch box-border caret-transparent shrink-0 leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center font-ll_brown_regular_web md:text-xl md:leading-7">
          <span className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words w-full md:text-xl md:leading-7">
            <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-xl md:leading-7">
              Try Feals Relax Gummies risk-free and make the switch to feel
              better today.
            </p>
          </span>
        </div>
        <FinalCtaButton />
      </div>
    </div>
  );
};
