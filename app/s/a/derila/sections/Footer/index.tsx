import { DerilaFooterMain } from "../Footer/components/FooterMain";
import { DerilaFooterBottom } from "../Footer/components/FooterBottom";

export const DerilaFooter = () => {
  return (
    <footer className="text-white text-sm bg-neutral-900 box-border caret-transparent leading-5 outline-[3px]">
      <DerilaFooterMain />
      <DerilaFooterBottom />
    </footer>
  );
};
