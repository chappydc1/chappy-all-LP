type NavLink = { label: string; href?: string };

type DesktopNavigationProps = {
  dropdownLinks: { label: string }[];
  rewardsLink: NavLink;
};

export function DesktopNavigation({ dropdownLinks, rewardsLink }: DesktopNavigationProps) {
  return (
    <div className="items-center box-border caret-transparent hidden justify-center min-h-0 min-w-0 outline-[3px] w-auto md:flex md:min-h-[auto] md:min-w-[auto] md:w-[33.3333%]">
      <nav className="box-border caret-transparent h-full min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto]">
        <ul className="items-center box-border caret-transparent gap-x-11 flex h-full justify-center list-none outline-[3px] gap-y-11 w-full pl-0">
          {dropdownLinks.map((link) => (
            <div
              key={link.label}
              className="items-center box-border caret-transparent flex h-full min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
            >
              <button
                type="button"
                className="relative font-bold items-center bg-transparent caret-transparent gap-x-[5px] flex justify-center min-h-[34px] min-w-0 outline-[3px] text-center pl-0 pr-3.5 py-0 rounded-md md:min-w-[auto] after:accent-auto after:box-border after:caret-transparent after:text-stone-800 after:block after:text-base after:not-italic after:normal-nums after:font-bold after:h-3 after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:min-h-0 after:min-w-0 after:outline-[3px] after:pointer-events-auto after:relative after:text-center after:no-underline after:indent-[0px] after:normal-case after:transform-none after:visible after:w-3 after:border-stone-800 after:border-l-2 after:border-b-2 after:border-separate after:border-solid after:font-mulish after:md:min-h-[auto] after:md:min-w-[auto] after:md:translate-x-[7px] after:md:translate-y-[-3px] after:md:-rotate-45"
              >
                <div className="box-border caret-transparent contents outline-[3px]">
                  {link.label}
                </div>
              </button>
              <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]" />
            </div>
          ))}
          <li className="items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 outline-[3px] py-2.5 md:min-h-[auto] md:min-w-[auto]">
            <a
              href={rewardsLink.href}
              className="font-black box-border caret-transparent block min-h-0 min-w-0 outline-[3px] w-full md:min-h-[auto] md:min-w-[auto] md:w-auto"
            >
              <span className="font-bold box-border caret-transparent outline-[3px]">
                {rewardsLink.label}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
