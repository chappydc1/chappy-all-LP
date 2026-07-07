type FooterProps = {
  logoSrc: string;
  disclaimer: string;
  copyright: string;
};

export const ForbesFooter = ({ logoSrc, disclaimer, copyright }: FooterProps) => {
  return (
    <footer className="forbes-footer">
      <p className="forbes-footer__disclosure">{disclaimer}</p>
      <a
        href="/"
        className="block transition-opacity duration-200 hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded"
        aria-label="Forbes Health Home"
      >
        <img src={logoSrc} alt="Forbes Health" className="forbes-footer__logo" />
      </a>
      <p className="forbes-footer__copyright">{copyright}</p>
    </footer>
  );
};
