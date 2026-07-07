import { DerilaFooterMain } from "./components/DerilaFooterMain";
import { DerilaFooterBottom } from "./components/DerilaFooterBottom";

export const DerilaFooter = () => {
  return (
    <footer className="text-white text-sm bg-neutral-900 box-border caret-transparent leading-5 outline-[3px]">
      <DerilaFooterMain />
      <DerilaFooterBottom />
    </footer>
  );
};
