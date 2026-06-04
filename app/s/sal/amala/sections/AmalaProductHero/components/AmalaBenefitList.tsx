import type { AmalaProductHeroBenefit } from "../../AmalaProductHero/types";

const CHECK_ICON_SRC =
  "/images/amala/1763702956506_1730181221_checkIcon.svg";

type AmalaBenefitListProps = {
  benefits: AmalaProductHeroBenefit[];
};

export const AmalaBenefitList = ({ benefits }: AmalaBenefitListProps) => {
  return (
    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] mt-5">
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full gap-2.5">
        {benefits.map((benefit) => (
          <div
            key={benefit.text}
            className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
          >
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[35px] min-h-[auto] min-w-[35px] outline-[3px] w-[35px]">
              <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-0.5">
                <img
                  src={benefit.iconSrc || CHECK_ICON_SRC}
                  alt={benefit.iconAlt || ""}
                  sizes="565px"
                  title=""
                  className="box-border caret-transparent h-[22px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[22px]"
                />
              </div>
            </div>
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
              <p className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-left md:text-base md:leading-6">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
