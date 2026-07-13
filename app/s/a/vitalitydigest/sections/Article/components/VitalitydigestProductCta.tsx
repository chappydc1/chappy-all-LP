import copy from "../../../copy.json";

export type VitalitydigestProductCtaProps = {
  imageSrc: string;
  imageAlt: string;
};

export function VitalitydigestProductCta({
  imageSrc,
  imageAlt,
}: VitalitydigestProductCtaProps): React.ReactElement {
  return (
    <div className="flex flex-col items-center gap-2.5 py-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-h-[413px] w-auto rounded-[10px]"
      />
      <a
        href={copy.productUrl}
        className="w-full rounded-[10px] bg-green-600 py-5 text-center text-xl font-bold leading-5 tracking-[0.4px] text-slate-50"
      >
        {copy.ctaButtonText}
      </a>
    </div>
  );
}
