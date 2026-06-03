import { Header } from "../sections/Header";

export const PageShell = () => {
  return (
    <main role="main" className="caret-transparent outline-[3px]">
      <div className="self-stretch caret-transparent grow max-w-[375px] outline-[3px] md:max-w-screen-xl">
        <div className="caret-transparent outline-[3px]">
          <div className="caret-transparent outline-[3px]">
            <Header />
          </div>
        </div>
      </div>
    </main>
  );
};
