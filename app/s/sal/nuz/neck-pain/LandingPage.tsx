import { CountdownBanner } from "./sections/CountdownBanner";
import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { MediaBanner } from "./sections/MediaBanner";
import { StickyBar } from "./sections/StickyBar";
import { MobileOrderBar } from "./sections/MobileOrderBar";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { ComparisonTable } from "./sections/ComparisonTable";
import { Footer } from "./sections/Footer";
import { PainPointsSection } from "./sections/PainPointsSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { FeatureSection } from "./sections/FeatureSection";
import { VideoSection } from "./sections/VideoSection";
import { TrustpilotReviews } from "./sections/TrustpilotReviews";

export const LandingPage = () => {
  return (
    <div className="text-gray-800 text-sm not-italic normal-nums font-normal bg-white min-h-screen font-proxima_nova">
      <CountdownBanner />
      <StickyBar />
      <Navbar />
      <HeroSection />
      <MediaBanner />
      <VideoSection />
      <PainPointsSection />
      <FeatureSection />
      <HowItWorksSection />
      <ComparisonTable />
      <TrustpilotReviews />
      <TestimonialsSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
      <MobileOrderBar />
    </div>
  );
};
