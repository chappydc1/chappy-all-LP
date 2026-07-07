"use client";
import { HearHiddenNextControl } from "./components/HearHiddenNextControl";
import { HearHeader } from "./sections/Header";
import { HearQualificationBanner } from "./sections/QualificationBanner";
import { HearSecondaryBanner } from "./sections/SecondaryBanner";
import { HearQuizSection } from "./sections/QuizSection";
import { HearInsuranceAndFooterSection } from "./sections/InsuranceAndFooterSection";
import { HearHipaaModal } from "./components/HearHipaaModal";
import { HearTrackingFrame } from "./components/HearTrackingFrame";

export default function HearQuizHearPage() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-open_sans">
      <HearHiddenNextControl />
      <HearHeader />
      <HearQualificationBanner />
      <HearSecondaryBanner />
      <HearQuizSection />
      <div className="bg-sky-700 caret-transparent h-px outline-[3px] mb-2.5"></div>
      <HearInsuranceAndFooterSection />
      <HearHipaaModal />
      <HearTrackingFrame />
    </div>
  );
}
