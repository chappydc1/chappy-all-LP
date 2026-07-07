"use client";

import { RosabellaAdvertorialProvider, type RosabellaCopyType, type RosabellaMediaType } from "./context";
import { RosabellaAdvertorialBanner } from "../MainLayout/components/AdvertorialBanner";
import { RosabellaAlertBanner } from "../MainLayout/components/AlertBanner";
import { RosabellaArticleLayout } from "../ArticleLayout";

type LandingPageProps = {
  copy: RosabellaCopyType;
  media: RosabellaMediaType;
};

export function RosabellaLandingPage({ copy, media }: LandingPageProps) {
  return (
    <RosabellaAdvertorialProvider copy={copy} media={media}>
      <div className="text-gray-800 text-sm bg-white bg-no-repeat bg-size-[100%] box-border caret-transparent outline-[3px] text-center font-montserrat">
        <main className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full">
          <RosabellaAdvertorialBanner />
          <RosabellaAlertBanner />
          <RosabellaArticleLayout />
        </main>
      </div>
    </RosabellaAdvertorialProvider>
  );
}
