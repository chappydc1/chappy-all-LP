import { VitalitydigestArticle } from "../Article";
import { VitalitydigestFooter } from "../Footer";
import { VitalitydigestHeader } from "../Header";
import { VitalitydigestStickyCtaBar } from "../StickyCtaBar";

export function VitalitydigestPageShell(): React.ReactElement {
  return (
    <main className="w-full bg-white text-center font-open_sans text-black">
      <VitalitydigestHeader />
      <div className="py-5">
        <VitalitydigestArticle />
      </div>
      <VitalitydigestStickyCtaBar />
      <VitalitydigestFooter />
    </main>
  );
}
