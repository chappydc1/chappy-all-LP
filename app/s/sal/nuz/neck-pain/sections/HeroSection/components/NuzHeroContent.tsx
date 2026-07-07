import { NuzTrustScore } from "./NuzTrustScore";
import { NuzBenefitTags } from "./NuzBenefitTags";
import { NuzCTAButton } from "../../../components/NuzCTAButton";
import { NuzShippingInfo } from "./NuzShippingInfo";
import { NuzGuaranteeCard } from "./NuzGuaranteeCard";
import { NuzFAQAccordion } from "../../../components/NuzFAQAccordion";
import { content } from "../../../content";

export const NuzHeroContent = () => {
  const h = content.hero;
  return (
    <div className="items-center bg-stone-100 box-border caret-transparent flex flex-col justify-center min-h-0 min-w-0 w-full px-[15px] py-5 top-0 md:min-h-[auto] md:min-w-[auto] md:px-5">
      <div className="box-border caret-transparent max-w-[500px] min-h-0 min-w-0 w-full pr-[5px] py-2.5 rounded-[10px] md:min-h-[auto] md:min-w-[auto] md:pr-5">
        <div className="box-border caret-transparent hidden md:block">
          <NuzTrustScore />
          <h1 className="relative text-sky-950 text-3xl font-extrabold box-border caret-transparent leading-[34px] text-left w-[90%] mt-0 mb-2 md:static md:text-[32px] md:leading-[38px] md:w-auto md:mt-[21.44px]">
            {h.headline}
          </h1>
        </div>
        <div className="items-stretch box-border caret-transparent gap-x-0 flex flex-col justify-center gap-y-0 w-full md:[align-items:normal] md:gap-x-[normal] md:block md:flex-row md:justify-normal md:gap-y-[normal]">
          <div className="box-border caret-transparent">
            <div
              className="text-base font-bold box-border caret-transparent leading-[21px] mb-2 md:text-lg md:leading-[26px]"
              style={{ color: "rgb(9, 36, 71)" }}
            >
              {h.subheadline}
            </div>
          </div>
          <div className="box-border caret-transparent mt-3 mb-0 md:my-2.5">
            <NuzBenefitTags />
          </div>
          <NuzCTAButton countdownSeconds={h.ctaCountdownSeconds} />
          <div className="text-white text-lg font-bold items-center bg-[url('/images/Stripes-01.svg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col h-[50px] justify-center text-center bg-center mt-0 font-roboto md:[align-items:normal] md:bg-none md:bg-repeat md:bg-auto md:hidden md:flex-row md:h-auto md:justify-normal md:bg-left-top md:mt-4">
            <div className="items-center box-border caret-transparent flex justify-between md:[align-items:normal] md:block md:justify-normal">
              <div className="items-center box-border caret-transparent flex ml-2.5 md:[align-items:normal] md:block md:ml-0">
                <div className="box-border caret-transparent leading-[18px] md:leading-5">
                  {h.fastShippingLine}
                </div>
              </div>
            </div>
          </div>
          <NuzShippingInfo />
          <div className="box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-0">
            <NuzGuaranteeCard />
            {h.faq.map((item, i) => {
              if (item.type === "shipping") {
                return (
                  <NuzFAQAccordion
                    key={i}
                    question={item.question}
                    contentType="shipping"
                    shippingDate={item.shippingDate}
                    shippingCountdown={item.shippingCountdown}
                    shippingFrom={item.shippingFrom}
                  />
                );
              }
              if (item.type === "returns") {
                return (
                  <NuzFAQAccordion
                    key={i}
                    question={item.question}
                    contentType="text"
                    textContent={
                      <>
                        Email us at{" "}
                        <a
                          href={`mailto:${item.email}`}
                          className="text-black text-sm box-border caret-transparent leading-[21px] md:text-slate-700 md:text-base md:leading-6"
                        >
                          {item.email}
                        </a>{" "}
                        or call{" "}
                        <a
                          href={`tel:${item.phone.replace(/[^+\d]/g, "")}`}
                          className="text-black text-sm box-border caret-transparent leading-[21px] md:text-slate-700 md:text-base md:leading-6"
                        >
                          {item.phone}
                        </a>
                        . {item.tail}
                      </>
                    }
                  />
                );
              }
              return (
                <NuzFAQAccordion
                  key={i}
                  question={item.question}
                  contentType="text"
                  textContent={item.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
