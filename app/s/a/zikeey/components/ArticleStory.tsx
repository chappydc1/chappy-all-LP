import adv from "../adv.json";
import media from "../media.json";

const P = ({ html }: { html: string }) => (
  <p
    className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export function ArticleStory() {
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
        {story.paragraphs1.map((html, i) => (
          <P key={i} html={html} />
        ))}
      </div>

      <h3
        className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]"
        dangerouslySetInnerHTML={{ __html: `<b>${story.h2first}</b>` }}
      />

      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        {story.paragraphs2[0] && <span dangerouslySetInnerHTML={{ __html: story.paragraphs2[0] }} />}
      </p>

      <img
        src={media.backPain}
        alt={story.backPainAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <p className="text-neutral-800 text-[22px] bg-zinc-100 leading-[35.2px] mb-[25px] p-4 rounded border-l-4 border-teal-500">
        <i>{story.blockquote}</i>
      </p>

      {story.paragraphs2.slice(1).map((html, i) => (
        <P key={i} html={html} />
      ))}

      <h3
        className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]"
        dangerouslySetInnerHTML={{ __html: `<b>${story.h2second}</b>` }}
      />

      <img
        src={media.sitting}
        alt={story.sittingAlt}
        className="max-w-full align-baseline mx-auto rounded"
      />

      <div className="mt-6">
        {story.paragraphs3.map((html, i) => (
          <P key={i} html={html} />
        ))}
      </div>
    </section>
  );
}
