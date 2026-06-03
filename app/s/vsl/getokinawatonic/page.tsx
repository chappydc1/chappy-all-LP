import { GetokinawatonicHeroSection } from "./sections/GetokinawatonicHeroSection";
import { GetokinawatonicSalesSection } from "./sections/GetokinawatonicSalesSection";
import { GetokinawatonicStickyCta } from "./components/GetokinawatonicStickyCta";
import { GetokinawatonicFooter } from "./sections/GetokinawatonicFooter";

export const metadata = {
  title: "Okinawa Flat Belly Tonic — VSL",
  description: "Ancient Japanese Discovery Melts 54 LBS Of Fat. Drink Daily Before 10am.",
};

export default function OkinawaTonicVSLPage() {
  return (
    <>
      <div className="bg-white bg-cover box-border caret-transparent outline-[3px]">
        <div className="bg-red-400 box-border caret-transparent min-h-[5px] outline-[3px]"></div>
        <GetokinawatonicHeroSection />
        <GetokinawatonicSalesSection />
      </div>
      <GetokinawatonicStickyCta />
      <GetokinawatonicFooter />
    </>
  );
}
