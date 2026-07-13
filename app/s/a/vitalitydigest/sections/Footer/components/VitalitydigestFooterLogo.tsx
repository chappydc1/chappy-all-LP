import media from "../../../media.json";

export function VitalitydigestFooterLogo(): React.ReactElement {
  return (
    <div className="flex justify-center py-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={media.footerLogo.src} alt={media.footerLogo.alt} className="w-[100px]" />
    </div>
  );
}
