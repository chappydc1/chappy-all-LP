import { AnnouncementBar } from "../AnnouncementBar";
import { Header } from "../Header";
import { HeroSection } from "../HeroSection";
import { EducationSection } from "../EducationSection";
import { CustomerSurveySection } from "../CustomerSurveySection";
import { SupportComparisonSection } from "../SupportComparisonSection";
import { FeaturedTestimonialsSection } from "../FeaturedTestimonialsSection";
import { PromiseSection } from "../PromiseSection";
import { QualityPromiseSection } from "../QualityPromiseSection";
import { ResultsTimelineSection } from "../ResultsTimelineSection";
import { OptionsComparisonSection } from "../OptionsComparisonSection";
import { PreparationSection } from "../PreparationSection";
import { OfferSection } from "../OfferSection";
import { CustomerReviewsSection } from "../CustomerReviewsSection";
import { FaqSection } from "../FaqSection";
import { Footer } from "../Footer";
import { StickyMobileCta } from "../../components/StickyMobileCta";

export const Main = () => {
  return (
    <main
      className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full"
    >
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <EducationSection />
      <CustomerSurveySection />
      <SupportComparisonSection />
      <FeaturedTestimonialsSection />
      <PromiseSection />
      <QualityPromiseSection />
      <ResultsTimelineSection />
      <OptionsComparisonSection />
      <PreparationSection />
      <OfferSection />
      <CustomerReviewsSection />
      <FaqSection />
      <Footer />
      <StickyMobileCta />
    </main>
  );
};
