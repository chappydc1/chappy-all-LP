import { Navbar } from "../Header/components/Navbar";
import { MobileNav } from "../Header/components/MobileNav";
import { NewsBar } from "../Header/components/NewsBar";

export const Header = () => {
  return (
    <header className="bg-white box-border caret-transparent outline-[3px] w-full">
      <Navbar />
      <MobileNav />
      <NewsBar />
    </header>
  );
};
