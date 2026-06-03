import { HeroProduct } from "./components/HeroProduct";
import { HeroContent } from "./components/HeroContent";

export const HeroSection = () => {
  return (
    <section id="hero" className="bg-white box-border caret-transparent hidden md:block">
      <div className="items-stretch box-border caret-transparent flex min-h-[750px] justify-start">
        <div className="animate-slide-in-left" style={{ width: "50%" }}>
          <HeroProduct />
        </div>
        <div className="animate-slide-in-right animate-delay-200" style={{ width: "50%", display: "flex" }}>
          <HeroContent />
        </div>
      </div>
    </section>
  );
};
