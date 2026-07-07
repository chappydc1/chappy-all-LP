import media from "../../../media.json";

export const DerilaFooterLogo = () => {
  const { footerLogo } = media;

  return (
    <div className="items-center box-border caret-transparent flex justify-between outline-[3px] mb-6">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={footerLogo.src} alt={footerLogo.alt} className="box-border caret-transparent outline-[3px]" />
      </div>
    </div>
  );
};
