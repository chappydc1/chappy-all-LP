import { PipiteaFooterLogo } from "./components/PipiteaFooterLogo";
import { PipiteaFooterLinks } from "./components/PipiteaFooterLinks";
import { PipiteaFooterCopyright } from "./components/PipiteaFooterCopyright";

export const PipiteaFooter = () => {
  return (
    <section
      className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[50px]"
    >
      <div
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <PipiteaFooterLogo />
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <PipiteaFooterLinks />
          </div>
          <PipiteaFooterCopyright />
        </div>
      </div>
    </section>
  );
};
