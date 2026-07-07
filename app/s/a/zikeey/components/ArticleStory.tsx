import adv from "../adv.json";
import media from "../media.json";
import { renderText } from "../utils/renderText";

const P = ({ text }: { text: string }) => (
  <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
    {renderText(text)}
  </p>
);

export function ZikeeyArticleStory() {
  const { story } = adv.article;

  return (
    <section>
      <a href={story.heroUrl} className="text-teal-600 block transition-opacity duration-200 hover:opacity-90">
        <img
          src={media.hero}
          alt={story.heroAlt}
          className="max-w-full align-baseline mx-auto rounded"
        />
      </a>

      <div className="mt-6">
        {story.paragraphs1.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{story.h2first}</b>
      </h3>

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        {story.paragraphs2[0] && renderText(story.paragraphs2[0])}
      </p>

      <img
        src={media.backPain}
        alt={story.backPainAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <p className="text-neutral-800 text-[22px] bg-zinc-100 leading-[35.2px] mb-[25px] p-4 rounded border-l-4 border-teal-500">
        <i>{story.blockquote}</i>
      </p>

      {story.paragraphs2.slice(1).map((text, i) => (
        <P key={i} text={text} />
      ))}

      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{story.h2second}</b>
      </h3>

      <img
        src={media.sitting}
        alt={story.sittingAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-6">
        {story.paragraphs3.map((text, i) => (
          <P key={i} text={text} />
        ))}
      </div>
    </section>
  );
}
