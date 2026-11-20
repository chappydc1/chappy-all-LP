type BreadcrumbProps = {
  items: string[];
  links: string[];
};

export function ShilajitBreadcrumb({ items, links }: BreadcrumbProps) {
  return (
    <div className="items-center hidden h-[50px] max-w-full min-w-full p-[15px] md:flex md:min-w-[1024px] md:pl-0">
      <div className="text-zinc-500 flex flex-wrap leading-[21px] uppercase">
        {items.map((label, i) => (
          <div key={i} className="flex items-center">
            {i === items.length - 1 ? (
              <span className="font-bold cursor-default">{label}</span>
            ) : (
              <>
                <a href={links[i]}>
                  {label}
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
