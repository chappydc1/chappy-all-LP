import type { Metadata } from "next";
import { NexaHeader } from "./sections/Header";
import { NexaAdvertorialBar } from "./sections/AdvertorialBar";
import { NexaArticleLayout } from "./sections/ArticleLayout";
import { NexaFooter } from "./sections/Footer";
import { NexaStickyCta } from "./components/StickyCta";
import { NexaTermsModal } from "./components/TermsModal";
import { NexaPrivacyModal } from "./components/PrivacyModal";

export const metadata: Metadata = {
  title: "Nexa",
  description: "Nexa Landing Page",
};

export default function NexaPage() {
  return (
    <div className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-4 list-outside list-disc outline-[3px] pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-times_new_roman">
      <NexaHeader />
      <NexaAdvertorialBar />
      <NexaArticleLayout />
      <NexaFooter />
      <NexaStickyCta />
      <NexaTermsModal />
      <NexaPrivacyModal />
    </div>
  );
}
