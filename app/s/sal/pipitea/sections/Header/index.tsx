import { PipiteaHeaderLogo } from "./components/PipiteaHeaderLogo";

export const PipiteaHeader = () => {
  return (
    <section
      className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full border-emerald-800/20 bg-center p-[15px] border-b"
    >
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1140px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <PipiteaHeaderLogo />
          </div>
        </div>
      </div>
    </section>
  );
};
