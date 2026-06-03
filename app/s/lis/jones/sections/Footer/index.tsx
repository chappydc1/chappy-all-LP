import { FooterContent } from "../Footer/components/FooterContent";
import { FooterLegal } from "../Footer/components/FooterLegal";
import { FooterBottom } from "../Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-stone-100 caret-transparent block flex-nowrap justify-normal outline-[3px] md:flex md:flex-wrap md:justify-between">
      <FooterContent />
      <FooterLegal />
      <FooterBottom />
    </footer>
  );
};
