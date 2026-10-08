import adv from "../copy.json";
import media from "../media.json";
import { renderText } from "../utils/renderText";

const P = ({ text }: { text: string }) => (
  <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
    {renderText(text)}
  </p>
);

export function ZikeeyArticleConclusion() {
  const { offer, ui } = adv;

  return (
    <section>
      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{offer.headline}</b>
      </h3>

      <img
        src={media.conclusion}
        alt={offer.imageAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-4">
        {offer.body.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{offer.urgencyHeadline}</b>
      </h3>

      {offer.comparisonBody.map((text, i) => (
        <P key={i} text={text} />
      ))}

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        At the moment, you can get{" "}
        <a href="#" className="text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline">
          {ui.productName}
        </a>{" "}
        for just{" "}
        <b><span className="text-red-600">{offer.price}</span></b>{" "}
        with a whopping{" "}
        <b><span className="text-red-600">{offer.discount}</span></b>{" "}
        discount. It&apos;s an amazing deal and we&apos;re sure this won&apos;t last long…
      </p>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        However, once the promo is over, it&apos;s only going to get more expensive...
      </p>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <u>
          <a
            href="#"
            className="text-teal-600 transition-colors duration-150 hover:text-teal-700"
          >
            {offer.claimCtaText}
          </a>
        </u>
      </p>

      {offer.closingBody.map((text, i) => (
        <P key={i} text={text} />
      ))}
    </section>
  );
}
