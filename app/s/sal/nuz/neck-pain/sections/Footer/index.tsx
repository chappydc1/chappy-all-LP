import { content } from "../../content";

export const Footer = () => {
  const f = content.footer;
  return (
    <section className="items-center box-border caret-transparent flex flex-col justify-around pt-5 pb-[100px] px-4 md:px-0 md:py-[25px]">
      <img src={f.logoUrl} alt="" className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] w-[114px] mt-2 md:hidden md:min-h-0 md:min-w-0 md:w-[140px]" />
      <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] mb-0">
        <div className="font-light box-border caret-transparent leading-[17px] min-h-[auto] min-w-[auto] text-center font-national_book md:text-start">
          <div className="text-zinc-500 text-sm font-normal box-border caret-transparent text-center mt-[15px] md:text-zinc-800 md:text-[15px] md:text-start md:mt-0 flex flex-wrap gap-1 justify-center md:justify-start">
            {f.links.map((link, i, arr) => (
              <a
                key={i}
                href="#"
                className="text-neutral-600 text-sm box-border caret-transparent px-[3px] font-proxima_nova md:text-[15px] transition-colors duration-150 hover:text-sky-700 cursor-pointer"
              >
                {link}
                {i < arr.length - 1 ? " |" : ""}
              </a>
            ))}
          </div>
        </div>
        <img src={f.logoUrl} alt="" className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 w-[140px] mt-2 md:block md:min-h-[auto] md:min-w-[auto]" />
        <div className="text-zinc-800 text-xs font-light box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-center mt-2.5 md:text-sm md:leading-6 md:mt-0">
          {f.copyright}
        </div>
        <div className="text-zinc-800 text-xs font-light box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-center mt-2.5 md:text-sm md:leading-6 md:mt-0">
          {f.address}
        </div>
      </div>
    </section>
  );
};
