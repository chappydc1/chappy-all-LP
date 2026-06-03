type NavbarActionsProps = {
  accountLink: { label: string; href: string };
  shopCta: { label: string; href: string };
  accountIconSrc: string;
  cartIconSrc: string;
};

export function NavbarActions({ accountLink, shopCta, accountIconSrc, cartIconSrc }: NavbarActionsProps) {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-end min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-6/12 md:w-[33.3333%]">
      <a
        href={accountLink.href}
        className="font-semibold items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[3px] gap-y-2 md:flex md:min-h-[auto] md:min-w-[auto]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={accountIconSrc}
          alt={accountLink.label}
          className="box-border caret-transparent inline h-5 outline-[3px] w-6 md:block"
        />
        {accountLink.label}
      </a>
      <button
        aria-label="Open cart drawer"
        className="relative font-semibold items-center bg-transparent caret-transparent gap-x-2 flex justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center p-0 rounded-md"
      >
        <div className="box-border caret-transparent contents outline-[3px]">
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cartIconSrc}
              alt="Cart"
              className="box-border caret-transparent inline h-5 outline-[3px] w-6"
            />
          </div>
          <span className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
            Cart
          </span>
        </div>
      </button>
      <a
        href={shopCta.href}
        className="text-white text-sm font-medium bg-stone-800 box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] px-3 py-2.5 rounded-md md:text-base md:leading-6 md:px-4 hover:bg-gray-700"
      >
        {shopCta.label}
      </a>
      <nav className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] p-[7px] md:hidden md:min-h-0 md:min-w-0">
        <button
          aria-label="Open navigation menu"
          className="relative font-semibold items-center bg-transparent caret-transparent gap-x-[5px] inline-flex h-3 justify-center leading-4 outline-[3px] text-center align-middle w-[18px] p-0 rounded-md"
        >
          <div className="box-border caret-transparent contents outline-[3px]">
            <span className="absolute bg-stone-800 box-border caret-transparent block h-0.5 outline-[3px] w-full left-0 top-0" />
            <span className="absolute bg-stone-800 box-border caret-transparent block h-0.5 outline-[3px] w-full left-0 bottom-0" />
          </div>
        </button>
      </nav>
    </div>
  );
}
