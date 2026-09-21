import { PageShell } from "./sections/PageShell";
import { AccessibilityNode } from "./components/AccessibilityNode";
import { ScratchOfferModal } from "./components/ScratchOfferModal";

export default function JavvyCoffeeQuizPage() {
  return (
    <div className="relative box-border caret-transparent outline-[3px] w-full">
      <PageShell />
      <AccessibilityNode />
      <ScratchOfferModal />
    </div>
  );
}
