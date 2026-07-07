import { EmmaVideoPlayer } from "./components/EmmaVideoPlayer";
import { EmmaDoctorProfile } from "./components/EmmaDoctorProfile";

export const EmmaVideoSection = () => {
  return (
    <div className="bg-white shadow-none box-border caret-transparent gap-x-4 flex flex-col max-w-[1085.8px] gap-y-4 w-full m-auto p-0 md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.15)_4px_14px_24px_0px] md:gap-x-[35px] md:flex-row md:gap-y-[35px] md:pt-[45px] md:pb-5 md:px-[35px]">
      <EmmaVideoPlayer />
      <EmmaDoctorProfile />
    </div>
  );
};
