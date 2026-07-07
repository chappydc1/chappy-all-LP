import { ForbesHeroContent } from "./components/ForbesHeroContent";

type HeroSectionProps = {
  backgroundSrc: string;
  heading: string;
  subheading: string;
  date: string;
};

export const ForbesHeroSection = ({
  backgroundSrc,
  heading,
  subheading,
  date,
}: HeroSectionProps) => {
  return (
    <section className="grid [grid-template-areas:'container'] grid-rows-[auto] min-h-[auto] min-w-[auto]">
      {/* Background image layer */}
      <div className="bg-white flex col-end-[container] col-start-[container] row-end-[container] row-start-[container] justify-end min-h-[auto] min-w-[auto]">
        <div className="relative min-h-[auto] min-w-[auto] w-full overflow-hidden">
          <img
            alt=""
            sizes="100vw"
            src={backgroundSrc}
            className="absolute text-transparent h-full max-w-full object-cover object-[50%_0%] align-baseline w-full inset-0 transition-transform duration-[8s] ease-out scale-105 hover:scale-100"
          />
          <div className="absolute bg-white bg-[linear-gradient(to_right,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] h-full opacity-50 w-full left-0 top-0" />
        </div>
      </div>
      {/* Content layer */}
      <div className="col-end-[container] col-start-[container] row-end-[container] row-start-[container] min-h-[auto] min-w-[auto] z-[1] py-2 md:py-4">
        <div className="flex flex-col">
          <div className="max-w-[1330px] min-h-[auto] min-w-[auto] w-full mx-auto px-[15px]">
            <ForbesHeroContent
              heading={heading}
              subheading={subheading}
              date={date}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
