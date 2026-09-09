import { ShippingBar } from "./sections/ShippingBar"
import { Header } from "./sections/Header"
import { ProductHero } from "./sections/ProductHero"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FaqSection } from "./sections/FaqSection"
import { ProblemSolutionSection } from "./sections/ProblemSolutionSection"
import { StagesSection } from "./sections/StagesSection"
import { CirculationComparisonIntro } from "./sections/CirculationComparisonIntro"
import { ResultsTimelineSection } from "./sections/ResultsTimelineSection"
import { BrandComparisonSection } from "./sections/BrandComparisonSection"
import { SurveyResultsSection } from "./sections/SurveyResultsSection"
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection"
import { Footer } from "./sections/Footer"
import { UtilityLink } from "./components/UtilityLink"

export default function RosabellaPdpPage(): React.JSX.Element {
  return (
    <main>
      <ShippingBar />
      <Header />
      <ProductHero />
      <TestimonialsSection />
      <FaqSection />
      <ProblemSolutionSection />
      <StagesSection />
      <CirculationComparisonIntro />
      <ResultsTimelineSection />
      <BrandComparisonSection />
      <SurveyResultsSection />
      <CustomerReviewsSection />
      <Footer />
      <UtilityLink />
    </main>
  )
}
