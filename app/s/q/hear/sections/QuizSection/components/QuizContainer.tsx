import { QuizViewport } from "../../QuizSection/components/QuizViewport";

export const QuizContainer = () => {
  return (
    <div className="caret-transparent outline-[3px]">
      <div className="text-zinc-800 text-sm caret-transparent leading-5 outline-[3px] mx-auto font-georgia">
        <div className="relative bg-sky-950 box-border caret-transparent hidden min-h-10 outline-[3px] text-center -mt-2.5 px-[15px] py-2.5">
          <span className="text-white text-[28px] font-bold box-border caret-transparent block leading-[34px] outline-[3px]"></span>
        </div>
        <QuizViewport />
      </div>
    </div>
  );
};
