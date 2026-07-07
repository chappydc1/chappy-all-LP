import { AbcNewsFooterLinks } from "./components/AbcNewsFooterLinks";

export const AbcNewsFooter = () => {
  return (
    <footer className="text-neutral-400 text-xs font-light box-border caret-transparent leading-[21px] outline-[3px] mt-10 mb-2.5 p-5">
      <AbcNewsFooterLinks />
    </footer>
  );
};
