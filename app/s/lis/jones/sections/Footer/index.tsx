import { JonesFooterContent } from "../Footer/components/FooterContent";
import { JonesFooterLegal } from "../Footer/components/FooterLegal";
import { JonesFooterBottom } from "../Footer/components/FooterBottom";

export const JonesFooter = () => {
  return (
    <footer className="bg-stone-100 caret-transparent block flex-nowrap justify-normal outline-[3px] md:flex md:flex-wrap md:justify-between">
      <JonesFooterContent />
      <JonesFooterLegal />
      <JonesFooterBottom />
    </footer>
  );
};
