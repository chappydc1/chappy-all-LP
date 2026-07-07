import adv from "../adv.json";
import media from "../media.json";
import { renderText } from "../utils/renderText";

const P = ({ text }: { text: string }) => (
  <p
    className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]"
  >
    {renderText(text)}
  </p>
);

export function ZikeeyArticleFeatures() {
  const { features } = adv.article;

  return (
    <section>
      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{features.h2}</b>
      </h3>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href={features.feature1TitleUrl} className="text-teal-600 font-semibold transition-colors duration-150 hover:text-teal-700 hover:underline">
          {features.feature1Title}
        </a>
        <img
          src={media.ergonomicDesign}
          alt={features.ergonomicDesignAlt}
          className="max-w-full align-baseline mx-auto mt-2 rounded"
        />
      </p>

      {features.paragraphsFeature1.map((text, i) => (
        <P key={i} text={text} />
      ))}

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href={features.feature2TitleUrl} className="text-teal-600 font-semibold transition-colors duration-150 hover:text-teal-700 hover:underline">
          {features.feature2Title}
        </a>
      </p>

      <img
        src={media.memoryFoam}
        alt={features.memoryFoamAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-4">
        {features.paragraphsFeature2.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{features.h2second}</b>
      </h3>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href={features.hipFitUrl} className="text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline">
          {features.hipFitLinkText}
        </a>
      </p>

      <img
        src={media.hipFit}
        className="inline max-w-full align-baseline rounded"
        alt={features.hipFitAlt}
      />

      <div className="mt-4">
        {features.paragraphsFeature3.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href={features.familyUrl} className="text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline">
          {features.familyLinkText}
        </a>
      </p>

      <img
        src={media.family}
        className="inline max-w-full align-baseline rounded"
        alt={features.familyAlt}
      />

      <div className="mt-4">
        {features.paragraphsFeature4.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <a href={features.productUrl} className="text-teal-600 block text-center p-[5px] transition-opacity duration-200 hover:opacity-90">
        <img
          src={media.product}
          className="inline max-w-full align-baseline rounded"
          alt={features.productAlt}
        />
      </a>
    </section>
  );
}
