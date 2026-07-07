"use client"
import { PipiteaLpContext, type PipiteaCopyJson, type PipiteaMediaJson } from "../../context/LpContext"
import { PipiteaAnnouncementBar } from "../AnnouncementBar"
import { PipiteaHeader } from "../Header"
import { PipiteaHeroSection } from "../HeroSection"
import { PipiteaEducationSection } from "../EducationSection"
import { PipiteaCustomerSurveySection } from "../CustomerSurveySection"
import { PipiteaSupportComparisonSection } from "../SupportComparisonSection"
import { PipiteaFeaturedTestimonialsSection } from "../FeaturedTestimonialsSection"
import { PipiteaPromiseSection } from "../PromiseSection"
import { PipiteaQualityPromiseSection } from "../QualityPromiseSection"
import { PipiteaResultsTimelineSection } from "../ResultsTimelineSection"
import { PipiteaOptionsComparisonSection } from "../OptionsComparisonSection"
import { PipiteaPreparationSection } from "../PreparationSection"
import { PipiteaOfferSection } from "../OfferSection"
import { PipiteaCustomerReviewsSection } from "../CustomerReviewsSection"
import { PipiteaFaqSection } from "../FaqSection"
import { PipiteaFooter } from "../Footer"
import { PipiteaStickyMobileCta } from "../../components/StickyMobileCta"
import { PipiteaExternalLinkContainer } from "../../components/ExternalLinkContainer"
import { PipiteaTrackingFrame } from "../../components/TrackingFrame"
import { PipiteaChatWidget } from "../../components/ChatWidget"

interface LpMainProps {
  copy: PipiteaCopyJson
  media: PipiteaMediaJson
}

export function PipiteaLpMain({ copy, media }: LpMainProps) {
  return (
    <PipiteaLpContext.Provider value={{ copy, media }}>
      <div className="text-gray-800 text-sm bg-white bg-no-repeat leading-[21px] text-center font-libre_franklin">
        <main className="items-center flex flex-col min-h-[1000px] w-full">
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
        <PipiteaExternalLinkContainer />
        <PipiteaTrackingFrame />
        <PipiteaChatWidget />
      </div>
    </PipiteaLpContext.Provider>
  )
}
