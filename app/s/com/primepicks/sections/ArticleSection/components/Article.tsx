import { ArticleHeader } from "../../ArticleSection/components/ArticleHeader";

export const Article = () => {
  return (
    <article className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-full md:max-w-[calc(100%_-_330px)] md:w-auto">
      <ArticleHeader />
    </article>
  );
};
