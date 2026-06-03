import { CookieConsent } from "./components/CookieConsent";
import { PageShell } from "./components/PageShell";
import { Footer } from "./sections/Footer";

export default function JonesLandingPage() {
  return (
    <>
      <CookieConsent />
      <img
        src="https://c.animaapp.com/mpke0433qmtH28/assets/icon-2.svg"
        alt="Icon"
        className="caret-transparent hidden outline-[3px] align-baseline"
      />
      <img
        src="https://c.animaapp.com/mpke0433qmtH28/assets/image-1.svg"
        alt=""
        className="absolute caret-transparent h-[960px] max-h-[990px] max-w-[371.25px] outline-[3px] pointer-events-none align-baseline w-[360px] left-0 top-0 md:max-w-[1267.2px] md:w-[1228.8px]"
      />
      <PageShell />
      <Footer />
    </>
  );
}
