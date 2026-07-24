export const MensHealthNavigationMenu = () => {
  return (
    <nav
      role="navigation"
      className="text-sm box-border caret-transparent gap-x-[normal] hidden flex-wrap leading-[22.4px] outline-[3px] gap-y-[normal] md:text-base md:gap-x-6 md:flex md:leading-[25.6px] md:gap-y-4"
    >
      <ul
        role="list"
        className="text-sm box-border caret-transparent contents leading-[22.4px] list-none outline-[3px] pl-0 md:text-base md:leading-[25.6px]"
      >
        <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <a
            href="/"
            className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
          >
            Home
          </a>
        </li>
        <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <a
            href="https://ultimapeak.com/a/track"
            className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
          >
            Track Order
          </a>
        </li>
        <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <a
            href="/pages/contact-us"
            className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
          >
            Contact
          </a>
        </li>
        <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <a
            href="https://ultimapeak.com/blogs/news/"
            className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
          >
            News
          </a>
        </li>
      </ul>
    </nav>
  );
};
