import Image from "next/image";
import { useAdvertorialData } from "../TopBar/context";
import { ComparisonTable } from "./components/ComparisonTable";

export function ArticleHeader() {
  const { content, media } = useAdvertorialData();
  const { siteHeader, hero } = content;

  return (
    <>
      <div className="w-full bg-adv-orange-dark px-2.5 py-2.5 text-center md:px-[15px] md:py-[14px]">
        <div
          className="font-serif text-base font-black uppercase tracking-[1.5px] text-white md:text-[28px] md:tracking-[3px]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {siteHeader.title}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1000px] items-center justify-end gap-1.5 border-b border-[#e8e8e8] px-5 py-1.5 text-xs font-semibold text-[#333]">
        <span className="text-base leading-none">🇺🇸</span>
        {siteHeader.trendingLabel}
      </div>

      <section className="mx-auto max-w-[800px] px-4 pt-5 md:px-5 md:pt-6">
        <h1
          className="mb-3.5 font-[family-name:var(--font-baskerville)] text-2xl font-bold leading-[1.22] tracking-[0.5px] text-black md:mb-[18px] md:text-[44px] md:leading-[1.3]"
          dangerouslySetInnerHTML={{ __html: hero.titleHtml }}
        />
        <div className="mb-3.5 flex items-center gap-2.5 md:mb-[18px]">
          <Image
            src={media.authorAvatar}
            alt={hero.authorName}
            width={50}
            height={50}
            className="h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]"
          />
          <div className="text-xs leading-[1.3] text-black md:text-sm">
            <p>
              By <strong className="font-bold">{hero.authorName}</strong>
              <br />
              <span
                className="text-[11px] text-[#666]"
                dangerouslySetInnerHTML={{ __html: hero.authorTitle }}
              />
              <br />
              <span className="text-[10px] text-[#999]">{hero.authorDate}</span>
            </p>
          </div>
        </div>
        <div
          className="mb-3.5 border-l-[3px] border-adv-orange bg-[#fff3e0] px-2.5 py-2 text-[13px] leading-[1.4] text-[#1c1d1f] md:mb-4 md:text-[15px]"
          dangerouslySetInnerHTML={{ __html: hero.calloutHtml }}
        />
      </section>

      <ComparisonTable />
    </>
  );
}
