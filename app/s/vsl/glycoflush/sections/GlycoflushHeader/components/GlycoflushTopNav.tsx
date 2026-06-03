import { GlycoflushDesktopNavMenu } from "../../GlycoflushHeader/components/GlycoflushDesktopNavMenu";
import { GlycoflushMobileNavMenu } from "../../GlycoflushHeader/components/GlycoflushMobileNavMenu";
import { GlycoflushLogo } from "../../../components/GlycoflushLogo";
import { GlycoflushSearchButton } from "../../../components/GlycoflushSearchButton";

export const GlycoflushTopNav = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-[95%] min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 w-full mx-auto pt-4 pb-[5px] md:flex-nowrap md:max-w-[1050px]">
      <div className="relative items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-center min-h-[auto] outline-[3px] gap-y-5 w-full md:flex-nowrap md:justify-between">
        <GlycoflushDesktopNavMenu />
        <GlycoflushMobileNavMenu />
        <GlycoflushLogo />
        <GlycoflushSearchButton />
      </div>

      <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-2.5 w-full pt-[60px] pb-[75px] md:flex-nowrap">
        <div className="relative box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] outline-[3px] gap-y-2.5 text-center">
          <img
            src="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/logo-wide-transparent-500-1024x96.png"
            alt=""
            className="aspect-[auto_800_/_75] box-border caret-transparent inline-block max-w-[300px] outline-[3px] w-[800px]"
          />
        </div>
        <div className="relative box-border caret-transparent gap-x-2.5 max-w-full min-h-[auto] outline-[3px] gap-y-2.5">
          <h2 className="text-white text-2xl box-border caret-transparent leading-[30px] outline-[3px] font-poppins">
            Sunday at 7 p.m. ET on CBS and Paramount+
            <br />
            Sunday starting at 4 p.m. ET on the CBS News app
          </h2>
        </div>
      </div>

      <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-5 w-full pt-2.5 px-2.5 md:flex-nowrap md:pt-0 md:px-0">
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] outline-[3px] gap-y-5 w-full">
          <div className="box-border caret-transparent block max-w-full outline-[3px] w-full z-[1] mx-auto font-roboto md:max-w-[400px]">
            <div className="relative caret-transparent outline-[3px] w-full z-0 pt-[177.78%]">
              <div className="absolute text-white items-center bg-black box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[99999] left-0 top-0">
                <div className="aspect-square bg-[radial-gradient(farthest-side,rgb(229,9,20)_94%,rgba(0,0,0,0)),conic-gradient(rgba(0,0,0,0)_30%,rgb(229,9,20))] box-border caret-transparent outline-[3px] w-20 rounded-[50%]"></div>
                <div className="absolute text-lg font-semibold box-border caret-transparent outline-[3px] left-2/4 top-2/4">
                  Loading...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
