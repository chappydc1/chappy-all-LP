import { DiabetesOfferBlock } from "./components/DiabetesOfferBlock";
import { DiabetesCommentsSection } from "./components/DiabetesCommentsSection";
import { DiabetesFooter } from "../Footer";

export const DiabetesSalesPage = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] w-full mx-auto">
      <section className="box-border caret-transparent max-w-full outline-[3px]">
        <DiabetesOfferBlock />
        <DiabetesCommentsSection />
        <DiabetesFooter />
      </section>
    </main>
  );
};
