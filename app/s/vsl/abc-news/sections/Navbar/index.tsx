import { AbcNewsNavbarMenuButton } from "../Navbar/components/NavbarMenuButton";
import { AbcNewsNavbarLogo } from "../Navbar/components/NavbarLogo";
import { AbcNewsNavbarLinks } from "../Navbar/components/NavbarLinks";
import { AbcNewsNavbarActions } from "../Navbar/components/NavbarActions";
import { AbcNewsNotificationPopover } from "../../components/NotificationPopover";

export const AbcNewsNavbar = () => {
  return (
    <nav
      role="navigation"
      className="sticky bg-white shadow-[rgba(0,0,0,0.03)_0px_8px_10px_0px] box-border caret-transparent outline-[3px] z-[999] top-0 inset-x-0"
    >
      <div className="relative items-center box-border caret-transparent h-[54px] outline-[3px] w-full mx-0 md:h-[72px] md:w-[1136px] md:mx-auto">
        <div className="box-border caret-transparent flex h-full justify-start outline-[3px] w-full mx-auto pl-4 pr-2.5 md:px-0">
          <AbcNewsNavbarMenuButton />
          <AbcNewsNavbarLogo />
          <AbcNewsNavbarLinks />
          <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px]"></div>
          <AbcNewsNavbarActions showIconAction={true} />
          <AbcNewsNavbarActions
            role="menu"
            containerClassName="items-center box-border caret-transparent flex h-full justify-evenly min-h-[auto] min-w-[auto] outline-[3px]"
            showNotificationPopover={true}
            notificationPopover={<AbcNewsNotificationPopover />}
            profileIconSrc="/images/abc-news/icon-4.svg"
          />
          <AbcNewsNavbarActions
            containerClassName="[align-items:normal] box-content caret-black block min-h-0 min-w-0 outline-0 md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-8 md:min-w-[175px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto]"
            streamHref="https://www.disneyplus.com/browse/entity-7c160b55-f261-476a-b3f7-f3a6b083cba2?cid=DTCI-Site-ABCNews-Site-Awareness-DisneyPlus-US-DisneyPlus-NA-EN-NavLink-NA-NA"
            streamLinkClassName="[align-items:normal] bg-scroll bg-blend-normal bg-clip-border bg-transparent bg-none bg-origin-padding bg-repeat bg-auto box-content caret-black inline justify-normal min-h-0 min-w-0 ml-0 p-0 rounded-none md:items-end md:aspect-auto md:bg-teal-900 md:bg-[radial-gradient(150%_350%_at_-10%_-150%,rgba(51,221,255,0.7)_0px,rgba(51,221,255,0)_100%),none] md:bg-size-[auto,auto] md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-[position:0%,0%_0%,0%] md:ml-3 md:pt-1.5 md:pb-[9px] md:px-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-md hover:text-blue-900 hover:border-blue-900"
            streamTextClassName="text-black font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 pr-0 pb-0 font-times md:text-white md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pr-1 md:pb-0.5 md:scroll-m-0 md:scroll-p-[auto] md:font-post_grotesk"
            streamLogoSrc="/images/abc-news/DisneyPlus.svg"
            streamLogoAlt="stream logo"
            streamLogoClassName="box-content caret-black min-h-0 min-w-0 outline-0 align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[45px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
      </div>
    </nav>
  );
};
