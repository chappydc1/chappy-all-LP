import type { Metadata } from "next";
import { Header } from "./sections/Header";
import { AdvertorialBar } from "./sections/AdvertorialBar";
import { ArticleLayout } from "./sections/ArticleLayout";
import { Footer } from "./sections/Footer";
import { StickyCta } from "./components/StickyCta";
import { TermsModal } from "./components/TermsModal";
import { PrivacyModal } from "./components/PrivacyModal";

export const metadata: Metadata = {
  title: "Nexa",
  description: "Nexa Landing Page",
};

export default function NexaPage() {
  return (
    <div className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-4 list-outside list-disc outline-[3px] pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-times_new_roman">
      <Header />
      <AdvertorialBar />
      <ArticleLayout />
      <Footer />
      <StickyCta />
      <TermsModal />
      <PrivacyModal />
    </div>
  );
}
