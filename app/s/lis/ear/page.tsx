import { EarCleanerAnnouncementBar } from "./sections/AnnouncementBar";
import { EarCleanerMain } from "./sections/Main";
import { EarCleanerFooter } from "./sections/Footer";

export default function EarCleanerLandingPage() {
  return (
    <div className="relative box-border w-full">
      <EarCleanerAnnouncementBar />
      <EarCleanerMain />
      <EarCleanerFooter />
    </div>
  );
}
