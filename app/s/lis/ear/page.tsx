import { EarCleanerAnnouncementBar } from "./sections/AnnouncementBar";
import { EarCleanerMain } from "./sections/Main";
import { EarCleanerFooter } from "./sections/Footer";
import { EarCleanerSpinWheelModal } from "./sections/SpinWheelModal";

export default function EarCleanerLandingPage() {
  return (
    <div className="relative box-border w-full">
      <EarCleanerAnnouncementBar />
      <EarCleanerMain />
      <EarCleanerFooter />
      <EarCleanerSpinWheelModal />
    </div>
  );
}
