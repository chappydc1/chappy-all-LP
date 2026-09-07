import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-green-950 box-border caret-transparent pt-[5%] px-[5%]">
      <div className="relative box-border caret-transparent max-w-[1440px] mx-auto">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent gap-x-[normal] grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-[normal] md:gap-x-10 md:grid-cols-[repeat(12,minmax(0px,1fr))] md:gap-y-10 md:items-start">
              <FooterNewsletter />
              <FooterColumn
                iconUrl="/images/product/icon-30.svg"
                iconAlt="Icon"
                title="Learn"
                textOnlyTitle={true}
                links={[
                  { href: "https://gruns.co/pages/reviews", text: "Reviews" },
                  {
                    href: "https://gruns.co/pages/science",
                    text: "Our Science",
                  },
                  {
                    href: "https://gruns.co/pages/how-gruns-works",
                    text: "How Grüns Works",
                  },
                  {
                    href: "https://gruns.co/pages/our-story",
                    text: "Our Story",
                  },
                  { href: "/pages/store-locator", text: "Find in Store" },
                  { href: "https://gruns.co/pages/help-center", text: "FAQs" },
                  { href: "mailto://press@gruns.co", text: "Press Inquiries" },
                ]}
                isMobile={true}
              />
              <FooterColumn
                iconUrl="/images/product/icon-30.svg"
                iconAlt="Icon"
                title="Learn"
                textOnlyTitle={true}
                links={[
                  { href: "https://gruns.co/pages/reviews", text: "Reviews" },
                  {
                    href: "https://gruns.co/pages/science",
                    text: "Our Science",
                  },
                  {
                    href: "https://gruns.co/pages/how-gruns-works",
                    text: "How Grüns Works",
                  },
                  {
                    href: "https://gruns.co/pages/our-story",
                    text: "Our Story",
                  },
                  { href: "/pages/store-locator", text: "Find in Store" },
                  { href: "https://gruns.co/pages/help-center", text: "FAQs" },
                  { href: "mailto://press@gruns.co", text: "Press Inquiries" },
                ]}
              />
              <FooterColumn
                iconUrl="/images/product/icon-32.svg"
                iconAlt="Icon"
                title="Connect"
                textOnlyTitle={true}
                links={[
                  { href: "/pages/referrals", text: "Refer a Friend" },
                  {
                    href: "https://473gy6qog6s.typeform.com/to/L03Wohx2",
                    text: "Partners & Influencers",
                  },
                  {
                    href: "https://gruns.loopreturns.com/",
                    text: "Make a Return",
                  },
                  {
                    href: "https://job-boards.greenhouse.io/gruns",
                    text: "Careers",
                  },
                  {
                    href: "https://gruns.co/a/account/login",
                    text: "Account Login",
                  },
                  {
                    href: "https://gruns.co/pages/contact",
                    text: "Contact Us",
                  },
                ]}
              />
              <FooterColumn
                iconUrl="/images/product/icon-30.svg"
                iconAlt="Icon"
                title="Support"
                textOnlyTitle={true}
                isMobile={true}
                links={[
                  {
                    href: "https://gruns.co/a/account/orders",
                    text: "Track Your Order",
                  },
                  {
                    href: "/account/subscriptions",
                    text: "Manage Subscription",
                  },
                  {
                    href: "https://gruns.loopreturns.com/",
                    text: "Make a Return",
                  },
                  {
                    href: "https://gruns.co/policies/refund-policy",
                    text: "Refund Policy",
                  },
                  {
                    href: "https://gruns.co/pages/help-center",
                    text: "Order Help",
                  },
                ]}
              />
              <FooterColumn
                iconUrl="/images/product/icon-30.svg"
                iconAlt="Icon"
                title="Support"
                textOnlyTitle={true}
                links={[
                  {
                    href: "https://gruns.co/a/account/orders",
                    text: "Track Your Order",
                  },
                  {
                    href: "/account/subscriptions",
                    text: "Manage Subscription",
                  },
                  {
                    href: "https://gruns.loopreturns.com/",
                    text: "Make a Return",
                  },
                  {
                    href: "https://gruns.co/policies/refund-policy",
                    text: "Refund Policy",
                  },
                  {
                    href: "https://gruns.co/pages/help-center",
                    text: "Order Help",
                  },
                ]}
              />
              <div className="box-border caret-transparent hidden col-end-[span_2] col-start-[span_2]"></div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};
