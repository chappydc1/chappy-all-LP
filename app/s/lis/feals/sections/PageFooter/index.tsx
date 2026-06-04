import { FooterContact } from "../PageFooter/components/FooterContact";
import { FooterLinks } from "../PageFooter/components/FooterLinks";
import { FooterSocial } from "../PageFooter/components/FooterSocial";
import { FooterCertification } from "../PageFooter/components/FooterCertification";

export const PageFooter = () => {
  return (
    <div className="relative text-white items-center self-stretch bg-stone-500 box-border caret-transparent gap-x-8 flex flex-col shrink-0 justify-start min-h-px min-w-[auto] outline-[3px] gap-y-8 py-12">
      <div className="relative items-center self-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-start max-w-[767px] min-h-px min-w-[auto] outline-[3px] gap-y-2 px-4 md:max-w-[1180px] md:px-0">
        <picture className="items-center box-border caret-transparent flex shrink-0 object-contain outline-[3px] overflow-x-auto overflow-y-hidden w-[90px]">
          <img
            src="/images/feals/46.svg"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-contain outline-[3px] align-baseline"
          />
        </picture>
        <div className="text-2xl box-border caret-transparent shrink-0 leading-[34px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-bookmania">
          <span className="box-border caret-transparent outline-[3px] break-words w-full">
            <p className="box-border caret-transparent outline-[3px] break-words">
              A better way to feel better.
            </p>
          </span>
        </div>
      </div>
      <FooterContact />
      <FooterLinks />
      <FooterSocial />
      <FooterCertification />
    </div>
  );
};
