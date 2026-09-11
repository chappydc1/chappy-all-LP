import copy from "../../../copy.json"
import media from "../../../media.json"

export const ProductBenefits = () => {
  const benefits = copy.productHero.benefits;
  return (
    <div className="bg-stone-200/40 box-border caret-transparent max-w-[482px] outline-[3px] w-full mr-auto mt-5 p-4 rounded-sm">
      {benefits.map((benefit, i) => (
        <div key={i} className={`box-border caret-transparent flex outline-[3px] w-full${i > 0 ? " mt-4" : ""}`}>
          <img
            title=""
            src={media.icons.checkmark}
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-4 mr-2"
          />
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            <span className="text-[15px] font-medium box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
              {benefit.label}
            </span>{" "}- {benefit.detail}
          </div>
        </div>
      ))}
    </div>
  );
};
