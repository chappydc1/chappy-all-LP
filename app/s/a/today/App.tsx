import { Header } from "./sections/Header";
import { MainContent } from "./sections/MainContent";
import { Footer } from "./sections/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
    </>
  );
};
