import { PromoBar } from "./PromoBar";
import { Navbar } from "./Navbar";

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

export function Header({ promoBar, navbar, logoSrc, logoAlt, accountIconSrc, cartIconSrc }: HeaderProps) {
  return (
    <header className="relative bg-white box-border caret-transparent contents outline-[3px] z-20 font-mulish">
      <PromoBar text={promoBar.text} cta={promoBar.cta} />
      <Navbar
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
