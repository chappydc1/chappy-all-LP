"use client";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const CHECK = "https://c.animaapp.com/mnsbh2exJLSZhk/assets/1700045980939_1666773712_check_1check_v1642658295149.png";
const CROSS = "https://c.animaapp.com/mnsbh2exJLSZhk/assets/1700045983205_1666773955_cross_v1642658299531_svg.png";
const NEBROO_LOGO = "https://c.animaapp.com/mnsbh2exJLSZhk/assets/1712391520633_nebroo.webp";

const rows = [
  { label: "Price",                         nebroo: "very-low", other: "price" },
  { label: "Rechargeable",                  nebroo: "check",    other: "check" },
  { label: "No Doctor Approval",            nebroo: "check",    other: "cross" },
  { label: "Ships to Your Door",            nebroo: "check",    other: "cross" },
  { label: "Easy to Use",                   nebroo: "check",    other: "cross" },
  { label: "Vox Humana Chip",               nebroo: "check",    other: "cross" },
  { label: "Mild to Moderate Hearing Loss", nebroo: "check",    other: "check" },
  { label: "Severe Hearing Loss",           nebroo: "cross",    other: "check" },
  { label: "1 Year of Free Warranty",       nebroo: "check",    other: "cross" },
];

const Cell = ({ val }: { val: string }) => {
  if (val === "check")    return <img src={CHECK} alt="✓" className="w-6 mx-auto" />;
  if (val === "cross")    return <img src={CROSS} alt="✗" className="w-5 mx-auto" />;
  if (val === "very-low") return <b className="text-[14px] font-montserrat">Very Low</b>;
  if (val === "price")    return <b className="text-[13px] font-montserrat text-center leading-tight">4000$ -<br />5000$+</b>;
  return null;
};

export const ComparisonTable = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="comparison" className="px-4 py-5 max-w-[900px] mx-auto">
      <div ref={ref} className={`reveal-scale ${visible ? "visible" : ""}`}>
        {/* Headings */}
        <div className="text-slate-500 text-xl font-bold text-center mb-2 font-montserrat underline md:text-2xl">
          What Makes Nebroo PRO Bluetooth Hearing Aids Special?
        </div>
        <div className="text-[16px] font-bold text-center mb-5 font-montserrat md:text-[22px] whitespace-nowrap">
          Nebroo PRO Bluetooth Hearing Aids vs Other Devices:
        </div>

        {/* Column header row — floats above the card */}
        <div className="flex mb-0">
          {/* spacer over blue column */}
          <div className="flex-[3]" />
          {/* nebroo header */}
          <div className="flex-[2] flex items-end justify-center pb-3 px-2">
            <img src={NEBROO_LOGO} alt="nebroo" className="w-[70px] md:w-[90px]" />
          </div>
          {/* other devices header */}
          <div className="flex-[2] flex items-end justify-center pb-3 px-2 text-center">
            <span className="font-bold text-[13px] font-montserrat leading-tight md:text-[15px]">Other<br />Devices</span>
          </div>
        </div>

        {/* Table card */}
        <div className="flex shadow-[rgba(197,199,210,0.73)_3.77px_3.28px_20px_5px] rounded-[15px] overflow-hidden">
          {/* Blue left column */}
          <div className="flex-[3] bg-[#5B7FA8] rounded-l-[15px]">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-center min-h-[48px] px-4 py-3 border-b border-[#6B8FB8] last:border-b-0">
                <span className="text-white text-[12px] font-montserrat text-center leading-tight md:text-[14px]">{row.label}</span>
              </div>
            ))}
          </div>

          {/* White right panel */}
          <div className="flex-[4] bg-white rounded-r-[15px] flex">
            {/* Nebroo column */}
            <div className="flex-1">
              {rows.map((row) => (
                <div key={row.label} className="flex items-center justify-center min-h-[48px] px-2 py-3 border-b border-gray-100 last:border-b-0">
                  <Cell val={row.nebroo} />
                </div>
              ))}
            </div>
            {/* Other devices column */}
            <div className="flex-1">
              {rows.map((row) => (
                <div key={row.label} className="flex items-center justify-center min-h-[48px] px-2 py-3 border-b border-gray-100 last:border-b-0">
                  <Cell val={row.other} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
