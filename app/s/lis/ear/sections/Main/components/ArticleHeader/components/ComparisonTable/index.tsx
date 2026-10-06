import copy from "../../../../../../copy.json";
import { EarCleanerComparisonRow } from "./components/EarCleanerComparisonRow";

export const EarCleanerComparisonTable = () => {
  const { metrics, rows } = copy.comparison_table;

  return (
    <div className="items-start box-border caret-transparent flex justify-center w-full mt-0 md:mt-1">
      <div className="box-border caret-transparent basis-0 grow w-3/12 py-2 border-2 border-transparent md:basis-auto md:grow-0">
        <div className="h-14 border-b border-stone-300 md:h-16"></div>
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`flex items-center justify-center gap-1 h-12 px-1 text-center md:justify-start md:gap-2 md:h-[54px] md:pl-[22px] md:text-left ${index < metrics.length - 1 ? "border-b border-stone-300" : ""}`}
          >
            <span className="text-xs md:text-base">{metric.emoji}</span>
            <span className="text-[12px] font-medium leading-[15px] md:text-lg md:leading-[27px]">{metric.label}</span>
          </div>
        ))}
      </div>
      {rows.map((row) => (
        <EarCleanerComparisonRow
          key={row.brand_name ?? "featured"}
          featured={row.variant === "featured"}
          brandName={row.brand_name}
          cells={[
            { value: row.see_inside, subtext: row.see_inside_subtext },
            { value: row.safety, subtext: row.safety_subtext },
            { value: row.time, subtext: row.time_subtext },
          ]}
        />
      ))}
    </div>
  );
};
