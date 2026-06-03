"use client";

import { HeroSection } from "./sections/HeroSection";
import { PricingTable } from "./sections/PricingTable";
import { DoctorBio } from "./sections/DoctorBio";
import { Footer } from "./sections/Footer";
import { VideoModal } from "./components/VideoModal";

export const EmmaVSL = () => {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white">
      <HeroSection />
      <PricingTable showFullContent={true} />
      <DoctorBio />
      <Footer />
      <VideoModal />
    </div>
  );
};

export const App = EmmaVSL;
