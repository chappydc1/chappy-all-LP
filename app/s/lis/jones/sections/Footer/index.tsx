import { JonesFooterContent } from "./components/JonesFooterContent";
import { JonesFooterLegal } from "./components/JonesFooterLegal";
import { JonesFooterBottom } from "./components/JonesFooterBottom";

export const JonesFooter = () => {
  return (
    <footer className="bg-stone-100 caret-transparent block flex-nowrap justify-normal outline-[3px] md:flex md:flex-wrap md:justify-between">
      <JonesFooterContent />
      <JonesFooterLegal />
      <JonesFooterBottom />
    </footer>
  );
};
