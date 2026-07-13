import { content } from "../../../content";

type ComparisonRowProps = {
  label: string;
  nuzzle: boolean;
  competitors: boolean[];
};

export const ComparisonRow = ({ label, nuzzle, competitors }: ComparisonRowProps) => {
  const cells = [
    { val: nuzzle, highlight: true },
    ...competitors.map((v) => ({ val: v, highlight: false })),
  ];

  return (
    <div className="border-b-zinc-300 border-l-gray-800 border-r-gray-800 border-t-gray-800 box-border caret-transparent flex justify-between max-w-[1000px] border-b">
      <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] w-[43%] pr-[9px] md:pr-0">
        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] px-0.5 py-1.5 md:p-0">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-left w-full px-0 md:pl-[35px] md:pr-2.5">
            <p className="text-zinc-800 text-sm font-normal box-border caret-transparent leading-[21px] md:text-2xl md:font-bold md:leading-[29px]">{label}</p>
          </div>
        </div>
      </div>
      {cells.map((cell, i) => (
        <div key={i} className={`box-border caret-transparent min-h-[auto] min-w-[auto] w-[29%] ${cell.highlight ? "bg-sky-100" : ""}`}>
          <div className="items-center box-border caret-transparent flex justify-center px-0.5 py-[18px] md:px-0 md:py-5">
            <img
              src={cell.val ? content.comparison.yesIconUrl : content.comparison.noIconUrl}
              alt={cell.val ? "Yes" : "No"}
              className="box-border caret-transparent h-5 max-w-full min-h-5 min-w-5 w-5 md:h-[30px] md:min-h-[30px] md:min-w-[30px] md:w-[30px] transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
