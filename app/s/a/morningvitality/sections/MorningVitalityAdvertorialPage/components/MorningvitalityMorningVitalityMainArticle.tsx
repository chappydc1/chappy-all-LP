import { Fragment } from "react";
import advData from "../../../copy.json";
import mediaData from "../../../media.json";
import linksData from "../../../links.json";
import { MorningvitalityMorningVitalityTestimonialCard } from "./MorningvitalityMorningVitalityTestimonialCard";
import { MorningvitalityMorningVitalityCtaSection } from "./MorningvitalityMorningVitalityCtaSection";
import { MorningvitalityMorningVitalityReferencesFooter } from "./MorningvitalityMorningVitalityReferencesFooter";

type Segment = string | { bold: string } | { italic: string };

type Rich = string | { bold: string } | Segment[];

type Block = Rich | { bullets: Rich[] } | { steps: Rich[] };

type ArticleSection = { headline?: string; body: Block[] };

const STORY_SECTIONS = [
  "lead",
  "problem",
  "failedSolutions",
  "discovery",
  "mechanism",
  "solution",
  "breakthrough",
  "breakthroughResults",
  "enemy",
  "productReveal",
  "howItWorks",
  "proof",
] as const;

const OFFER_SECTIONS = [
  "pricing",
  "offer",
  "scarcity",
  "guarantee",
  "twoPaths",
  "nextSteps",
] as const;

const images: Partial<Record<string, string>> = mediaData.images;

const sectionImages: Partial<Record<string, string>> = mediaData.sections;

const pClass =
  "text-neutral-800 text-lg box-border caret-transparent leading-[25.2px] outline-[3px] bg-[position:0px_0px] mt-[15px] mb-5 font-roboto";

const liClass = "text-lg box-border caret-transparent leading-9 list-disc outline-[3px] bg-[position:0px_0px]";

const imgClass = "box-border caret-transparent max-w-full outline-[3px] mb-[5px] mx-auto";

function renderSegments(segments: Segment[]) {
  return segments.map((seg, i) => {
    if (typeof seg === "string") return <span key={i}>{seg}</span>;
    if ("bold" in seg) return <strong key={i} className="font-bold box-border caret-transparent outline-[3px]">{seg.bold}</strong>;
    return <em key={i} className="italic box-border caret-transparent outline-[3px]">{seg.italic}</em>;
  });
}

function renderRich(rich: Rich) {
  if (typeof rich === "string") return rich;
  if (Array.isArray(rich)) return renderSegments(rich);
  return <strong className="font-bold box-border caret-transparent outline-[3px]">{rich.bold}</strong>;
}

function renderBlock(block: Block, index: number) {
  if (typeof block === "object" && "bullets" in block) {
    return (
      <ul key={index} className="text-[0px] box-border caret-transparent leading-[0px] list-none outline-[3px] bg-[position:0px_0px] pl-[35px]">
        {block.bullets.map((item, i) => (
          <li key={i} className={liClass}>{renderRich(item)}</li>
        ))}
      </ul>
    );
  }
  if (typeof block === "object" && "steps" in block) {
    return (
      <ol key={index} className="text-[0px] box-border caret-transparent leading-[0px] list-decimal outline-[3px] bg-[position:0px_0px] pl-[35px]">
        {block.steps.map((item, i) => (
          <li key={i} className={liClass}>{renderRich(item)}</li>
        ))}
      </ol>
    );
  }
  return <p key={index} className={pClass}>{renderRich(block)}</p>;
}

function sectionImage(sectionKey: string) {
  const imageKey = sectionImages[sectionKey];
  return imageKey ? images[imageKey] : undefined;
}

function renderImage(sectionKey: string) {
  const src = sectionImage(sectionKey);
  return src ? <img src={src} className={imgClass} /> : null;
}

function renderSection(sectionKey: string, section: ArticleSection) {
  return (
    <Fragment key={sectionKey}>
      {section.headline ? (
        <h2 className="text-3xl font-medium box-border caret-transparent leading-9 outline-[3px] bg-[position:0px_0px] mb-[15px]">
          <strong className="font-bold box-border caret-transparent outline-[3px]">{section.headline}</strong>
        </h2>
      ) : null}
      {renderImage(sectionKey)}
      {section.body.map((block, i) => renderBlock(block, i))}
    </Fragment>
  );
}

export const MorningvitalityMorningVitalityMainArticle = () => {
  const { hero, testimonials, finalCta, signoff } = advData;

  return (
    <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto bg-[position:0px_0px] px-[15px] md:float-left md:w-9/12">
      <h1 className="text-neutral-800 text-[28px] font-black box-border caret-transparent leading-[34px] outline-[3px] bg-[position:0px_0px] mt-5 mb-4 font-roboto md:text-[46px] md:leading-[54px]">
        {hero.headline}
      </h1>
      <p className={pClass}>{hero.byline}</p>
      {STORY_SECTIONS.map((key) => renderSection(key, advData[key]))}
      {renderImage("testimonials")}
      {testimonials.items.map((item, i) => (
        <MorningvitalityMorningVitalityTestimonialCard
          key={i}
          name={item.name}
          age={item.age}
          testimonial={`"${item.quote}"`}
        />
      ))}
      {OFFER_SECTIONS.map((key) => renderSection(key, advData[key]))}
      <MorningvitalityMorningVitalityCtaSection
        href={linksData.cta}
        ctaText={finalCta.ctaText}
        imageSrc={sectionImage("finalCta")}
        imageClassName={imgClass}
      />
      {signoff.body.map((block, i) => renderBlock(block, i))}
      <MorningvitalityMorningVitalityCtaSection
        href={linksData.cta}
        ctaText={finalCta.ctaText}
        imageClassName={imgClass}
      />
      <MorningvitalityMorningVitalityReferencesFooter />
      <br className="box-border caret-transparent outline-[3px] bg-[position:0px_0px]" />
      <br className="box-border caret-transparent outline-[3px] bg-[position:0px_0px]" />
    </div>
  );
};
