import { KachavaNavbarLogo } from "./KachavaNavbarLogo";
import { KachavaDesktopNavigation } from "./KachavaDesktopNavigation";
import { KachavaNavbarActions } from "./KachavaNavbarActions";

type NavbarProps = {
  logoSrc: string;
  logoAlt: string;
  dropdownLinks: { label: string }[];
  rewardsLink: { label: string; href: string };
  accountLink: { label: string; href: string };
  shopCta: { label: string; href: string };
  accountIconSrc: string;
  cartIconSrc: string;
};

export function KachavaNavbar({
  logoSrc,
  logoAlt,
  dropdownLinks,
  rewardsLink,
  accountLink,
  shopCta,
  accountIconSrc,
  cartIconSrc,
}: NavbarProps) {
  return (
    <div className="sticky text-stone-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full z-20 left-0 top-0">
      <div className="relative box-border caret-transparent flex grow shrink-0 h-full min-h-[55px] min-w-[auto] outline-[3px] w-full md:min-h-[75px]">
        <div className="box-border caret-transparent flex grow shrink-0 grid-cols-none h-full max-w-[1728px] min-h-[55px] min-w-[auto] outline-[3px] w-full mx-auto px-4 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:min-h-[75px] md:px-6">
          <KachavaNavbarLogo src={logoSrc} alt={logoAlt} />
          <KachavaDesktopNavigation dropdownLinks={dropdownLinks} rewardsLink={rewardsLink} />
          <KachavaNavbarActions
            accountLink={accountLink}
            shopCta={shopCta}
            accountIconSrc={accountIconSrc}
            cartIconSrc={cartIconSrc}
          />
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full" />
    </div>
  );
}
