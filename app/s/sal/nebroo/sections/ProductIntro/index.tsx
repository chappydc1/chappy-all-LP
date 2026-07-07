import { NebrooProductIntroText } from "../ProductIntro/components/ProductIntroText";
import { NebrooProductIntroImage } from "../ProductIntro/components/ProductIntroImage";
import { NebrooVoxHumanaChip } from "../ProductIntro/components/VoxHumanaChip";

export const NebrooProductIntro = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full px-2 py-2.5 md:flex-nowrap md:px-2.5 md:py-5">
      <div className="relative items-stretch box-border caret-transparent basis-full grow max-w-[1200px] min-h-[25px] w-min mx-0 py-px md:basis-0 md:mx-[10%] md:py-0">
        <div className="items-center box-border caret-transparent flex flex-wrap justify-start mt-0 md:flex-nowrap md:mt-px">
          <NebrooProductIntroText />
          <NebrooProductIntroImage />
        </div>
        <NebrooVoxHumanaChip />
      </div>
    </div>
  );
};
