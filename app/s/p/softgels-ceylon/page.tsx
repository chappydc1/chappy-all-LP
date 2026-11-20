import { AnnouncementCountdown } from "./sections/AnnouncementCountdown"
import { BenefitsMarquee } from "./sections/BenefitsMarquee"
import { ComparisonTable } from "./sections/ComparisonTable"
import { Faq } from "./sections/Faq"
import { FeelBetter } from "./sections/FeelBetter"
import { FiveReasons } from "./sections/FiveReasons"
import { FooterBottom } from "./sections/FooterBottom"
import { FooterMain } from "./sections/FooterMain"
import { Header } from "./sections/Header"
import { PricingCards } from "./sections/PricingCards"
import { ProductMain } from "./sections/ProductMain"
import { ProvenBenefits } from "./sections/ProvenBenefits"
import { ReasonsCarousel } from "./sections/ReasonsCarousel"
import { ReviewsCarousel } from "./sections/ReviewsCarousel"
import { ReviewsList } from "./sections/ReviewsList"
import { RiskFreeTrial } from "./sections/RiskFreeTrial"
import { SocialProofSlider } from "./sections/SocialProofSlider"
import { StatsHero } from "./sections/StatsHero"
import { TopMarquee } from "./sections/TopMarquee"
import { VideoCarousel } from "./sections/VideoCarousel"
import { WellnessJourney } from "./sections/WellnessJourney"

export default function SoftgelsCeylonPage(): React.JSX.Element {
  return (
    <main>
      <AnnouncementCountdown />
      <Header />
      <TopMarquee />
      <ProductMain />
      <StatsHero />
      <ReasonsCarousel />
      <SocialProofSlider />
      <ReviewsCarousel />
      <FeelBetter />
      <ProvenBenefits />
      <BenefitsMarquee />
      <WellnessJourney />
      <FiveReasons />
      <ComparisonTable />
      <RiskFreeTrial />
      <VideoCarousel />
      <PricingCards />
      <ReviewsList />
      <Faq />
      <FooterMain />
      <FooterBottom />
    </main>
  )
}
