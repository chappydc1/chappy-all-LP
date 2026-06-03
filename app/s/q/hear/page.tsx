"use client";
import { HiddenNextControl } from "./components/HiddenNextControl";
import { Header } from "./sections/Header";
import { QualificationBanner } from "./sections/QualificationBanner";
import { SecondaryBanner } from "./sections/SecondaryBanner";
import { QuizSection } from "./sections/QuizSection";
import { InsuranceAndFooterSection } from "./sections/InsuranceAndFooterSection";
import { HipaaModal } from "./components/HipaaModal";
import { TrackingFrame } from "./components/TrackingFrame";

export default function QuizHearPage() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-open_sans">
      <HiddenNextControl />
      <Header />
      <QualificationBanner />
      <SecondaryBanner />
      <QuizSection />
      <div className="bg-sky-700 caret-transparent h-px outline-[3px] mb-2.5"></div>
      <InsuranceAndFooterSection />
      <HipaaModal />
      <TrackingFrame />
    </div>
  );
}
