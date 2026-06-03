type NavLink = { href: string; text: string; underline?: boolean };

export const DesktopMenu = ({ links }: { links: NavLink[] }) => {
  return (
    <div className="items-center box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="items-center box-border caret-transparent flex min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-white text-base box-border caret-transparent block min-h-0 min-w-0 outline-[3px] text-center uppercase mt-5 mx-[15px] md:text-sm md:min-h-[auto] md:min-w-[auto] md:mt-0 md:mx-[7px]${link.underline ? " max-w-[250px] underline mb-2.5 p-2.5 rounded-lg md:my-0" : ""}`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};
