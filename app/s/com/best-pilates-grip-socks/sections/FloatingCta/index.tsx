import { ChevronRightIcon, GoldStarsIcon } from "../../components/icons";
import type { BestPilatesGripSocksCopy } from "../../types";

type FloatingCtaProps = {
  floater: BestPilatesGripSocksCopy["floater"];
  ctaUrl: string;
  productImage: string;
};

export function BestPilatesGripSocksFloatingCta({
  floater,
  ctaUrl,
  productImage,
}: FloatingCtaProps): JSX.Element {
  return (
    <section className="fixed inset-x-0 bottom-0 z-50 bg-[#333] min-[1032px]:hidden">
      <div className="bg-[#333] text-white">
        <div className="mx-auto flex max-w-[1132px] items-center gap-2 text-xs font-bold leading-4">
          <div className="flex items-center justify-center bg-[#00A871] px-7 py-[6px]">{floater.rankLabel}</div>
          <div className="flex items-center gap-1">
            {floater.description}
            <div className="h-4 w-px bg-white" />
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline"
            >
              {floater.productName}
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[1132px] flex-col bg-white">
        <div className="flex items-center gap-2 p-2">
          <img
            src={productImage}
            alt={floater.productName}
            className="mr-2 h-12 w-12 rounded-md object-cover"
          />
          <div className="h-10 w-px bg-[#DCDCDC]" />
          <div className="text-xs leading-4 text-[#333]">
            <div className="flex items-center gap-1 font-bold">
              {floater.score}
              <GoldStarsIcon size={8} />
            </div>
            <div>{floater.verdict}</div>
          </div>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex min-w-[135px] items-center justify-center gap-2 rounded-[17px] bg-[#D2152D] px-6 py-3.5 text-center text-base font-bold leading-4 text-white no-underline transition-colors hover:bg-[#E51731]"
          >
            {floater.buttonText}
            <ChevronRightIcon className="h-3 w-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
