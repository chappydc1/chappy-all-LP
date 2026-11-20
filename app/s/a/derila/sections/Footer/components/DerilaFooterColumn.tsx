import media from "../../../media.json";

type FooterItem = {
  text: string;
  href?: string;
  iconKey: string;
};

type FooterItemType = "button" | "link-with-icon" | "link";

const UNDERLINED_ICON_KEY = "email";

const getFooterItemType = (item: FooterItem): FooterItemType => {
  if (!item.href) {
    return "button";
  }
  if (item.iconKey) {
    return "link-with-icon";
  }
  return "link";
};

export type DerilaFooterColumnProps = {
  title: string;
  items: FooterItem[];
};

export const DerilaFooterColumn = ({ title, items }: DerilaFooterColumnProps) => {
  const icons = media.icons as Record<string, { src: string; alt: string }>;

  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <p className="font-semibold box-border caret-transparent outline-[3px] mb-3">{title}</p>
      <div className="box-border caret-transparent gap-x-1.5 flex flex-col outline-[3px] gap-y-1.5">
        {items.map((item, index) => {
          const itemType = getFooterItemType(item);

          if (itemType === "button") {
            const icon = item.iconKey ? icons[item.iconKey] : null;
            return (
              <button
                key={index}
                type="button"
                className="items-center bg-transparent caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] text-center mt-1 p-0"
              >
                {icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={icon.src} alt={icon.alt} className="box-border caret-transparent h-5 outline-[3px] pr-2.5" />
                )}
                {item.text}
              </button>
            );
          }

          if (itemType === "link-with-icon") {
            const icon = icons[item.iconKey];
            return (
              <div
                key={index}
                className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1"
              >
                <span className="box-border caret-transparent block shrink-0 h-6 min-h-[auto] min-w-[auto] outline-[3px] w-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon.src} alt={icon.alt} className="box-border caret-transparent h-full outline-[3px] w-full" />
                </span>
                <a
                  href={item.href}
                  className={`box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]${item.iconKey === UNDERLINED_ICON_KEY ? " underline hover:no-underline" : ""}`}
                >
                  {item.text}
                </a>
              </div>
            );
          }

          return (
            <a
              key={index}
              href={item.href}
              className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"
            >
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
