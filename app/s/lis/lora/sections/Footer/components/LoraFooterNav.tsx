import { LoraFooterNavColumn } from "./LoraFooterNavColumn";

export const LoraFooterNav = () => {
  return (
    <div
      role="navigation"
      aria-label="Footer navigation"
      className="box-border caret-transparent inline col-end-[span_6] col-start-[span_6] min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
    >
      <ul
        role="list"
        className="box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] list-none outline-[3px] pl-0 md:grid-cols-[repeat(3,minmax(0px,1fr))]"
      >
        <LoraFooterNavColumn
          title="Learn"
          links={[
            { href: "https://lora.co/pages/reviews", label: "Reviews" },
            { href: "https://lora.co/pages/science", label: "Our Science" },
            {
              href: "https://lora.co/pages/how-lora-works",
              label: "How Lora Works",
            },
            { href: "https://lora.co/pages/our-story", label: "Our Story" },
            { href: "/pages/store-locator", label: "Find in Store" },
            { href: "https://lora.co/pages/help-center", label: "FAQs" },
          ]}
          showLogo="false"
          logoSrc=""
          logoAlt=""
        />
        <LoraFooterNavColumn
          title="Connect"
          links={[
            { href: "/pages/referrals", label: "Refer a Friend" },
            {
              href: "https://473gy6qog6s.typeform.com/to/L03Wohx2",
              label: "Partners & Influencers",
            },
            { href: "mailto://press@lora.co", label: "Press Inquiries" },
            { href: "https://lora.loopreturns.com/", label: "Make a Return" },
            {
              href: "https://job-boards.greenhouse.io/lora",
              label: "Careers",
            },
            {
              href: "https://lora.co/a/account/login",
              label: "Account Login",
            },
            { href: "https://lora.co/pages/contact", label: "Contact Us" },
            {
              href: "https://lora.co/pages/official-rules-lora-x-skylight",
              label: " Chance to Win Skylight Calendar",
            },
            {
              href: "https://lora.co/pages/lora-x-throne-science-win-a-throne-giveaway",
              label: "Chance to Win a Throne",
            },
          ]}
          showLogo="false"
          logoSrc=""
          logoAlt=""
        />
        <LoraFooterNavColumn
          title="Ü Snacks"
          links={[
            { href: "https://lora.co/pages/usnacks", label: "About" },
            {
              href: "https://lora.co/pages/first-order",
              label: "Lora Adults",
            },
            {
              href: "https://lora.co/pages/first-order-lora-kids-daily",
              label: "Lora Kids",
            },
            { href: "https://nutrops.co/", label: "Nütrops" },
            { href: "https://immun.co/", label: "Immün" },
            { href: "https://juced.co/", label: "Jüced" },
          ]}
          showLogo="true"
          logoSrc="/images/gruns/39.svg"
          logoAlt="U Snacks"
        />
      </ul>
    </div>
  );
};
