import { HowItWorksStep } from "./components/HowItWorksStep";
import { content } from "../../content";

export const HowItWorksSection = () => {
  const h = content.howItWorks;
  return (
    <div className="box-border caret-transparent">
      <div className="bg-white/60 px-5 pt-12 md:pt-16">
        <h1 className="text-sky-950 text-2xl font-extrabold text-center mx-auto md:text-4xl md:max-w-[900px]">
          {h.headline}
        </h1>
        <div className="mx-auto mt-2 h-[3px] w-32 md:w-44 bg-teal-500"></div>
      </div>
      {h.steps.map((step, i) => (
        <HowItWorksStep key={i} {...step} />
      ))}
    </div>
  );
};
