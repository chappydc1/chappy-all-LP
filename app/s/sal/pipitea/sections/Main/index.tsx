import { PipiteaAnnouncementBar } from "../AnnouncementBar";
import { PipiteaHeader } from "../Header";
import { PipiteaHeroSection } from "../HeroSection";
import { PipiteaEducationSection } from "../EducationSection";
import { PipiteaCustomerSurveySection } from "../CustomerSurveySection";
import { PipiteaSupportComparisonSection } from "../SupportComparisonSection";
import { PipiteaFeaturedTestimonialsSection } from "../FeaturedTestimonialsSection";
import { PipiteaPromiseSection } from "../PromiseSection";
import { PipiteaQualityPromiseSection } from "../QualityPromiseSection";
import { PipiteaResultsTimelineSection } from "../ResultsTimelineSection";
import { PipiteaOptionsComparisonSection } from "../OptionsComparisonSection";
import { PipiteaPreparationSection } from "../PreparationSection";
import { PipiteaOfferSection } from "../OfferSection";
import { PipiteaCustomerReviewsSection } from "../CustomerReviewsSection";
import { PipiteaFaqSection } from "../FaqSection";
import { PipiteaFooter } from "../Footer";
import { PipiteaStickyMobileCta } from "../../components/StickyMobileCta";

export const PipiteaMain = () => {
  return (
    <main
      className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full"
    >
      <PipiteaAnnouncementBar />
      <PipiteaHeader />
      <PipiteaHeroSection />
      <PipiteaEducationSection />
      <PipiteaCustomerSurveySection />
      <PipiteaSupportComparisonSection />
      <PipiteaFeaturedTestimonialsSection />
      <PipiteaPromiseSection />
      <PipiteaQualityPromiseSection />
      <PipiteaResultsTimelineSection />
      <PipiteaOptionsComparisonSection />
      <PipiteaPreparationSection />
      <PipiteaOfferSection />
      <PipiteaCustomerReviewsSection />
      <PipiteaFaqSection />
      <PipiteaFooter />
      <PipiteaStickyMobileCta />
    </main>
  );
};
