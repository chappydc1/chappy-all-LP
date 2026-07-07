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
    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] text-end w-full mt-5 py-3">
      <img
        src={media.testimonialAvatar}
        alt="Testimonial"
        className="text-black self-start box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left align-baseline w-[120px]"
      />
      <div className="text-stone-800 text-base font-medium box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] text-left mt-2.5 p-px font-montserrat md:text-lg md:font-normal">
        <div className="text-base font-medium box-border caret-transparent outline-[3px] md:text-lg md:font-normal">
          <b className="text-base font-bold box-border caret-transparent outline-[3px] md:text-lg">
            {quote}
          </b>
        </div>
        <div className="text-base font-medium box-border caret-transparent outline-[3px] md:text-lg md:font-normal">
          {author}
        </div>
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
  const containerClass = `items-center ${reversed ? "self-start" : "self-stretch"} box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:items-stretch md:self-auto md:flex-nowrap`;

  return (
    <div className="box-border caret-transparent max-w-[1200px] outline-[3px] w-[95%] ml-px mb-[50px] pb-px px-px md:w-[85%] md:ml-0 md:pb-0 md:px-0">
      <div className={containerClass}>
        {/* Media column */}
        <div className="relative self-start box-border caret-transparent flex basis-full flex-col grow justify-center max-w-full min-h-[25px] outline-[3px] w-min p-px md:self-auto md:basis-0 md:flex-col-reverse">
          {/* Mobile header */}
          <div className="box-border caret-transparent block basis-[0%] flex-col shrink-0 justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full pr-0 pt-3 pb-[15px] md:hidden">
            <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:flex-nowrap">
              <div className="relative items-center box-border caret-transparent flex basis-[8%] grow shrink-0 justify-center max-w-full min-h-[25px] outline-[3px] w-min p-px">
                <div className="text-emerald-500 text-[56px] box-border caret-transparent flex justify-around leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat">
                  <b className="text-[45px] font-bold box-border caret-transparent block leading-[49px] min-h-[auto] min-w-[auto] outline-[3px]">
                    {benefit.number}
                  </b>
                </div>
              </div>
              <div className="relative items-center box-border caret-transparent flex basis-[92%] grow shrink-0 justify-start max-w-full min-h-[25px] outline-[3px] w-min pl-0 pr-px py-px">
                <div className="text-stone-800 text-[21px] font-extrabold box-border caret-transparent leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left pl-[15px] pr-px py-px font-montserrat">
                  {benefit.title}
                </div>
              </div>
            </div>
          </div>

          {/* Media element */}
          {mediaType === "video" ? (
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <video
                loop
                autoPlay
                playsInline
                muted
                src={mediaSrc}
                className="box-border caret-transparent inline-block basis-[0%] shrink-0 max-w-full outline-[3px] align-baseline w-full rounded-[10px]"
              />
            </div>
          ) : (
            <img
              src={mediaSrc}
              alt={benefit.title}
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline rounded-[10px]"
            />
          )}
        </div>

        {/* Content column */}
        <div className="relative items-stretch self-start box-border caret-transparent flex basis-full flex-col grow justify-center max-w-full min-h-[25px] outline-[3px] w-min mt-[15px] pt-0 pb-px px-px md:items-start md:self-auto md:basis-0 md:mt-0 md:pl-10 md:pt-px">
          {/* Desktop header */}
          <div className="box-border caret-transparent hidden basis-[0%] flex-col shrink-0 justify-start min-h-0 min-w-0 outline-[3px] w-full pr-0 pt-0 pb-2.5 md:flex md:pt-3">
            <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full min-h-0 min-w-0 outline-[3px] p-px md:flex-nowrap">
              <div className="relative items-center box-border caret-transparent flex basis-[10%] flex-col grow shrink-0 justify-center max-w-full min-h-[25px] outline-[3px] w-min p-px md:block md:basis-0 md:flex-row md:shrink md:justify-normal">
                <div className="text-emerald-500 text-[55px] box-border caret-transparent flex justify-around leading-[60px] outline-[3px] text-left p-px font-montserrat md:text-[73px] md:leading-[85px]">
                  <b className="text-[55px] font-bold box-border caret-transparent block leading-[60px] min-h-0 min-w-0 outline-[3px] md:text-[73px] md:leading-[85px] md:min-h-[auto] md:min-w-[auto]">
                    {benefit.number}
                  </b>
                </div>
              </div>
              <div className="relative items-center box-border caret-transparent flex basis-[90%] grow shrink-0 justify-start max-w-full min-h-[25px] outline-[3px] w-min pl-2.5 pr-px py-px md:basis-4/5">
                <div className="text-stone-800 text-[31px] font-extrabold box-border caret-transparent leading-[34px] min-h-0 min-w-0 outline-[3px] text-left p-px font-montserrat md:text-[26px] md:leading-8 md:min-h-[auto] md:min-w-[auto]">
                  {benefit.title}
                </div>
              </div>
            </div>
          </div>

          <div className="text-stone-800 text-lg font-medium box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] text-left mt-0 p-px font-montserrat md:mt-[5px]">
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
      {/* Hidden tracking elements */}
      <div className="box-border caret-transparent outline-[3px]"></div>

      {/* Header */}
      <div className="items-stretch bg-emerald-500 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:flex-nowrap">
        <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] outline-[3px] w-min p-px md:basis-0">
          <div className="items-center box-border caret-transparent flex h-full max-w-[1016px] outline-[3px] w-full mx-auto pt-3 pb-2 md:h-auto md:pb-[9px]">
            <img
              src={media.logo}
              alt="Better Living Logo"
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[200px] ml-2.5 md:ml-0"
            />
          </div>
        </div>
      </div>

      {/* Article Intro */}
      <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap">
        <div className="relative bg-white box-border caret-transparent basis-[0%] grow shrink-0 max-w-full min-h-[25px] outline-[3px] w-min rounded-[1px] md:bg-transparent">
          {/* Headline */}
          <div className="box-border caret-transparent max-w-[1000px] outline-[3px] w-[95%] mt-2.5 md:w-full md:mt-0">
            <div className="text-stone-800 text-[21px] font-extrabold box-border caret-transparent leading-[35px] outline-[3px] text-left mt-0 mb-[15px] mx-px pt-px pb-0 px-px font-montserrat md:text-4xl md:leading-[55px] md:mt-2.5 md:mb-5 md:mx-0 md:pb-px">
              {adv.headline}{" "}
              <span className="text-[21px] bg-yellow-400 box-border caret-transparent leading-[35px] outline-[3px] md:text-4xl md:leading-[55px]">
                {adv.headlineHighlight}
              </span>
            </div>
            <img
              src={media.hero}
              alt="Hero"
              className="text-black box-border caret-transparent inline max-w-full outline-[3px] align-baseline w-full rounded-[10px]"
            />
          </div>

          {/* Intro body */}
          <div className="box-border caret-transparent max-w-[1000px] outline-[3px] w-[95%] my-4 pb-0 md:w-full md:pb-10">
            <div className="text-lg font-medium box-border caret-transparent leading-[27px] outline-[3px] text-left p-px font-montserrat">
              <b>{adv.intro.hook}</b>
              <div className="box-border caret-transparent outline-[3px] mt-2">
                {adv.intro.body.split("\n\n").map((para, i) => (
                  <div key={i} className="box-border caret-transparent outline-[3px] mt-2">
                    {para}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[21px] font-extrabold box-border caret-transparent leading-[31.5px] outline-[3px] text-left my-[15px] p-px font-montserrat md:text-[26px] md:leading-[39px]">
              <div className="text-[21px] box-border caret-transparent leading-[31.5px] outline-[3px] text-center md:text-[26px] md:leading-[39px]">
                {adv.intro.pivot}
              </div>
            </div>
            <div className="text-lg font-medium box-border caret-transparent leading-[27px] outline-[3px] text-left mt-2 p-px font-montserrat">
              {adv.intro.productIntro}
            </div>
            <div className="text-[21px] font-extrabold box-border caret-transparent leading-[31.5px] outline-[3px] text-left mt-[15px] p-px font-montserrat md:text-[26px] md:leading-[39px]">
              <div className="text-[21px] box-border caret-transparent leading-[31.5px] outline-[3px] text-center md:text-[26px] md:leading-[39px]">
                {adv.intro.sectionTitle}
              </div>
            </div>
          </div>

          {/* Benefit 1 — video */}
          <BenefitSection
            benefit={adv.benefits[0]}
            mediaSrc={media.benefits["1"].src}
            mediaType="video"
          />

          {/* Benefit 2 — video (wrapped aspect ratio) */}
          <div className="box-border caret-transparent max-w-[1200px] outline-[3px] w-[95%] ml-px mb-[50px] pb-px px-px md:w-[85%] md:ml-0 md:pb-0 md:px-0">
            <div className="items-center self-start box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:items-stretch md:self-auto md:flex-nowrap">
              <div className="relative self-start box-border caret-transparent flex basis-full flex-col grow justify-center max-w-full min-h-[25px] outline-[3px] w-min p-px md:self-auto md:basis-0 md:flex-col-reverse">
                <div className="box-border caret-transparent block basis-[0%] flex-col shrink-0 justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full pr-0 pt-3 pb-5 md:hidden">
                  <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:flex-nowrap">
                    <div className="relative items-center box-border caret-transparent flex basis-[8%] flex-col grow shrink-0 justify-center max-w-full min-h-[25px] outline-[3px] w-min p-px">
                      <div className="text-emerald-500 text-[56px] box-border caret-transparent flex basis-[15%] shrink-0 justify-around leading-[49px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat">
                        <b className="text-[45px] font-bold box-border caret-transparent block leading-[49px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {adv.benefits[1].number}
                        </b>
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent flex basis-[92%] grow shrink-0 justify-start max-w-full min-h-[25px] outline-[3px] w-min pl-0 pr-px py-px md:basis-4/5 md:pl-px">
                      <div className="text-stone-800 text-[21px] font-extrabold box-border caret-transparent leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left pl-[15px] pr-px py-px font-montserrat">
                        {adv.benefits[1].title}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden before:block before:pt-[100%]">
                    <video
                      loop
                      autoPlay
                      playsInline
                      muted
                      src={media.benefits["2"].src}
                      className="absolute box-border caret-transparent h-full max-w-full outline-[3px] align-baseline w-full rounded-[10px] left-0 inset-y-0"
                    />
                  </div>
                </div>
              </div>
              <div className="relative items-stretch self-start box-border caret-transparent flex basis-full flex-col grow justify-center max-w-full min-h-[25px] outline-[3px] w-min mt-3 pt-0 pb-px px-px md:items-start md:self-auto md:basis-0 md:mt-0 md:pl-10 md:pt-px">
                <div className="box-border caret-transparent hidden basis-[0%] flex-col shrink-0 justify-start min-h-0 min-w-0 outline-[3px] w-full pr-0 pt-0 pb-2.5 md:flex md:pt-3">
                  <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full min-h-0 min-w-0 outline-[3px] p-px md:flex-nowrap">
                    <div className="relative items-center box-border caret-transparent flex basis-[10%] grow shrink-0 justify-center max-w-full min-h-[25px] outline-[3px] w-min p-px md:block md:basis-0 md:shrink md:justify-normal">
                      <div className="text-emerald-500 text-6xl box-border caret-transparent flex justify-around leading-[60px] outline-[3px] text-left p-px font-montserrat md:text-[73px] md:leading-[85px]">
                        <b className="text-[55px] font-bold box-border caret-transparent block leading-[60px] min-h-0 min-w-0 outline-[3px] md:text-[73px] md:leading-[85px] md:min-h-[auto] md:min-w-[auto]">
                          {adv.benefits[1].number}
                        </b>
                      </div>
                    </div>
                    <div className="relative items-center box-border caret-transparent flex basis-[90%] grow shrink-0 justify-start max-w-full min-h-[25px] outline-[3px] w-min pl-2.5 pr-px py-px md:basis-4/5">
                      <div className="text-stone-800 text-[31px] font-extrabold box-border caret-transparent leading-[34px] min-h-0 min-w-0 outline-[3px] text-left p-px font-montserrat md:text-[26px] md:leading-8 md:min-h-[auto] md:min-w-[auto]">
                        {adv.benefits[1].title}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-stone-800 text-lg font-medium box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] text-left mt-[5px] p-px font-montserrat">
                  {adv.benefits[1].body.split("\n\n").map((para, i) => (
                    <p key={i} className={i > 0 ? "mt-3" : ""}>{para}</p>
                  ))}
                </div>
                <TestimonialBlock
                  quote={adv.benefits[1].testimonial.quote}
                  author={adv.benefits[1].testimonial.author}
                />
              </div>
            </div>
          </div>

          {/* Benefits 3–7 — images */}
          {adv.benefits.slice(2).map((benefit, i) => (
            <BenefitSection
              key={benefit.number}
              benefit={benefit}
              mediaSrc={media.benefits[(i + 3).toString() as keyof typeof media.benefits].src}
              mediaType="image"
              reversed={i % 2 !== 0}
            />
          ))}

          {/* CTA Box */}
          <div className="box-border caret-transparent outline-[3px] px-[15px] font-montserrat md:px-0">
            <div className="shadow-[rgb(223,223,223)_0px_1px_11.1px_10px] box-border caret-transparent max-w-[1000px] outline-[3px] w-full mb-10 rounded-[15px]">
              <div className="items-center self-center box-border caret-transparent flex flex-col flex-wrap justify-center max-w-full outline-[3px] w-full pt-5 pb-[15px] px-[15px] md:items-stretch md:self-auto md:flex-row md:flex-nowrap md:justify-start md:pl-0 md:pr-10 md:pt-[15px]">
                {/* CTA image */}
                <div className="items-center box-border caret-transparent flex basis-[35%] grow shrink-0 justify-center min-h-[25px] min-w-[auto] outline-[3px] w-full p-px md:block md:basis-auto md:shrink md:justify-normal md:w-min">
                  <div className="items-center box-border caret-transparent flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="box-border caret-transparent block outline-[3px] w-full pb-3 px-[5px] md:hidden md:w-auto md:pb-0 md:px-0">
                      <h1 className="text-stone-800 text-[17px] font-bold box-border caret-transparent tracking-[normal] leading-[27.2px] outline-[3px] text-center mt-0 mb-2.5 font-montserrat">
                        <span className="text-red-600">{adv.cta.urgencyPrefix}</span>{" "}
                        {adv.cta.urgencyHeadline}
                      </h1>
                    </div>
                    <img
                      src={media.cta.product}
                      alt="Tonepatch product"
                      className="box-border caret-transparent inline max-w-full outline-[3px] align-baseline w-full mb-px pb-px rounded-[10px] md:w-[90%] md:mb-0 md:pb-0 md:rounded-none"
                    />
                  </div>
                </div>
                {/* CTA content */}
                <div className="items-center box-border caret-transparent flex basis-[65%] flex-col shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full py-px md:basis-3/5 md:flex-row md:w-auto md:py-0">
                  <div className="items-center self-center box-border caret-transparent flex basis-full flex-col shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:self-auto md:block md:basis-auto md:flex-row md:shrink md:justify-normal">
                    <h1 className="text-stone-800 text-[19px] font-bold box-border caret-transparent hidden leading-[31.2px] outline-[3px] text-center mt-5 mb-2.5 font-montserrat md:block">
                      <span className="text-red-700">{adv.cta.urgencyPrefix}</span>{" "}
                      {adv.cta.urgencyHeadline}
                    </h1>
                    <div className="text-[17px] box-border caret-transparent leading-[25.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left mb-[15px] p-px font-montserrat md:mb-0">
                      {adv.cta.body.split("\n\n").map((para, i) => (
                        <p key={i} className={i > 0 ? "mt-3" : ""}>{para}</p>
                      ))}
                    </div>
                    <a
                      href=""
                      className="text-slate-50 text-lg font-bold bg-emerald-500 shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] box-border caret-transparent block tracking-[0.25px] leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full px-2.5 py-[15px] rounded font-montserrat md:text-3xl md:inline-block md:px-10 hover:bg-emerald-600"
                    >
                      {adv.cta.buttonText}
                    </a>
                    <div className="bg-neutral-100 box-border caret-transparent flex justify-around min-h-[auto] min-w-[auto] outline-[3px] mt-2 px-2.5 py-[7px] rounded-[10px] md:mt-[7px]">
                      <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] pr-2.5 font-montserrat md:text-[17px] md:leading-[25.5px]">
                        <span>Sell-Out Risk: </span>
                        <span className="text-red-700 font-extrabold">{adv.cta.sellOutRisk}</span>
                      </div>
                      <div className="text-sm items-center box-border caret-transparent flex leading-[21px] outline-[3px] font-montserrat md:text-[17px] md:leading-[25.5px]">
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
            <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pt-px pb-0 px-px md:flex-nowrap md:pb-px">
              <div className="relative box-border caret-transparent basis-full grow max-w-[620px] min-h-[25px] outline-[3px] w-min mx-auto pt-px pb-0 px-0 md:basis-0 md:pb-px md:px-px">
                {media.reviews.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Review ${i + 1}`}
                    className={`text-black box-border caret-transparent inline max-w-full outline-[3px] align-baseline w-full${i === media.reviews.length - 1 ? " mb-4" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="box-border caret-transparent max-w-[940px] outline-[3px] mx-auto">
              <p className="text-xs box-border caret-transparent leading-[15.6px] outline-[3px] mt-12 mb-0 md:mb-2.5">
                <span className="font-bold">Disclaimer</span>: {adv.footer.disclaimer}
              </p>
            </div>
            <div className="text-xs items-center box-border caret-transparent flex flex-col justify-center leading-[18px] max-w-[940px] outline-[3px] mt-[38px] mx-auto font-bold md:flex-row">
              <p className="box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] mb-2.5">
                {adv.footer.copyright}
              </p>
              <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] ml-0 md:ml-auto">
                <a
                  href={adv.footer.links.privacyPolicy.href}
                  className="text-blue-600 items-center box-border caret-transparent flex justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center hover:text-sky-700"
                >
                  {adv.footer.links.privacyPolicy.label}
                </a>
                <div className="box-border caret-transparent h-[9px] min-h-[auto] min-w-[auto] outline-[3px] w-px mx-[7.5px]"></div>
                <a
                  href={adv.footer.links.termsOfUse.href}
                  className="text-blue-600 items-center box-border caret-transparent flex justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center hover:text-sky-700"
                >
                  {adv.footer.links.termsOfUse.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden tracking elements */}
      <div className="box-border caret-transparent outline-[3px]">
        <a
          href="https://checkoutchamp.com/"
          title="Powered by CheckoutChamp"
          className="text-blue-600 box-border caret-transparent max-w-full outline-[3px] hover:text-sky-700"
        ></a>
      </div>
      <form className="box-border caret-transparent outline-[3px]">
        <input
          type="hidden"
          name="custom5"
          value="{'wt:cart':'c29e57a3-fc1d-4e3d-939a-dce874d59d4e'}"
          className="appearance-none bg-transparent box-border caret-transparent hidden leading-[normal] outline-[3px]"
        />
      </form>
      <iframe
        src="https://id-msp.newsbreak.com/sync-nbu?source=2&host=www.healthadvicetoday.com"
        className="box-border caret-transparent hidden max-w-full outline-[3px] align-baseline border-zinc-100"
      />
    </>
  );
}
