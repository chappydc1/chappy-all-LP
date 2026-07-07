import { JavyAnnouncementBar } from "./sections/AnnouncementBar";
import { JavyMain } from "./sections/Main";
import { JavyFooter } from "./sections/Footer";
import { JavySpinWheelModal } from "./sections/SpinWheelModal";

export default function JavyLandingPage() {
  return (
    <div className="relative box-border w-full">
      <JavyAnnouncementBar />
      <JavyMain />
      <JavyFooter />
      <JavySpinWheelModal />
    </div>
  );
}
