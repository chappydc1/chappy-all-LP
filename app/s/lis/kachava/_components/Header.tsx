import { KachavaPromoBar } from "./PromoBar";
import { KachavaNavbar } from "./Navbar";

type HeaderProps = {
  promoBar: { text: string; cta: { label: string; href: string } };
  navbar: {
    dropdownLinks: { label: string }[];
    rewardsLink: { label: string; href: string };
    accountLink: { label: string; href: string };
    shopCta: { label: string; href: string };
  };
  logoSrc: string;
  logoAlt: string;
  accountIconSrc: string;
  cartIconSrc: string;
};

export function KachavaHeader({ promoBar, navbar, logoSrc, logoAlt, accountIconSrc, cartIconSrc }: HeaderProps) {
  return (
    <header className="relative bg-white box-border caret-transparent contents outline-[3px] z-20 font-mulish">
      <KachavaPromoBar text={promoBar.text} cta={promoBar.cta} />
      <KachavaNavbar
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        dropdownLinks={navbar.dropdownLinks}
        rewardsLink={navbar.rewardsLink}
        accountLink={navbar.accountLink}
        shopCta={navbar.shopCta}
        accountIconSrc={accountIconSrc}
        cartIconSrc={cartIconSrc}
      />
    </header>
  );
}
