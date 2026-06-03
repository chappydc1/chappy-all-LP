import { HeaderLogo } from "../Header/components/HeaderLogo";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Header = () => {
  const ref = useScrollReveal();

  return (
    <div className="caret-transparent max-w-[1040px] mx-auto px-5 md:px-8" ref={ref}>
      <header className="bg-white caret-transparent z-[1000] pt-2.5 pb-5 md:pt-[30px] animate-fade-in">
        <HeaderLogo />
      </header>
      <div className="caret-transparent mb-5 md:mb-10">
        <div className="caret-transparent -mx-5 md:mx-0">
          <picture className="caret-transparent block overflow-hidden">
            <img
              src="https://c.animaapp.com/mnsctxd6cckxuq/assets/founders-25-desk.jpg"
              alt="Hearing aids"
              className="caret-transparent align-baseline w-full"
            />
          </picture>
          <div className="relative items-center bg-white caret-transparent flex overflow-hidden">
            <div className="text-base font-bold bg-amber-300 caret-transparent min-h-[auto] min-w-[auto] text-nowrap z-[2] pl-3 pr-[15px] py-3 font-archivo md:text-xl md:px-5 md:py-[15px]">
              FEATURED ON
            </div>
            <div className="caret-transparent min-h-[auto] min-w-[auto] mx-auto px-2.5 md:px-5">
              <picture className="caret-transparent">
                <img
                  src="https://c.animaapp.com/mnsctxd6cckxuq/assets/static-logos-desk.png"
                  alt="horizon hearing aids"
                  className="caret-transparent align-baseline w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
