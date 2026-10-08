"use client";

import {
  VitalityDigestAdvertorialProvider,
  type AdvertorialContent,
  type AdvertorialLinks,
  type AdvertorialMedia,
} from "./context";
import { VitalityDigestArticleHeader } from "../VitalityDigestArticleHeader";
import { VitalityDigestArticleContent } from "../VitalityDigestArticleContent";
import { VitalityDigestStickyCtaBar } from "../VitalityDigestStickyCtaBar";
import { VitalityDigestDisclaimer } from "../VitalityDigestDisclaimer";

export type VitalityDigestTopBarProps = {
  content: AdvertorialContent;
  links: AdvertorialLinks;
  media: AdvertorialMedia;
};

export const VitalityDigestTopBar = ({
  content,
  links,
  media,
}: VitalityDigestTopBarProps): React.ReactElement => {
  return (
    <VitalityDigestAdvertorialProvider
      content={content}
      links={links}
      media={media}
    >
      <div className="bg-white bg-no-repeat text-black text-sm w-full text-center font-open_sans">
        <main className="items-center flex flex-col min-h-[1000px] w-full">
          <VitalityDigestArticleHeader />
          <VitalityDigestArticleContent />
          <VitalityDigestStickyCtaBar />
          <VitalityDigestDisclaimer />
        </main>
      </div>
    </VitalityDigestAdvertorialProvider>
  );
};
