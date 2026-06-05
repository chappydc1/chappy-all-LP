"use client"
import { LpContext, type CopyJson, type MediaJson } from "../../context/LpContext"
import { AnnouncementBar } from "../AnnouncementBar"
import { Header } from "../Header"
import { HeroSection } from "../HeroSection"
import { EducationSection } from "../EducationSection"
import { CustomerSurveySection } from "../CustomerSurveySection"
import { SupportComparisonSection } from "../SupportComparisonSection"
import { FeaturedTestimonialsSection } from "../FeaturedTestimonialsSection"
import { PromiseSection } from "../PromiseSection"
import { QualityPromiseSection } from "../QualityPromiseSection"
import { ResultsTimelineSection } from "../ResultsTimelineSection"
import { OptionsComparisonSection } from "../OptionsComparisonSection"
import { PreparationSection } from "../PreparationSection"
import { OfferSection } from "../OfferSection"
import { CustomerReviewsSection } from "../CustomerReviewsSection"
import { FaqSection } from "../FaqSection"
import { Footer } from "../Footer"
import { StickyMobileCta } from "../../components/StickyMobileCta"
import { ExternalLinkContainer } from "../../components/ExternalLinkContainer"
import { TrackingFrame } from "../../components/TrackingFrame"
import { ChatWidget } from "../../components/ChatWidget"

interface LpMainProps {
  copy: CopyJson
  media: MediaJson
}

export function LpMain({ copy, media }: LpMainProps) {
  return (
    <LpContext.Provider value={{ copy, media }}>
      <div className="text-gray-800 text-sm bg-white bg-no-repeat leading-[21px] text-center font-libre_franklin">
        <main className="items-center flex flex-col min-h-[1000px] w-full">
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
        <ExternalLinkContainer />
        <TrackingFrame />
        <ChatWidget />
      </div>
    </LpContext.Provider>
  )
}
