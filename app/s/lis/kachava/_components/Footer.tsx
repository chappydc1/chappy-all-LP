import { FooterNewsletter } from "./FooterNewsletter";
import { FooterNavigation } from "./FooterNavigation";
import { FooterBrandReviews } from "./FooterBrandReviews";
import { FooterBottom } from "./FooterBottom";

type FooterNavItem =
  | { type: "link"; label: string; href: string }
  | { type: "button"; label: string };

type FooterNavSocialLink = { id: string; label: string; href: string };

type LegalLink =
  | { label: string; href: string; type?: never }
  | { label: string; type: "button"; href?: never };

type FooterProps = {
  newsletter: {
    headline: string;
    subtext: string;
    emailPlaceholder: string;
    ctaLabel: string;
    disclaimer: string;
  };
  reviews: { count: string; stars: number; label: string };
  navigation: {
    columns: {
      title: string;
      items: FooterNavItem[];
      socialLinks?: FooterNavSocialLink[];
    }[];
  };
  bottom: { copyright: string; legalLinks: LegalLink[] };
  badgeSrc: string;
  starSrc: string;
  paymentIcons: { id: string; src: string; alt: string }[];
  privacyChoicesIconSrc: string;
  socialIconMap: Record<string, string>;
};

export function Footer({
  newsletter,
  reviews,
  navigation,
  bottom,
  badgeSrc,
  starSrc,
  paymentIcons,
  privacyChoicesIconSrc,
  socialIconMap,
}: FooterProps) {
  return (
    <footer className="bg-stone-800 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="text-stone-50 box-border caret-transparent gap-x-6 flex flex-col max-w-none outline-[3px] gap-y-6 mx-auto pt-4 pb-6 px-4 md:gap-x-20 md:max-w-[1552px] md:gap-y-20 md:px-14 md:py-10">
        <div className="items-start box-border caret-transparent gap-x-6 flex flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 md:gap-x-14 md:flex-nowrap md:gap-y-14">
          <FooterNewsletter {...newsletter} />
          <FooterNavigation columns={navigation.columns} socialIconMap={socialIconMap} />
        </div>
        <FooterBrandReviews
          badgeSrc={badgeSrc}
          starSrc={starSrc}
          count={reviews.count}
          stars={reviews.stars}
          label={reviews.label}
        />
      </div>
      <FooterBottom
        copyright={bottom.copyright}
        legalLinks={bottom.legalLinks}
        paymentIcons={paymentIcons}
        privacyChoicesIconSrc={privacyChoicesIconSrc}
      />
    </footer>
  );
}
