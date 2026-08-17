import media from "../../../media.json";

export function VitalitydigestHeaderLogo(): React.ReactElement {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={media.logo.src}
      alt={media.logo.alt}
      className="h-[29px] w-auto md:h-9"
    />
  );
}
