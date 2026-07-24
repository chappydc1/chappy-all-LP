import { FealsHero } from "../Hero";

export const FealsMainContent = () => {
  return (
    <main className="bg-white box-border caret-transparent min-h-[1000px] outline-[3px]">
      <div className="self-stretch box-border caret-transparent grow max-w-[375px] outline-[3px] mx-auto md:max-w-screen-xl">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <FealsHero />
          </div>
        </div>
      </div>
    </main>
  );
};
