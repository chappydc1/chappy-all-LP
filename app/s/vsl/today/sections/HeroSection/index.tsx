import { HeroText } from "../HeroSection/components/HeroText";
import { VideoPlayer } from "../../components/VideoPlayer";

export const HeroSection = () => {
  return (
    <div className="box-border caret-transparent max-w-[1210px] outline-[3px] w-full mx-auto md:max-w-screen-xl">
      <HeroText />
      <VideoPlayer />
    </div>
  );
};
