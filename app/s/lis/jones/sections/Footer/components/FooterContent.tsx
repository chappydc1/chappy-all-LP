import { NewsletterSignup } from "../../Footer/components/NewsletterSignup";
import { FooterColumn } from "../../Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="text-sm box-border caret-transparent block tracking-[-0.19px] leading-[23.94px] max-w-[600px] min-h-0 min-w-0 outline-[3px] w-full mx-auto pt-[35px] pb-7 px-[30px] md:flex md:max-w-none md:min-h-[auto] md:min-w-[auto] md:mx-0 md:pt-[45px] md:pb-[70px] md:px-[19px]">
      <div className="box-content caret-transparent min-h-0 min-w-0 outline-[3px] w-auto px-0 md:box-border md:min-h-[auto] md:min-w-[auto] md:w-2/5 md:px-[19px]">
        <div className="text-[15px] font-bold caret-transparent tracking-[1.11px] leading-[25.65px] outline-[3px] uppercase font-geogrotesquecondboldweb"></div>
        <NewsletterSignup />
      </div>
      <FooterColumn
        title="Help"
        items={[
          {
            href: "https://jonesroadbeauty.customerdesk.io/#rp-customer-widget-home",
            label: "Help Center",
          },
          {
            href: "https://www.jonesroadbeauty.com/pages/tracking-v2",
            label: "Track My Order",
          },
          {
            href: "/pages/quiz-landing",
            label: "Find Your Shade",
          },
          {
            href: "/pages/shipping-returns",
            label: "Shipping + Returns",
          },
          {
            href: "/pages/faq",
            label: "FAQ",
          },
          {
            href: "/pages/contact-us",
            label: "Contact Us",
          },
          {
            href: "/pages/careers",
            label: "Careers",
          },
        ]}
      />
      <FooterColumn
        title="About"
        items={[
          { href: "/pages/about", label: "Our Story" },
          { href: "/blogs/justbobbi", label: "justBOBBI" },
        ]}
      />
      <FooterColumn
        title="Connect"
        items={[
          {
            href: "https://www.instagram.com/jonesroadbeauty/",
            label: "Instagram",
            iconSrc: "https://c.animaapp.com/mpke0433qmtH28/assets/icon-4.svg",
            iconAlt: "Icon",
          },
          {
            href: "https://www.facebook.com/jonesroadbeauty",
            label: "Facebook",
            iconSrc: "https://c.animaapp.com/mpke0433qmtH28/assets/icon-5.svg",
            iconAlt: "Icon",
          },
          {
            href: "https://twitter.com/jonesroadbeauty",
            label: "Twitter",
            iconSrc: "https://c.animaapp.com/mpke0433qmtH28/assets/icon-6.svg",
            iconAlt: "Icon",
          },
          {
            href: "https://www.pinterest.com/jonesroadbeauty/",
            label: "Pinterest",
            iconSrc: "https://c.animaapp.com/mpke0433qmtH28/assets/icon-7.svg",
            iconAlt: "Icon",
          },
        ]}
        listClassName="flex justify-between w-full md:block md:justify-normal md:w-auto"
        itemClassName="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
        spanClassName="absolute block h-px w-px overflow-hidden -m-px md:static md:inline md:h-auto md:w-auto md:overflow-visible md:m-0"
      />
      <FooterColumn
        title="Stores"
        items={[{ href: "/pages/our-stores", label: "Our Stores" }]}
      />
    </div>
  );
};
