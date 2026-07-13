import copy from "../../copy.json";

export function VitalitydigestStickyCtaBar(): React.ReactElement {
  return (
    <div className="sticky bottom-0 z-10 w-full bg-black/30 p-2.5">
      <div className="mx-auto max-w-[1170px] md:px-[30%]">
        <a
          href={copy.productUrl}
          className="block w-full rounded-[10px] border-b-[3px] border-green-700 bg-green-600 py-5 text-center text-[22px] font-bold leading-[22px] tracking-[0.44px] text-slate-50"
        >
          {copy.stickyCtaText}
        </a>
      </div>
    </div>
  );
}
