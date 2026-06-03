import { useScrollReveal } from "../../hooks/useScrollReveal";

export const ArticleIntro = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="caret-transparent max-w-[830px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal caret-transparent mb-[30px] md:mb-10">
        <h1 className="text-[32px] font-bold caret-transparent leading-[37.44px] font-archivo md:text-[50px] md:leading-[58.5px]">
          Why this tiny German hearing aid is taking the U.S. by storm,
          according to the experts
        </h1>
      </div>
      <div className="reveal reveal-delay-1 caret-transparent mb-2.5">
        <p className="text-stone-500 text-sm caret-transparent leading-[18.2px] md:text-lg md:leading-[23.4px]">
          By Kate McNamara | Reviewed by Dr. Emily Russell, Au.D.
        </p>
      </div>
      <div className="reveal reveal-delay-2 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          <mark className="font-bold bg-orange-200 caret-transparent">
            Alarming fact:
          </mark>
          {" "}More than 48 million Americans hear so poorly that their quality of
          life significantly suffers as a result.
        </p>
      </div>
      <div className="reveal reveal-delay-3 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          The problem: Most wait too long to act, hoping their hearing will
          improve on its own. Sadly, it never does.
        </p>
      </div>
      <div className="reveal reveal-delay-4 caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          But now,{" "}
          <strong className="font-bold caret-transparent">
            a game-changing device is revolutionizing the hearing aid industry,
          </strong>
          {" "}and experts say it&#39;s the biggest breakthrough they've seen in over
          a decade:
        </p>
      </div>
      <div className="reveal caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          It's hear.com's{" "}
          <strong className="font-bold caret-transparent">
            new Horizon IX hearing aid.
          </strong>
        </p>
      </div>
      <div className="reveal caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          And it's the perfect solution at the perfect time—when more and more
          people are eager to maintain their quality of life and overcome these
          limitations.
        </p>
      </div>
      <div className="reveal caret-transparent mb-[30px]">
        <p className="text-[26px] caret-transparent leading-[39px]">
          It's no wonder{" "}
          <mark className="font-bold bg-orange-200 caret-transparent">
            Horizon IX has taken the U.S. by storm since its release earlier
            this year,
          </mark>
          {" "}offering hope and unprecedented clarity to thousands across America.
        </p>
      </div>
    </div>
  );
};
