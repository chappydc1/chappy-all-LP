import copy from "../../copy.json";
import media from "../../media.json";
import { VitalitydigestCommentsSection } from "./components/VitalitydigestCommentsSection";
import { VitalitydigestProductCta } from "./components/VitalitydigestProductCta";

const pClass = "mb-4 text-base leading-6 text-zinc-800 md:text-xl md:leading-[30px]";
const headingClass =
  "mb-4 text-center text-[26px] font-bold leading-[31.2px] text-black md:text-left md:text-[34px] md:leading-[40.8px]";

function HtmlParagraph({ html, className }: { html: string; className?: string }): React.ReactElement {
  return <p className={className ?? pClass} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function VitalitydigestArticle(): React.ReactElement {
  return (
    <article className="mx-auto w-full max-w-[1170px] px-2.5 md:px-[14%]">
      <div className="mt-2.5 flex flex-col rounded-[10px] shadow-[rgb(155,155,155)_0px_0px_5px_3px]">
        <div className="flex flex-col items-center px-2.5 pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.blueZoneMap.src}
            alt={media.blueZoneMap.alt}
            className="max-h-full rounded-[5px]"
          />
        </div>
        <div className="mx-2.5 bg-yellow-100 p-2.5 text-base leading-6 md:text-xl md:leading-[30px]">
          <strong className="italic">{copy.quote}</strong>
        </div>
        <div className="px-2.5 py-[5px]">
          {copy.introParagraphs.map((paragraph, index) => (
            <HtmlParagraph key={index} html={paragraph} />
          ))}
        </div>
      </div>

      <h2 className={headingClass}>{copy.problemHeading}</h2>
      <div>
        {copy.problemParagraphs.map((paragraph, index) => (
          <HtmlParagraph key={index} html={paragraph} />
        ))}
      </div>

      <p className={`${headingClass} md:text-left`}>
        {copy.stat2030.lead}
        <span className="text-red-700">{copy.stat2030.highlight}</span>
      </p>

      <div>
        {copy.recordParagraphs.map((paragraph, index) => (
          <HtmlParagraph key={index} html={paragraph} />
        ))}
      </div>

      <VitalitydigestProductCta imageSrc={media.productIntro.src} imageAlt={media.productIntro.alt} />

      <HtmlParagraph html={copy.afterFirstCtaParagraph} />

      <h2 className={headingClass}>{copy.guaranteeHeading}</h2>
      <div>
        {copy.guaranteeParagraphs.map((paragraph, index) => (
          <HtmlParagraph key={index} html={paragraph} />
        ))}
      </div>

      <VitalitydigestProductCta imageSrc={media.productGuarantee.src} imageAlt={media.productGuarantee.alt} />

      <div>
        {copy.closingParagraphs.map((paragraph, index) => (
          <HtmlParagraph key={index} html={paragraph} />
        ))}
      </div>

      <VitalitydigestProductCta imageSrc={media.productClosing.src} imageAlt={media.productClosing.alt} />

      <h2 className={headingClass}>{copy.faqHeading}</h2>
      <div>
        {copy.faq.map((item) => (
          <div key={item.question}>
            <p className={pClass}>
              <strong>{item.question}</strong>
            </p>
            <p className={pClass}>{item.answer}</p>
          </div>
        ))}
        <p className={pClass}>{copy.faqClosing}</p>
      </div>

      <VitalitydigestProductCta imageSrc={media.productFaq.src} imageAlt={media.productFaq.alt} />

      <div className="pb-5">
        <VitalitydigestCommentsSection />
      </div>
    </article>
  );
}
