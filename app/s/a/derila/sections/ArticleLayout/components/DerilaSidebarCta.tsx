import adv from "../../../copy.json";
import media from "../../../media.json";

export const DerilaSidebarCta = () => {
  const { productUrl, sidebar } = adv;
  const img = media.sidebarImage;

  return (
    <div className="sticky box-border caret-transparent hidden basis-0 grow max-w-full min-h-0 min-w-0 outline-[3px] text-center w-full px-[15px] py-4 top-0 md:block md:min-h-[auto] md:min-w-[auto]">
      <h2 className="text-[23.904px] font-bold box-border caret-transparent leading-[28.6848px] outline-[3px]">
        {sidebar.headline}
      </h2>
      <a
        href={productUrl}
        className="text-sky-600 font-bold box-border caret-transparent block underline my-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className="box-border caret-transparent max-w-full outline-[3px] mx-auto"
        />
      </a>
      <a
        href={productUrl}
        className="text-white text-base font-bold bg-[linear-gradient(rgb(136,42,223),rgb(124,12,225))] box-border caret-transparent inline-block leading-[19.2px] uppercase align-middle w-full border border-purple-900 mb-1 px-5 py-4 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
      >
        {sidebar.ctaButton}
      </a>
    </div>
  );
};
