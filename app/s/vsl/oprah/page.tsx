"use client";

import { type ReactNode } from "react";
import { Menu } from "lucide-react";
import { VideoModal } from "./components/VideoModal";
import { DoctorBio } from "./sections/DoctorBio";
import { Footer } from "./sections/Footer";
import { HeadlineSection } from "./sections/HeadlineSection";
import { PricingTable } from "./sections/PricingTable";
import { VideoSection } from "./sections/VideoSection";
import { useVslPricingReveal } from "./hooks/useVslPricingReveal";
import mediaJson from "./media.json";
import advJson from "./copy.json";

const HeroContainer = ({ children }: { children: ReactNode }) => (
  <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-2.5">
    <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
      {children}
    </div>
  </div>
);

const HeroLogoStrip = () => (
  <div className="relative box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-2.5">
    <div className="box-border caret-transparent w-full max-w-[min(100%,767px)] mx-auto py-5 text-center md:max-w-[min(100%,1140px)]">
      <img
        src={mediaJson.logoStrip}
        alt="Featured media logos"
        className="box-border inline-block max-w-full w-[750px]"
      />
    </div>
  </div>
);


const HealthTopBar = () => (
  <header className="bg-[#b92720] box-border flex h-[76px] w-full items-center justify-between px-7 text-white md:h-[96px] md:px-10">
    {/* Invisible spacer mirrors the menu icon width so brand stays truly centered */}
    <div className="h-12 w-12 md:h-14 md:w-14" aria-hidden="true" />
    <div className="text-[28px] font-medium leading-none tracking-[0.08em] md:text-[36px]">
      {advJson.topBar.brandName}
    </div>
    <Menu className="h-12 w-12 stroke-[3.5] md:h-14 md:w-14" aria-label="Open menu" />
  </header>
);

export default function OprahVSLPage() {
  const pricingVisible = useVslPricingReveal();

  return (
    <main className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <HealthTopBar />

      <section className="box-border caret-transparent">
        <HeroContainer>
          <HeadlineSection />
        </HeroContainer>
        <HeroContainer>
          <VideoSection />
        </HeroContainer>
        <HeroLogoStrip />
        {/* Count + closed notice always visible; individual comments gated at ≤5 min */}
        <DoctorBio showComments={pricingVisible} />
      </section>

      {/* Pricing + footer revealed only when ≤ 5 min remain in the VSL */}
      {pricingVisible && (
        <>
          <PricingTable showFullContent={true} />
          <Footer />
        </>
      )}

      <VideoModal />
    </main>
  );
}
