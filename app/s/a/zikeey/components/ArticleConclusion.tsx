import adv from "../adv.json";
import media from "../media.json";
import { renderText } from "../utils/renderText";

const P = ({ text }: { text: string }) => (
  <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
    {renderText(text)}
  </p>
);

export function ZikeeyArticleConclusion() {
  const { conclusion } = adv.article;

  return (
    <section>
      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{conclusion.h2}</b>
      </h3>

      <img
        src={media.conclusion}
        alt={conclusion.conclusionAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-4">
        {conclusion.paragraphs1.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{conclusion.h2second}</b>
      </h3>

      {conclusion.paragraphs2.map((text, i) => (
        <P key={i} text={text} />
      ))}

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        At the moment, you can get{" "}
        <a href={adv.article.productUrl} className="text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline">
          {adv.article.productName}
        </a>{" "}
        for just{" "}
        <b><span className="text-red-600">{conclusion.price}</span></b>{" "}
        with a whopping{" "}
        <b><span className="text-red-600">{conclusion.discount}</span></b>{" "}
        discount. It&apos;s an amazing deal and we&apos;re sure this won&apos;t last long…
      </p>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        However, once the promo is over, it&apos;s only going to get more expensive...
      </p>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <u>
          <a
            href={conclusion.claimUrl}
            className="text-teal-600 transition-colors duration-150 hover:text-teal-700"
          >
            {conclusion.claimLinkText}
          </a>
        </u>
      </p>

      {conclusion.paragraphs3.map((text, i) => (
        <P key={i} text={text} />
      ))}
    </section>
  );
}
