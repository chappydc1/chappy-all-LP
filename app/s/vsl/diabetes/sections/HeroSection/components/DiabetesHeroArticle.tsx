import { DiabetesVideoPlayer } from "../../../components/DiabetesVideoPlayer";

export const DiabetesHeroArticle = () => {
  return (
    <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-4 md:max-w-[1140px] md:px-3">
      <p className="text-zinc-600 text-xs box-border caret-transparent leading-[18px] outline-[3px] text-left mb-2 pt-5">
        <b className="text-black text-[13px] font-bold box-border caret-transparent leading-[19.5px] outline-[3px]">
          Dr. William Li{" "}
        </b>
        <br className="box-border caret-transparent outline-[3px]" />
        Updated 30 minutes ago{" "}
        <span className="box-border caret-transparent outline-[3px]">
          05/23/2026
        </span>
      </p>
      <div className="box-border caret-transparent max-w-[1000px] outline-[3px] mx-auto pt-1">
        <h2 className="text-2xl font-bold box-border caret-transparent leading-[28.8px] outline-[3px] mb-6 md:text-[32px] md:leading-[38.4px]">
          <span className="text-white text-2xl bg-red-600 box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[32px] md:leading-[38.4px]">
            No Insulin, No Metformin...
          </span>
          {" "}Just a Natural Honey Blend! More than 4,847 Americans are Using this
          Recipe to
          <span className="text-red-600 text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[32px] md:leading-[38.4px]">
            Reverse Type 2 Diabetes in 21 Days.
          </span>
        </h2>
        <DiabetesVideoPlayer />
        <img
          src="/images/seen-on.webp"
          className="box-border caret-transparent inline max-w-[500px] outline-[3px] w-full mt-5 md:w-4/5"
          alt="As seen in"
        />
      </div>
    </div>
  );
};
