import { GrunsFooterNavColumn } from "../../Footer/components/FooterNavColumn";

export const GrunsFooterNav = () => {
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
        <GrunsFooterNavColumn
          title="Learn"
          links={[
            { href: "https://gruns.co/pages/reviews", label: "Reviews" },
            { href: "https://gruns.co/pages/science", label: "Our Science" },
            {
              href: "https://gruns.co/pages/how-gruns-works",
              label: "How Grüns Works",
            },
            { href: "https://gruns.co/pages/our-story", label: "Our Story" },
            { href: "/pages/store-locator", label: "Find in Store" },
            { href: "https://gruns.co/pages/help-center", label: "FAQs" },
          ]}
          showLogo="false"
          logoSrc=""
          logoAlt=""
        />
        <GrunsFooterNavColumn
          title="Connect"
          links={[
            { href: "/pages/referrals", label: "Refer a Friend" },
            {
              href: "https://473gy6qog6s.typeform.com/to/L03Wohx2",
              label: "Partners & Influencers",
            },
            { href: "mailto://press@gruns.co", label: "Press Inquiries" },
            { href: "https://gruns.loopreturns.com/", label: "Make a Return" },
            {
              href: "https://job-boards.greenhouse.io/gruns",
              label: "Careers",
            },
            {
              href: "https://gruns.co/a/account/login",
              label: "Account Login",
            },
            { href: "https://gruns.co/pages/contact", label: "Contact Us" },
            {
              href: "https://gruns.co/pages/official-rules-gruns-x-skylight",
              label: " Chance to Win Skylight Calendar",
            },
            {
              href: "https://gruns.co/pages/gruns-x-throne-science-win-a-throne-giveaway",
              label: "Chance to Win a Throne",
            },
          ]}
          showLogo="false"
          logoSrc=""
          logoAlt=""
        />
        <GrunsFooterNavColumn
          title="Ü Snacks"
          links={[
            { href: "https://gruns.co/pages/usnacks", label: "About" },
            {
              href: "https://gruns.co/pages/first-order",
              label: "Grüns Adults",
            },
            {
              href: "https://gruns.co/pages/first-order-gruns-kids-daily",
              label: "Grüns Kids",
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
