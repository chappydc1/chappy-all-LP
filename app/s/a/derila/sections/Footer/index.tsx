import { FooterMain } from "../Footer/components/FooterMain";
import { FooterBottom } from "../Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="text-white text-sm bg-neutral-900 box-border caret-transparent leading-5 outline-[3px]">
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};
