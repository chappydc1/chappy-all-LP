import adv from "../copy.json";
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
  const { features, benefits } = adv;
  const [comfyDesign, memoryFoam] = features.items;
  const [hipFit, family] = benefits.items;

  return (
    <section>
      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{features.headline}</b>
      </h3>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href="#" className="text-teal-600 font-semibold transition-colors duration-150 hover:text-teal-700 hover:underline">
          {comfyDesign.title}
        </a>
        <img
          src={media.ergonomicDesign}
          alt={comfyDesign.imageAlt}
          className="max-w-full align-baseline mx-auto mt-2 rounded"
        />
      </p>

      {comfyDesign.body.map((text, i) => (
        <P key={i} text={text} />
      ))}

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href="#" className="text-teal-600 font-semibold transition-colors duration-150 hover:text-teal-700 hover:underline">
          {memoryFoam.title}
        </a>
      </p>

      <img
        src={media.memoryFoam}
        alt={memoryFoam.imageAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-4">
        {memoryFoam.body.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{benefits.headline}</b>
      </h3>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href="#" className="text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline">
          {hipFit.linkText}
        </a>
      </p>

      <img
        src={media.hipFit}
        className="inline max-w-full align-baseline rounded"
        alt={hipFit.imageAlt}
      />

      <div className="mt-4">
        {hipFit.body.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        <a href="#" className="text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline">
          {family.linkText}
        </a>
      </p>

      <img
        src={media.family}
        className="inline max-w-full align-baseline rounded"
        alt={family.imageAlt}
      />

      <div className="mt-4">
        {family.body.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <a href="#" className="text-teal-600 block text-center p-[5px] transition-opacity duration-200 hover:opacity-90">
        <img
          src={media.product}
          className="inline max-w-full align-baseline rounded"
          alt={benefits.productImageAlt}
        />
      </a>
    </section>
  );
}
