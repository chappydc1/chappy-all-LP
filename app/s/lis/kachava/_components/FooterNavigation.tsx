import { FooterColumn } from "./FooterColumn";

type FooterNavItem =
  | { type: "link"; label: string; href: string }
  | { type: "button"; label: string };

type FooterNavSocialLink = {
  id: string;
  label: string;
  href: string;
};

type FooterNavColumn = {
  title: string;
  items: FooterNavItem[];
  socialLinks?: FooterNavSocialLink[];
};

type FooterNavigationProps = {
  columns: FooterNavColumn[];
  socialIconMap: Record<string, string>;
};

export function FooterNavigation({ columns, socialIconMap }: FooterNavigationProps) {
  return (
    <div className="box-border caret-transparent flex grow max-w-none min-h-[auto] min-w-[auto] outline-[3px] w-full pr-0 md:max-w-[830px] md:pr-4">
      <div className="box-border caret-transparent gap-x-3 flex flex-col grid-cols-none list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 w-full py-3 md:gap-x-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(110px,1fr))] md:gap-y-8 md:py-0">
        {columns.map((col) => (
          <FooterColumn
            key={col.title}
            title={col.title}
            items={col.items}
            socialLinks={col.socialLinks?.map((s) => ({
              ...s,
              iconSrc: socialIconMap[s.id] ?? "",
            }))}
          />
        ))}
      </div>
    </div>
  );
}
