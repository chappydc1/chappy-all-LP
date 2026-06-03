import { Navbar } from "../Header/components/Navbar";
import { MobileNav } from "../Header/components/MobileNav";
import { NewsBar } from "../Header/components/NewsBar";

export const Header = () => {
  return (
    <header className="bg-white shadow-[rgba(106,115,129,0.16)_0px_6px_12px_0px,rgba(106,115,129,0.06)_0px_3px_8px_0px] box-border caret-transparent outline-[3px] w-full py-2">
      <Navbar />
      <MobileNav />
      <NewsBar />
    </header>
  );
};
