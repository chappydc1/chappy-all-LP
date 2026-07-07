import adv from "../adv.json";
import { renderText } from "../utils/renderText";

export function ZikeeyArticleCTA() {
  const { cta } = adv.article;

  return (
    <section>
      <div className="border-red-600 p-[15px] border-2 border-solid rounded">
        <p className="text-neutral-800 text-[22px] leading-[35.2px] text-left mb-[25px]">
          {renderText(cta.boxText)}
        </p>
      </div>
      <a
        href={cta.buttonUrl}
        className="text-white text-xl font-extrabold bg-teal-600 block text-center w-[90%] mx-auto my-5 p-[15px] rounded-[10px] transition-all duration-200 hover:bg-teal-700 active:scale-95 select-none"
      >
        <span className="inline-flex items-center gap-2">
          <span>{cta.buttonText}</span>
          <span>→</span>
        </span>
      </a>
    </section>
  );
}
