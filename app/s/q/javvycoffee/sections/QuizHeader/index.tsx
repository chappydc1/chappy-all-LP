import { QuizHeaderBrand } from "./components/QuizHeaderBrand";
import { QuizHeaderVerification } from "./components/QuizHeaderVerification";

export const QuizHeader = () => {
  return (
    <div className="fixed bg-transparent box-border caret-transparent flex flex-col justify-center min-h-10 outline-[3px] w-full z-[9999] rounded-b-2xl top-[0%] inset-x-[0%] md:min-h-0">
      <div className="items-center bg-white box-border caret-transparent flex flex-col justify-center min-h-10 min-w-[auto] outline-[3px] w-full z-[9999] pb-2.5 top-[0%] inset-x-[0%] md:min-h-[auto] md:pb-2">
        <div className="items-center bg-amber-300 box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:h-[34px]">
          <p className="text-[11.2px] font-medium box-border caret-transparent leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.4px] md:leading-[21.6px]">
            &lt; 1 Minute Protein Coffee Quiz
          </p>
        </div>
        <div className="items-center box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <QuizHeaderBrand />
        </div>
      </div>
      <QuizHeaderVerification />
    </div>
  );
};
