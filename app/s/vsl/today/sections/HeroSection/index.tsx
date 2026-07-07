import { TodayHeroText } from "./components/TodayHeroText";
import { TodayVideoPlayer } from "../../components/TodayVideoPlayer";

export const TodayHeroSection = () => {
  return (
    <div className="box-border caret-transparent max-w-[1210px] outline-[3px] w-full mx-auto md:max-w-screen-xl">
      <TodayHeroText />
      <TodayVideoPlayer />
    </div>
  );
};
