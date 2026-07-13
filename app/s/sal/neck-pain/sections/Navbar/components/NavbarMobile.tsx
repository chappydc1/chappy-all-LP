import { content } from "../../../content";

export const NavbarMobile = () => {
  return (
    <div className="box-border caret-transparent block text-center md:hidden md:text-start">
      <img
        src={content.navbar.logoUrl}
        alt={content.navbar.logoAlt}
        className="box-border caret-transparent inline-block h-[46px] max-w-full text-center w-[100px] md:text-start md:w-auto"
      />
    </div>
  );
};
