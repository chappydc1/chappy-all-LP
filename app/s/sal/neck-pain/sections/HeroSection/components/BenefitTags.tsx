import { content } from "../../../content";

export const BenefitTags = () => {
  const tags = content.hero.benefitTags;
  const rows: typeof tags[] = [];
  for (let i = 0; i < tags.length; i += 2) rows.push(tags.slice(i, i + 2));

  return (
    <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
      {rows.map((row, ri) => (
        <div
          key={ri}
          className="text-neutral-700 font-medium items-center box-border caret-transparent gap-x-[5px] justify-start leading-[18px] min-h-0 min-w-0 gap-y-[5px] md:min-h-[auto] md:min-w-[auto]"
        >
          <div className="box-border caret-transparent gap-x-2 flex gap-y-2">
            {row.map((tag, ti) => (
              <div
                key={ti}
                className="text-sm items-center bg-neutral-300 box-border caret-transparent gap-x-[5px] flex h-[30px] justify-center leading-[14px] min-h-0 min-w-0 gap-y-[5px] px-[7px] rounded-bl rounded-br rounded-tl rounded-tr md:text-[15px] md:bg-zinc-300 md:leading-[15px] md:min-h-[auto] md:min-w-[auto]"
              >
                <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 md:text-[15px] md:leading-[15px] md:min-h-[auto] md:min-w-[auto]">
                  <img
                    src={tag.icon}
                    alt=""
                    className="text-sm box-border caret-transparent inline-block h-[21px] leading-[14px] max-w-full w-[21px] md:text-[15px] md:leading-[15px]"
                  />
                </div>
                <div className="text-sm box-border caret-transparent leading-[14px] min-h-0 min-w-0 md:text-[15px] md:leading-[15px] md:min-h-[auto] md:min-w-[auto]">
                  <div className="relative text-sky-950 text-sm box-border caret-transparent leading-[14px] top-px md:text-[15px] md:leading-[15px]">
                    {tag.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
