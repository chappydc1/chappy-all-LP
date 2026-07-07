const CROSS = "/images/nebroo/1700045983205_1666773955_cross_v1642658299531_svg.png";

export const NebrooPricingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start flex-wrap md:flex-nowrap mt-0 md:mt-2.5 max-w-[1200px] mx-auto px-2.5 py-5 gap-5">
      {/* Video — left on desktop, top on mobile */}
      <div className="w-full md:flex-1 shrink-0">
        <div className="relative w-full" style={{ paddingTop: "100%" }}>
          <iframe
            src="https://fast.wistia.net/embed/iframe/r24m921dxe?seo=false&videoFoam=true"
            title="Nebroo CIC Hearing Aids"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
            className="absolute inset-0 w-full h-full rounded-[9.5px]"
          />
        </div>
      </div>

      {/* Text — right on desktop */}
      <div className="w-full md:flex-1">
        <div className="text-2xl font-bold leading-[34px] font-montserrat mb-5">
          Unbeatable Price Without Sacrificing Quality
        </div>

        <div className="text-[17px] leading-6 font-montserrat md:leading-[26px] space-y-3">
          <p>
            Hear the laughter of your grandchildren, your favorite music, and
            conversations with loved ones clearly and naturally,{" "}
            <b className="font-bold">without spending thousands of dollars.</b>
          </p>
          <p>
            These OTC hearing aids are designed to help Americans with mild to
            moderate hearing loss and they{" "}
            <b className="font-bold">are priced at a fraction of the cost.</b>
          </p>
          <p>
            <b className="font-bold">How are the Nebroo Hearing aids so much cheaper?</b>
          </p>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            <><b className="font-bold">We cut out the middlemen,</b>{" "}avoiding markups, our product is only available on our website</>,
            <>We remove the cost of the <b className="font-bold">extra audiologist visits</b></>,
            <>We <b className="font-bold">don&apos;t rent big expensive offices and clinics</b></>,
            <>We don&apos;t have to increase prices to make space for high <b className="font-bold">sales commissions</b> to doctors</>,
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-2">
              <img src={CROSS} alt="" className="inline w-[25px] p-px shrink-0 mt-0.5" />
              <div className="text-[17px] leading-[27px] font-montserrat">{text}</div>
            </div>
          ))}
        </div>

        <div className="text-[17px] leading-[25.5px] mt-5 font-montserrat">
          This way, we bring you{" "}
          <b className="font-bold">top-quality over the counter hearing aids directly at a lower cost.</b>
        </div>
      </div>
    </div>
  );
};
