import adv from "../../../copy.json";
import { FooterLogo } from "../../Footer/components/FooterLogo";
import { FooterColumn } from "../../Footer/components/FooterColumn";

export const FooterMain = () => {
  const { columns } = adv.footer;

  return (
    <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-4 py-8 md:max-w-[1023px] md:px-10">
      <FooterLogo />
      <hr className="caret-transparent hidden h-0 opacity-[0.16] outline-[3px] overflow-visible mb-6 border-b-0 border-x-0 border-white md:block" />
      <div className="box-border caret-transparent gap-x-[120px] flex flex-col outline-[3px] md:flex-row">
        <hr className="caret-transparent block h-0 min-h-[auto] min-w-[auto] opacity-[0.16] outline-[3px] overflow-visible mb-6 border-b-0 border-x-0 border-white md:hidden md:min-h-0 md:min-w-0" />
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:grid-cols-[repeat(4,minmax(0px,1fr))]">
          {columns.map((col) => (
            <FooterColumn key={col.title} title={col.title} items={col.items} />
          ))}
        </div>
      </div>
    </div>
  );
};
