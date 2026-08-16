import adv from "./copy.json";
import media from "./media.json";

export const metadata = {
  title: `${adv.product} — ${adv.headline}`,
  description: adv.intro.pivot,
};

function TestimonialBlock({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="flex flex-col mt-5 py-3 w-full">
      <img
        src={media.testimonialAvatar}
        alt="Testimonial"
        className="w-[120px] max-w-full"
      />
      <div className="text-stone-800 text-base font-medium leading-[22px] text-left mt-2.5 font-montserrat md:text-lg md:font-normal">
        <b className="block text-base font-bold md:text-lg">{quote}</b>
        <span className="text-base font-medium md:text-lg md:font-normal">{author}</span>
      </div>
    </div>
  );
}

function BenefitSection({
  benefit,
  mediaSrc,
  mediaType,
  reversed = false,
}: {
  benefit: (typeof adv.benefits)[0];
  mediaSrc: string;
  mediaType: "video" | "image";
  reversed?: boolean;
}) {
  const mediaEl =
    mediaType === "video" ? (
      <video
        loop
        autoPlay
        playsInline
        muted
        src={mediaSrc}
        className="w-full rounded-[10px]"
      />
    ) : (
      <img src={mediaSrc} alt={benefit.title} className="w-full rounded-[10px]" />
    );

  return (
    <div className="max-w-[1200px] mx-auto w-[95%] md:w-[85%] mb-[50px]">
      <div
        className={`flex flex-col md:flex-row md:items-stretch gap-0 ${reversed ? "md:flex-row-reverse" : ""}`}
      >
        <div className="md:flex-1">
          <div className="flex items-center pt-3 pb-[15px] md:hidden">
            <span className="text-emerald-500 text-[45px] font-bold leading-[49px] font-montserrat w-10 shrink-0 text-center">
              {benefit.number}
            </span>
            <span className="text-stone-800 text-[21px] font-extrabold leading-[30px] pl-[15px] font-montserrat">
              {benefit.title}
            </span>
          </div>
          {mediaEl}
        </div>

        <div className="md:flex-1 mt-[15px] md:mt-0 md:pl-10">
          <div className="hidden md:flex items-center pb-2.5 pt-3">
            <span className="text-emerald-500 text-[73px] font-bold leading-[85px] font-montserrat w-[80px] shrink-0 text-center">
              {benefit.number}
            </span>
            <span className="text-stone-800 text-[26px] font-extrabold leading-8 pl-2.5 font-montserrat">
              {benefit.title}
            </span>
          </div>
          <div className="text-stone-800 text-lg font-medium leading-[22px] text-left font-montserrat mt-[5px]">
            {benefit.body.split("\n\n").map((para, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {para}
              </p>
            ))}
          </div>
          <TestimonialBlock
            quote={benefit.testimonial.quote}
            author={benefit.testimonial.author}
          />
        </div>
      </div>
    </div>
  );
}

export default function RejuvacarePage() {
  return (
    <>
      <div className="hidden" />

      {/* Header */}
      <div className="bg-emerald-500 w-full">
        <div className="max-w-[1016px] mx-auto flex items-center pt-3 pb-2 md:pb-[9px] px-2.5 md:px-0">
          <img
            src={media.logo}
            alt="Better Living Logo"
            className="w-[200px] max-w-full"
          />
        </div>
      </div>

      {/* Article body */}
      <div className="bg-white md:bg-transparent">
        {/* Headline + hero */}
        <div className="max-w-[1000px] mx-auto w-[95%] md:w-full mt-2.5 md:mt-0">
          <div className="text-stone-800 text-[21px] font-extrabold leading-[35px] text-left mt-0 mb-[15px] pt-px font-montserrat md:text-4xl md:leading-[55px] md:mt-2.5 md:mb-5">
            {adv.headline}{" "}
            <span className="bg-yellow-400">{adv.headlineHighlight}</span>
          </div>
          <img
            src={media.hero}
            alt="Hero"
            className="w-full rounded-[10px]"
          />
        </div>

        {/* Intro body */}
        <div className="max-w-[1000px] mx-auto w-[95%] md:w-full my-4 md:pb-10">
          <div className="text-lg font-medium leading-[27px] text-left font-montserrat">
            <b>{adv.intro.hook}</b>
            <div className="mt-2">
              {adv.intro.body.split("\n\n").map((para, i) => (
                <div key={i} className="mt-2">
                  {para}
                </div>
              ))}
            </div>
          </div>
          <div className="text-[21px] font-extrabold leading-[31.5px] text-center my-[15px] font-montserrat md:text-[26px] md:leading-[39px]">
            {adv.intro.pivot}
          </div>
          <div className="text-lg font-medium leading-[27px] text-left mt-2 font-montserrat">
            {adv.intro.productIntro}
          </div>
          <div className="text-[21px] font-extrabold leading-[31.5px] text-center mt-[15px] font-montserrat md:text-[26px] md:leading-[39px]">
            {adv.intro.sectionTitle}
          </div>
        </div>

        {/* Benefit 1 — video */}
        <BenefitSection
          benefit={adv.benefits[0]}
          mediaSrc={media.benefits["1"].src}
          mediaType="video"
        />

        {/* Benefit 2 — square aspect-ratio video */}
        <div className="max-w-[1200px] mx-auto w-[95%] md:w-[85%] mb-[50px]">
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="md:flex-1">
              <div className="flex items-center pt-3 pb-5 md:hidden">
                <span className="text-emerald-500 text-[45px] font-bold leading-[49px] font-montserrat w-10 shrink-0 text-center">
                  {adv.benefits[1].number}
                </span>
                <span className="text-stone-800 text-[21px] font-extrabold leading-[30px] pl-[15px] font-montserrat">
                  {adv.benefits[1].title}
                </span>
              </div>
              <div className="relative w-full overflow-hidden rounded-[10px]" style={{ paddingTop: "100%" }}>
                <video
                  loop
                  autoPlay
                  playsInline
                  muted
                  src={media.benefits["2"].src}
                  className="absolute h-full w-full left-0 top-0 object-cover"
                />
              </div>
            </div>

            <div className="md:flex-1 mt-3 md:mt-0 md:pl-10">
              <div className="hidden md:flex items-center pb-2.5 pt-3">
                <span className="text-emerald-500 text-[73px] font-bold leading-[85px] font-montserrat w-[80px] shrink-0 text-center">
                  {adv.benefits[1].number}
                </span>
                <span className="text-stone-800 text-[26px] font-extrabold leading-8 pl-2.5 font-montserrat">
                  {adv.benefits[1].title}
                </span>
              </div>
              <div className="text-stone-800 text-lg font-medium leading-[22px] text-left mt-[5px] font-montserrat">
                {adv.benefits[1].body.split("\n\n").map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-3" : ""}>
                    {para}
                  </p>
                ))}
              </div>
              <TestimonialBlock
                quote={adv.benefits[1].testimonial.quote}
                author={adv.benefits[1].testimonial.author}
              />
            </div>
          </div>
        </div>

        {/* Benefits 3–7 — images, alternating layout */}
        {adv.benefits.slice(2).map((benefit, i) => (
          <BenefitSection
            key={benefit.number}
            benefit={benefit}
            mediaSrc={media.benefits[(i + 3).toString() as keyof typeof media.benefits].src}
            mediaType="image"
            reversed={i % 2 !== 0}
          />
        ))}

        {/* CTA box */}
        <div className="px-[15px] md:px-0 font-montserrat">
          <div className="shadow-[rgb(223,223,223)_0px_1px_11.1px_10px] max-w-[1000px] mx-auto w-full mb-10 rounded-[15px]">
            <div className="flex flex-col md:flex-row md:flex-nowrap items-center md:items-stretch pt-5 pb-[15px] px-[15px] md:pl-0 md:pr-10 md:pt-[15px]">
              <div className="w-full md:basis-[35%] md:shrink-0 flex items-center justify-center md:block">
                <div className="w-full">
                  <div className="md:hidden pb-3 px-[5px]">
                    <h1 className="text-stone-800 text-[17px] font-bold leading-[27.2px] text-center mt-0 mb-2.5 font-montserrat">
                      <span className="text-red-600">{adv.cta.urgencyPrefix}</span>{" "}
                      {adv.cta.urgencyHeadline}
                    </h1>
                  </div>
                  <img
                    src={media.cta.product}
                    alt="Tonepatch product"
                    className="w-full md:w-[90%] rounded-[10px] md:rounded-none mb-px md:mb-0"
                  />
                </div>
              </div>

              <div className="w-full md:basis-3/5 flex flex-col items-center md:items-start justify-center">
                <div className="w-full">
                  <h1 className="hidden md:block text-stone-800 text-[19px] font-bold leading-[31.2px] text-center mt-5 mb-2.5 font-montserrat">
                    <span className="text-red-700">{adv.cta.urgencyPrefix}</span>{" "}
                    {adv.cta.urgencyHeadline}
                  </h1>
                  <div className="text-[17px] leading-[25.5px] text-left mb-[15px] md:mb-0 font-montserrat">
                    {adv.cta.body.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-3" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <a
                    href=""
                    className="block w-full text-center text-slate-50 text-lg font-bold bg-emerald-500 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] tracking-[0.25px] leading-[27px] px-2.5 py-[15px] rounded font-montserrat md:text-3xl md:px-10 hover:bg-emerald-600"
                  >
                    {adv.cta.buttonText}
                  </a>
                  <div className="bg-neutral-100 flex justify-around mt-2 px-2.5 py-[7px] rounded-[10px] md:mt-[7px]">
                    <div className="text-sm leading-[21px] pr-2.5 font-montserrat md:text-[17px] md:leading-[25.5px]">
                      <span>Sell-Out Risk: </span>
                      <span className="text-red-700 font-extrabold">{adv.cta.sellOutRisk}</span>
                    </div>
                    <div className="text-sm flex items-center leading-[21px] font-montserrat md:text-[17px] md:leading-[25.5px]">
                      <img
                        src={media.icons.shipping}
                        alt="Shipping"
                        className="h-[22px] w-[22px] mr-1"
                      />
                      {adv.cta.shippingLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review images */}
          <div className="max-w-[620px] mx-auto pt-px">
            {media.reviews.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Review ${i + 1}`}
                className={`w-full${i === media.reviews.length - 1 ? " mb-4" : ""}`}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="max-w-[940px] mx-auto">
            <p className="text-xs leading-[15.6px] mt-12 mb-0 md:mb-2.5">
              <span className="font-bold">Disclaimer</span>: {adv.footer.disclaimer}
            </p>
          </div>
          <div className="text-xs flex flex-col md:flex-row items-center justify-center leading-[18px] max-w-[940px] mx-auto mt-[38px] font-bold">
            <p className="leading-[22px] mb-2.5">{adv.footer.copyright}</p>
            <div className="flex items-center md:ml-auto">
              <a
                href={adv.footer.links.privacyPolicy.href}
                className="text-blue-600 hover:text-sky-700"
              >
                {adv.footer.links.privacyPolicy.label}
              </a>
              <div className="h-[9px] w-px bg-current mx-[7.5px]" />
              <a
                href={adv.footer.links.termsOfUse.href}
                className="text-blue-600 hover:text-sky-700"
              >
                {adv.footer.links.termsOfUse.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden tracking */}
      <div>
        <a
          href="https://checkoutchamp.com/"
          title="Powered by CheckoutChamp"
          className="text-blue-600 hover:text-sky-700"
        />
      </div>
      <form>
        <input
          type="hidden"
          name="custom5"
          value="{'wt:cart':'c29e57a3-fc1d-4e3d-939a-dce874d59d4e'}"
          className="appearance-none bg-transparent hidden"
        />
      </form>
      <iframe
        src="https://id-msp.newsbreak.com/sync-nbu?source=2&host=www.healthadvicetoday.com"
        className="hidden max-w-full border-zinc-100"
      />
    </>
  );
}
