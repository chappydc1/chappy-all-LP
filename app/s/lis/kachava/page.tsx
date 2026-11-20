import adv from "./copy.json";
import links from "./links.json";
import media from "./media.json";

type AdvNavItem =
  | { type: "link"; label: string; href: string }
  | { type: "button"; label: string; href?: never };

type AdvNavSocialLink = { id: string; label: string; href: string };

type AdvNavColumn = {
  title: string;
  items: AdvNavItem[];
  socialLinks?: AdvNavSocialLink[];
};

type AdvLegalLink =
  | { label: string; href: string; type?: never }
  | { label: string; type: "button"; href?: never };

const BRAND_REVIEW_STARS = 5;

const SOCIAL_IDS = ["facebook", "instagram", "pinterest", "youtube"] as const;

const toNavItem = (label: string, href: string | null): AdvNavItem =>
  href === null
    ? { type: "button", label }
    : { type: "link", label, href };

const footerColumns: AdvNavColumn[] = adv.footer.columns.map((column, columnIndex) => ({
  title: column.title,
  items: column.items.map((label, itemIndex) => toNavItem(label, links.footer.columns[columnIndex][itemIndex])),
  ...(columnIndex === adv.footer.columns.length - 1
    ? {
      socialLinks: adv.footer.social.map((label, index) => ({
        id: SOCIAL_IDS[index],
        label,
        href: links.footer.social[index],
      })),
    }
    : {}),
}));

const legalLinks: AdvLegalLink[] = adv.footer.legalLinks.map((label, index) => {
  const href = links.footer.legalLinks[index];
  return href === null
    ? { label, type: "button" }
    : { label, href };
});

import { KachavaHeader } from "./_components/KachavaHeader";
import { KachavaHeroSection } from "./_components/KachavaHeroSection";
import { KachavaReasonSection } from "./_components/KachavaReasonSection";
import { KachavaFooter } from "./_components/KachavaFooter";
import { KachavaFloatingActionButton } from "./_components/KachavaFloatingActionButton";

function getIcon(id: string) {
  return media.icons.find((i) => i.id === id)?.path ?? "";
}

function getImage(id: string) {
  return media.images.find((i) => i.id === id) ?? { path: "", alt: "" };
}

const socialIconMap: Record<string, string> = {
  facebook: getIcon("socialFacebook"),
  instagram: getIcon("socialInstagram"),
  pinterest: getIcon("socialPinterest"),
  youtube: getIcon("socialYoutube"),
};

const paymentIconIds = [
  "paymentVisa",
  "paymentMastercard",
  "paymentAmex",
  "paymentDiscover",
  "paymentPaypal",
  "paymentShopPay",
] as const;

const paymentIcons = paymentIconIds.map((id) => {
  const icon = media.icons.find((i) => i.id === id)!;
  return { id: icon.id, src: icon.path, alt: icon.alt };
});

export default function KachavaLP() {
  const heroImage = getImage("hero");

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent flex flex-col tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] outline-[3px] overscroll-y-none pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-mulish">
      <KachavaHeader
        promoBar={{
          text: adv.announcementBar.text,
          cta: {
            label: adv.announcementBar.ctaText,
            href: links.announcementBar,
          },
        }}
        navbar={{
          dropdownLinks: adv.nav.dropdownLinks.map((label) => ({ label })),
          rewardsLink: {
            label: adv.nav.rewards,
            href: links.nav.rewards,
          },
          accountLink: {
            label: adv.nav.account,
            href: links.nav.account,
          },
          shopCta: {
            label: adv.nav.shopCtaText,
            href: links.nav.shop,
          },
        }}
        logoSrc={getIcon("logo")}
        logoAlt="Ka'Chava"
        accountIconSrc={getIcon("account")}
        cartIconSrc={getIcon("cart")}
      />

      <main className="box-border caret-transparent flex flex-col grow shrink-0 min-h-[750px] min-w-[auto] outline-[3px]">
        <KachavaHeroSection
          headline={adv.hero.headline}
          subheadline={adv.hero.subheadline}
          imageSrc={heroImage.path}
          imageAlt={heroImage.alt}
        />

        {adv.reasonsWhy.items.map((reason, index) => {
          const img = getImage(`reason${index + 1}`);
          return (
            <KachavaReasonSection
              key={reason.headline}
              title={reason.headline}
              paragraphs={reason.body}
              cta={reason.ctaText
                ? {
                  label: reason.ctaText,
                  href: links.reasonsWhy.cta,
                }
                : null}
              imageSrc={img.path}
              imageAlt={img.alt}
              layout={index % 2 === 0 ? "imageRight" : "imageLeft"}
            />
          );
        })}
      </main>

      <KachavaFooter
        newsletter={{
          headline: adv.newsletter.headline,
          subtext: adv.newsletter.subheadline,
          emailPlaceholder: adv.newsletter.emailPlaceholder,
          ctaLabel: adv.newsletter.ctaText,
          disclaimer: adv.newsletter.disclaimer,
        }}
        reviews={{
          count: adv.footer.reviews.count,
          stars: BRAND_REVIEW_STARS,
          label: adv.footer.reviews.label,
        }}
        navigation={{ columns: footerColumns }}
        bottom={{
          copyright: adv.footer.copyright,
          legalLinks,
        }}
        badgeSrc={getIcon("brandReview")}
        starSrc={getIcon("star")}
        paymentIcons={paymentIcons}
        privacyChoicesIconSrc={getIcon("privacyChoices")}
        socialIconMap={socialIconMap}
      />

      <KachavaFloatingActionButton
        chatOpenSrc={getIcon("chatOpen")}
        chatCloseSrc={getIcon("chatClose")}
      />
    </div>
  );
}
