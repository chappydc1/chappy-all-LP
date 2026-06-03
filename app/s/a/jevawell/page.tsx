import { JevawellArticleContent } from "./components/ArticleContent";

export default function JevawellPage() {
  return (
    <main role="main" className="box-border caret-transparent grow min-h-[auto] min-w-[auto]">
      <section className="bg-white box-border caret-transparent contents outline-[3px] scroll-smooth font-host_grotesk">
        <section className="bg-white box-border caret-transparent max-w-full outline-[3px] w-full mx-auto">
          <div className="relative content-start bg-gray-100 box-border caret-transparent gap-x-8 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full outline-[3px] w-full mx-auto pb-6">
            <JevawellArticleContent />
          </div>
        </section>
      </section>
    </main>
  );
}
