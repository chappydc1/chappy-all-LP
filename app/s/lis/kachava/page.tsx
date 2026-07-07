import rawAdv from "./copy.json";
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

const adv = rawAdv as typeof rawAdv & {
  footer: {
    navigation: { columns: AdvNavColumn[] };
    bottom: { copyright: string; legalLinks: AdvLegalLink[] };
  };
};
import { KachavaHeader } from "./_components/Header";
import { KachavaHeroSection } from "./_components/HeroSection";
import { KachavaReasonSection } from "./_components/ReasonSection";
import { KachavaFooter } from "./_components/Footer";
import { KachavaFloatingActionButton } from "./_components/FloatingActionButton";

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
        promoBar={adv.promoBar}
        navbar={{
          dropdownLinks: adv.navbar.dropdownLinks,
          rewardsLink: adv.navbar.rewardsLink,
          accountLink: adv.navbar.accountLink,
          shopCta: adv.navbar.shopCta,
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

        {adv.reasons.map((reason) => {
          const img = getImage(reason.imageId);
          return (
            <KachavaReasonSection
              key={reason.number}
              title={reason.title}
              paragraphs={reason.paragraphs}
              cta={reason.cta}
              imageSrc={img.path}
              imageAlt={img.alt}
              layout={reason.layout as "imageRight" | "imageLeft"}
            />
          );
        })}
      </main>

      <KachavaFooter
        newsletter={adv.footer.newsletter}
        reviews={adv.footer.reviews}
        navigation={adv.footer.navigation}
        bottom={{
          copyright: adv.footer.bottom.copyright,
          legalLinks: adv.footer.bottom.legalLinks as Parameters<typeof KachavaFooter>[0]["bottom"]["legalLinks"],
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
