import adv from "../../copy.json";
import media from "../../media.json";
import { NavbarLogo } from "../Navbar/components/NavbarLogo";
import { DesktopMenu } from "../Navbar/components/DesktopMenu";
import { MobileMenu } from "../Navbar/components/MobileMenu";

export const Navbar = () => {
  const { links, homeUrl } = adv.navbar;
  const [tracking, contact, order] = links;

  return (
    <nav className="bg-[linear-gradient(284.84deg,rgb(36,86,160)_30.75%,rgb(74,163,233)_85.96%)] box-border caret-transparent flex flex-wrap list-none outline-[3px] w-full py-2.5">
      <div className="box-border caret-transparent max-w-none min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto px-[15px] md:max-w-[1023px] md:px-10">
        <div className="relative items-center box-border caret-transparent flex justify-between outline-[3px]">
          <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] w-[75px] md:hidden md:min-h-0 md:min-w-0"></div>
          <NavbarLogo homeUrl={homeUrl} logo={media.logo} />
          <DesktopMenu links={links} />
          <MobileMenu
            variant="icon"
            containerVariantClass="flex justify-end min-h-[auto] min-w-[auto] w-[75px] md:hidden md:min-h-0 md:min-w-0"
            iconSrc={media.icons.mobileMenu.src}
            iconAlt={media.icons.mobileMenu.alt}
            trackingHref=""
            trackingText=""
            contactHref=""
            contactText=""
            orderHref=""
            orderText=""
          />
        </div>
        <MobileMenu
          variant="links"
          containerVariantClass="items-center box-border caret-transparent hidden flex-col outline-[3px]"
          iconSrc=""
          iconAlt=""
          trackingHref={tracking.href}
          trackingText={tracking.text}
          contactHref={contact.href}
          contactText={contact.text}
          orderHref={order.href}
          orderText={order.text}
        />
      </div>
    </nav>
  );
};
