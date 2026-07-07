import { PrimepicksHeader } from "./sections/Header";
import { PrimepicksMain } from "./sections/Main";
import { PrimepicksArticleSection } from "./sections/ArticleSection";
import { PrimepicksFooter } from "./sections/Footer";

export default function PrimepicksPage() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-stone-50 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-open_sans">
      <div className="bg-stone-50 box-border caret-transparent pb-4 md:pb-8">
        <PrimepicksHeader />
        <PrimepicksMain />
        <PrimepicksArticleSection />
      </div>
      <PrimepicksFooter />
    </div>
  );
}
