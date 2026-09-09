import { ProblemOverview } from "./components/ProblemOverview"
import { SolutionCard } from "./components/SolutionCard"

export const ProblemSolutionSection = () => {
  return (
    <div className="items-stretch bg-stone-200 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pt-[30px] pb-10 px-5 md:flex-nowrap md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <ProblemOverview />
          <SolutionCard />
        </div>
      </div>
    </div>
  );
};
