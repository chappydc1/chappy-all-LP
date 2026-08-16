type BreadcrumbProps = {
  items: { label: string; href: string; current?: boolean }[];
};

export function ShilajitBreadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="items-center hidden h-[50px] max-w-full min-w-full p-[15px] md:flex md:min-w-[1024px] md:pl-0">
      <div className="text-zinc-500 flex flex-wrap leading-[21px] uppercase">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            {item.current ? (
              <span className="font-bold cursor-default">{item.label}</span>
            ) : (
              <>
                <a href={item.href}>
                  {item.label}
                </a>
                <span className="px-[5px]">/</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
