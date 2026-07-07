import { NuzCountdownBanner } from "./sections/CountdownBanner";
import { NuzNavbar } from "./sections/Navbar";
import { NuzHeroSection } from "./sections/HeroSection";
import { NuzMediaBanner } from "./sections/MediaBanner";
import { NuzStickyBar } from "./sections/StickyBar";
import { NuzMobileOrderBar } from "./sections/MobileOrderBar";
import { NuzTestimonialsSection } from "./sections/TestimonialsSection";
import { NuzFAQSection } from "./sections/FAQSection";
import { NuzGuaranteeSection } from "./sections/GuaranteeSection";
import { NuzComparisonTable } from "./sections/ComparisonTable";
import { NuzFooter } from "./sections/Footer";
import { NuzPainPointsSection } from "./sections/PainPointsSection";
import { NuzHowItWorksSection } from "./sections/HowItWorksSection";
import { NuzFeatureSection } from "./sections/FeatureSection";
import { NuzVideoSection } from "./sections/VideoSection";
import { NuzTrustpilotReviews } from "./sections/TrustpilotReviews";

export const NuzLandingPage = () => {
  return (
    <div className="text-gray-800 text-sm not-italic normal-nums font-normal bg-white min-h-screen font-proxima_nova">
      <NuzCountdownBanner />
      <NuzStickyBar />
      <NuzNavbar />
      <NuzHeroSection />
      <NuzMediaBanner />
      <NuzVideoSection />
      <NuzPainPointsSection />
      <NuzFeatureSection />
      <NuzHowItWorksSection />
      <NuzComparisonTable />
      <NuzTrustpilotReviews />
      <NuzTestimonialsSection />
      <NuzFAQSection />
      <NuzGuaranteeSection />
      <NuzFooter />
      <NuzMobileOrderBar />
    </div>
  );
};
