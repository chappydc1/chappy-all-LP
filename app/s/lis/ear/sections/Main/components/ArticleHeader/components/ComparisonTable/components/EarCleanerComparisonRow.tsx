import media from "../../../../../../../media.json";

type ComparisonCell = {
  value: string;
  subtext?: string;
};

export type EarCleanerComparisonRowProps = {
  featured: boolean;
  brandName?: string;
  cells: ComparisonCell[];
};

export const EarCleanerComparisonRow = ({ featured, brandName, cells }: EarCleanerComparisonRowProps): JSX.Element => {
  const { brand_logo, face_happy_green, face_happy_grey } = media.images;
  const faceIcon = featured ? face_happy_green : face_happy_grey;

  return (
    <div
      className={`box-border caret-transparent basis-0 grow w-3/12 py-2 border-2 md:basis-auto md:grow-0 ${featured ? "bg-cyan-50 border-slate-300 rounded-[10px]" : "border-transparent"}`}
    >
      {featured ? (
        <div className="flex items-center justify-center h-14 mx-[3px] px-1 border-b border-slate-300/60 md:h-16 md:mx-3">
          <img src={brand_logo.src} alt={brand_logo.alt} className="w-full max-h-8 md:max-h-10" />
        </div>
      ) : (
        <div className="flex items-center justify-center h-14 px-1 bg-red-50 border-y border-stone-300 md:h-16">
          <p className="text-rose-700 text-xs font-medium leading-[15.6px] text-center md:text-base md:leading-6">
            {brandName}
          </p>
        </div>
      )}

      {cells.map((cell, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center h-12 px-1 text-center border-b md:h-[54px] ${featured ? "mx-[3px] border-slate-300/60 md:mx-3" : "border-stone-300"}`}
        >
          <p
            className={
              featured
                ? "text-sm font-semibold leading-[18px] md:text-lg md:leading-[24px]"
                : "text-gray-500 text-xs leading-[16px] md:text-base md:leading-6"
            }
          >
            {cell.value}
          </p>
          {cell.subtext && (
            <p
              className={
                featured
                  ? "text-[10px] leading-[11px] opacity-60 md:text-xs md:leading-3"
                  : "text-gray-500 text-[9px] leading-[10px] md:text-[11px] md:leading-3"
              }
            >
              {cell.subtext}
            </p>
          )}
        </div>
      ))}

      <div className="flex items-center justify-center h-12 md:h-[54px]">
        <img src={faceIcon.src} alt={faceIcon.alt} className={featured ? "h-[22px] md:h-7" : "h-5 md:h-6"} />
      </div>
    </div>
  );
};
