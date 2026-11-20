import adv from "../copy.json";
import media from "../media.json";
import { renderText } from "../utils/renderText";

const P = ({ text }: { text: string }) => (
  <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
    {renderText(text)}
  </p>
);

export function ZikeeyArticleStory() {
  const { lead, discovery, solution } = adv;

  return (
    <section>
      <a href="#" className="text-teal-600 block transition-opacity duration-200 hover:opacity-90">
        <img
          src={media.hero}
          alt={lead.imageAlt}
          className="max-w-full align-baseline mx-auto rounded"
        />
      </a>

      <div className="mt-6">
        {lead.body.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{discovery.headline}</b>
      </h3>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        {discovery.body[0] && renderText(discovery.body[0])}
      </p>

      <img
        src={media.backPain}
        alt={discovery.imageAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <p className="text-neutral-800 text-[22px] bg-zinc-100 leading-[35.2px] mb-[25px] p-4 rounded border-l-4 border-teal-500">
        <i>{discovery.quote}</i>
      </p>

      {discovery.body.slice(1).map((text, i) => (
        <P key={i} text={text} />
      ))}

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{solution.headline}</b>
      </h3>

      <img
        src={media.sitting}
        alt={solution.imageAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-6">
        {solution.body.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>
    </section>
  );
}
