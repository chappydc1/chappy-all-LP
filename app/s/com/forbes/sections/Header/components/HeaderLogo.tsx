export const HeaderLogo = ({ logoSrc }: { logoSrc: string }) => {
  return (
    <a
      href="/"
      className="block transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
      aria-label="Forbes Health Home"
    >
      <img
        src={logoSrc}
        alt="Forbes Health"
        className="forbes-header__logo"
      />
    </a>
  );
};
