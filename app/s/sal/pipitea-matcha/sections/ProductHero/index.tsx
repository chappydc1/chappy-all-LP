import { PipiteaMatchaProductGallery } from "./components/PipiteaMatchaProductGallery";
import { PipiteaMatchaHeroContent } from "./components/PipiteaMatchaHeroContent";

export const PipiteaMatchaProductHero = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center pt-0 pb-[45px] px-[15px] md:pt-[30px] md:pb-[60px]">
      <div className="w-full max-w-[1170px] flex flex-col md:flex-row md:gap-10 text-zinc-800 text-start">
        <div className="w-full md:w-1/2 shrink-0">
          <PipiteaMatchaProductGallery />
        </div>
        <div className="w-full md:w-1/2 shrink-0">
          <PipiteaMatchaHeroContent />
        </div>
      </div>
    </section>
  );
};
