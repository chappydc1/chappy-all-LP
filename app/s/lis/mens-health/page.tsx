import { MensHealthAnnouncementBar } from "./sections/AnnouncementBar";
import { MensHealthHeader } from "./sections/Header";
import { MensHealthMainContent } from "./sections/MainContent";
import { MensHealthCurrencyWidget } from "./components/CurrencyWidget";

export default function MensHealthPage() {
  return (
    <>
      <MensHealthAnnouncementBar />
      <MensHealthHeader />
      <MensHealthMainContent />
      <MensHealthCurrencyWidget />
    </>
  );
}
