"use client";

import { EmmaHeroSection } from "./sections/HeroSection";
import { EmmaPricingTable } from "./sections/PricingTable";
import { EmmaDoctorBio } from "./sections/DoctorBio";
import { EmmaFooter } from "./sections/Footer";
import { EmmaVideoModal } from "./components/EmmaVideoModal";

export const EmmaVSL = () => {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white">
      <EmmaHeroSection />
      <EmmaPricingTable showFullContent={true} />
      <EmmaDoctorBio />
      <EmmaFooter />
      <EmmaVideoModal />
    </div>
  );
};

export const EmmaApp = EmmaVSL;
