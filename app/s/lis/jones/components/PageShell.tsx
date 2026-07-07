import { JonesHeader } from "../sections/Header";

export const JonesPageShell = () => {
  return (
    <main role="main" className="caret-transparent outline-[3px]">
      <div className="self-stretch caret-transparent grow max-w-[375px] outline-[3px] md:max-w-screen-xl">
        <div className="caret-transparent outline-[3px]">
          <div className="caret-transparent outline-[3px]">
            <JonesHeader />
          </div>
        </div>
      </div>
    </main>
  );
};
