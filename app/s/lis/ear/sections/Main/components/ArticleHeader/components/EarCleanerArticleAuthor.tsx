import copy from "../../../../../copy.json";
import media from "../../../../../media.json";

export const EarCleanerArticleAuthor = () => {
  const { name, updated } = copy.article_header.author;
  const avatar = media.images.author_avatar;

  return (
    <div className="box-border caret-transparent flex flex-wrap justify-between min-h-[auto] min-w-[auto] w-full md:flex-nowrap">
      <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto]">
        <img
          src={avatar.src}
          alt={avatar.alt}
          className="box-border caret-transparent h-[50px] max-w-full min-h-[auto] min-w-[auto] w-[50px] overflow-hidden rounded-[200px]"
        />
        <div className="text-xs box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] ml-2.5 md:text-[13px] md:leading-[17px] md:ml-3">
          By <strong className="font-bold">{name}</strong>
          <br />
          Last Updated {updated}
        </div>
      </div>
    </div>
  );
};
