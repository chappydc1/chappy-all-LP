import copy from "../../copy.json";
import { VitalitydigestHeaderLogo } from "./components/VitalitydigestHeaderLogo";

export function VitalitydigestHeader(): React.ReactElement {
  return (
    <header className="bg-sky-950 px-2.5 pt-5">
      <div className="mx-auto flex w-full max-w-[1170px] flex-col items-center gap-2.5 px-[14%] text-center md:px-0">
        <VitalitydigestHeaderLogo />
        <h1 className="w-full font-merriweather text-3xl font-bold leading-9 text-white md:text-left md:text-[56px] md:leading-[67.2px]">
          <span className="md:hidden">{copy.headline}</span>
          <span className="hidden md:inline">
            {copy.titleLineOne}
            <br />
            {copy.titleLineTwo}
          </span>
        </h1>
        <p className="w-full text-[13px] leading-[13px] text-white md:text-left md:text-sm md:leading-[14px]">
          {copy.posted}
        </p>
        <p className="w-full pb-2.5 text-[13px] leading-[13px] text-white md:text-left md:text-sm md:leading-[14px]">
          {copy.author}
        </p>
      </div>
    </header>
  );
}
