import copy from "../../copy.json";
import { VitalitydigestFooterLogo } from "./components/VitalitydigestFooterLogo";

export function VitalitydigestFooter(): React.ReactElement {
  return (
    <footer className="bg-zinc-800 px-2.5 py-5">
      <div className="mx-auto w-full max-w-[1170px] px-[10%] text-xs leading-[18px]">
        <div className="p-2.5 text-white">
          <p>{copy.footer.copyright}</p>
          <p>{copy.footer.address}</p>
        </div>
        <div className="p-2.5 text-stone-300">
          {copy.footer.disclaimerParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-2.5">
              {paragraph}
            </p>
          ))}
        </div>
        <VitalitydigestFooterLogo />
      </div>
    </footer>
  );
}
