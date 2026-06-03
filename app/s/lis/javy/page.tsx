import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Main } from "./sections/Main";
import { Footer } from "./sections/Footer";
import { SpinWheelModal } from "./sections/SpinWheelModal";

export default function JavyLandingPage() {
  return (
    <div className="relative box-border w-full">
      <AnnouncementBar />
      <Main />
      <Footer />
      <SpinWheelModal />
    </div>
  );
}
