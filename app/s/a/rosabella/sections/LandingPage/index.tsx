"use client";

import { AdvertorialProvider, type CopyType, type MediaType } from "./context";
import { AdvertorialBanner } from "../MainLayout/components/AdvertorialBanner";
import { AlertBanner } from "../MainLayout/components/AlertBanner";
import { ArticleLayout } from "../ArticleLayout";

type LandingPageProps = {
  copy: CopyType;
  media: MediaType;
};

export function LandingPage({ copy, media }: LandingPageProps) {
  return (
    <AdvertorialProvider copy={copy} media={media}>
      <div className="text-gray-800 text-sm bg-white bg-no-repeat bg-size-[100%] box-border caret-transparent outline-[3px] text-center font-montserrat">
        <main className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full">
          <AdvertorialBanner />
          <AlertBanner />
          <ArticleLayout />
        </main>
      </div>
    </AdvertorialProvider>
  );
}
