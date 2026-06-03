import { useScrollReveal } from "../../hooks/useScrollReveal";

export const ArticleSection = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="caret-transparent max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal caret-transparent mb-[30px] md:mb-10">
        <h1 className="text-[32px] font-bold caret-transparent leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          What is Horizon IX?
        </h1>
      </div>
      <div className="reveal reveal-delay-1 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          German entrepreneurs Dr. Marco Vietor and Paul Crusius are behind this
          revolutionary new hearing aid. hear.com's Horizon IX device is the
          latest release from this renowned U.S. company, developed in
          collaboration with top audio engineers from Signia (formerly Siemens).
        </p>
      </div>
      <div className="reveal reveal-delay-2 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          Their goal was to combine the best possible speech clarity with a
          comfortable, invisible design using cutting-edge German technology.
        </p>
      </div>
      <div className="reveal reveal-delay-3 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          The result?{" "}
          <strong className="font-bold caret-transparent">
            A hearing aid that's gone viral across the U.S. for making
            conversation and hearing effortless,
          </strong>
          {" "}even in background noise—something that was unthinkable with previous
          generations of hearing aids.
        </p>
      </div>
      <div className="reveal reveal-delay-4 caret-transparent mb-10">
        <p className="text-[26px] caret-transparent leading-[39px]">
          Dr. Marco Vietor explains, "It's a hearing aid people actually want to
          wear.{" "}
          <mark className="font-bold bg-orange-200 caret-transparent">
            It offers amazing speech clarity and smartphone connectivity in a
            virtually invisible design — and all that for a reasonable
            price!&quot;
          </mark>
        </p>
      </div>
    </div>
  );
};
