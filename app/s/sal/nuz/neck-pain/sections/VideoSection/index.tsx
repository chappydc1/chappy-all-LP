import { NuzVideoContent } from "./components/NuzVideoContent";
import { NuzVideoDesktop } from "./components/NuzVideoDesktop";
import { content } from "../../content";

export const NuzVideoSection = () => {
  const v = content.video;
  return (
    <div className="bg-slate-200/60 box-border caret-transparent py-0 md:pt-[59px] md:pb-[70px]">
      <div className="box-border caret-transparent max-w-none w-full mx-auto md:max-w-[1200px]">
        <div className="items-start box-border caret-transparent block flex-col justify-start max-w-full md:hidden md:max-w-[46%]">
          <div className="relative box-border caret-transparent w-full pt-[56.25%]">
            <iframe
              src={`https://customer-sw7km7bonaql0e2y.cloudflarestream.com/${v.videoId}/iframe?muted=true&autoplay=false&controls=true`}
              title="Preview Video"
              className="absolute box-border caret-transparent h-full pointer-events-none align-baseline w-full left-0 top-0"
            ></iframe>
            <div className="absolute box-border caret-transparent translate-x-[-50.0%] translate-y-[-50.0%] z-[1] left-2/4 top-2/4 md:transform-none">
              <img
                src={v.playIconUrl}
                alt="Icon"
                className="box-border caret-transparent inline h-16 align-baseline w-16"
              />
            </div>
          </div>
        </div>
        <div className="items-start box-border caret-transparent flex flex-col-reverse justify-start mt-4 px-5 md:flex-row md:justify-around md:mt-0 md:px-0">
          <NuzVideoContent />
          <NuzVideoDesktop />
        </div>
      </div>
    </div>
  );
};
