import adv from "../adv.json";
import media from "../media.json";

export function ArticleMeta() {
  const { author } = adv.article;

  return (
    <div className="flex mb-5">
      <img
        src={media.authorAvatar}
        alt={author.name}
        className="max-h-10 max-w-10 w-10 h-10 object-cover align-baseline mr-2.5 rounded-full flex-shrink-0"
      />
      <div className="border-l-teal-600 min-w-0 text-left pl-5 border-l-2">
        <span className="text-[20px] font-bold font-sans block leading-none m-0 p-0" style={{ color: "rgb(53, 155, 118)" }}>{author.name}</span>
        <div className="leading-none mt-1">
          <span className="font-bold text-[16px] font-sans text-neutral-800">{author.date}</span>
          <span
            className="font-bold text-[16px] font-sans text-neutral-800 ml-2"
            dangerouslySetInnerHTML={{ __html: author.category }}
          />
        </div>
      </div>
    </div>
  );
}
