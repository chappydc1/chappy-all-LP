import { content } from "../../../content";

export const NuzPainPointsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-[25px] grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto] gap-y-[15px] px-5 md:px-0">
      {content.painPoints.grid.map((p, i) => (
        <div
          key={i}
          className="items-center box-border caret-transparent flex flex-col leading-[22px] min-h-[auto] min-w-[auto] text-center"
        >
          <img
            src={p.src}
            sizes={p.sizes}
            alt={p.label}
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover mb-1 rounded-[50%] md:min-h-0 md:min-w-0 md:mb-[7px]"
          />
          <div className="text-black text-base font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] mb-1.5 md:text-lg md:leading-[22px] md:min-h-0 md:min-w-0">
            {p.label}
          </div>
        </div>
      ))}
    </div>
  );
};
