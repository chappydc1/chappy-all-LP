import advData from "../../../copy.json";
import mediaData from "../../../media.json";
import { MorningVitalityTestimonialCard } from "./MorningVitalityTestimonialCard";
import { MorningVitalityCtaSection } from "./MorningVitalityCtaSection";
import { MorningVitalityReferencesFooter } from "./MorningVitalityReferencesFooter";

type Segment = { text: string; bold?: boolean; italic?: boolean };

type Block =
  | { type: "paragraph"; text?: string; bold?: boolean; segments?: Segment[] }
  | { type: "h2"; text: string }
  | { type: "image"; key: string }
  | { type: "list"; items: Array<{ text?: string; bold?: boolean; segments?: Segment[] }> }
  | { type: "ordered_list"; items: Array<{ text?: string; bold?: boolean; segments?: Segment[] }> }
  | { type: "testimonial"; name: string; age: string; quote: string }
  | { type: "cta"; key?: string };

const pClass =
  "text-neutral-800 text-lg box-border caret-transparent leading-[25.2px] outline-[3px] bg-[position:0px_0px] mt-[15px] mb-5 font-roboto";

function renderSegments(segments: Segment[]) {
  return segments.map((seg, i) => {
    if (seg.bold && seg.italic) return <strong key={i} className="font-bold box-border caret-transparent outline-[3px]"><em className="italic">{seg.text}</em></strong>;
    if (seg.bold) return <strong key={i} className="font-bold box-border caret-transparent outline-[3px]">{seg.text}</strong>;
    if (seg.italic) return <em key={i} className="italic box-border caret-transparent outline-[3px]">{seg.text}</em>;
    return <span key={i}>{seg.text}</span>;
  });
}

function renderItemContent(item: { text?: string; bold?: boolean; segments?: Segment[] }) {
  if (item.segments) return renderSegments(item.segments);
  if (item.bold) return <strong className="font-bold box-border caret-transparent outline-[3px]">{item.text}</strong>;
  return <>{item.text}</>;
}

function renderBlock(block: Block, index: number) {
  const { article } = advData;
  const { cta } = article;
  const liClass = "text-lg box-border caret-transparent leading-9 list-disc outline-[3px] bg-[position:0px_0px]";

  switch (block.type) {
    case "paragraph": {
      const content = block.segments
        ? renderSegments(block.segments)
        : block.bold
        ? <strong className="font-bold box-border caret-transparent outline-[3px]">{block.text}</strong>
        : block.text;
      return <p key={index} className={pClass}>{content}</p>;
    }

    case "h2":
      return (
        <h2 key={index} className="text-3xl font-medium box-border caret-transparent leading-9 outline-[3px] bg-[position:0px_0px] mb-[15px]">
          <strong className="font-bold box-border caret-transparent outline-[3px]">{block.text}</strong>
        </h2>
      );

    case "image": {
      const src = (mediaData.images as Record<string, string>)[block.key];
      return (
        <img
          key={index}
          src={src}
          className="box-border caret-transparent max-w-full outline-[3px] mb-[5px] mx-auto"
        />
      );
    }

    case "list":
      return (
        <ul key={index} className="text-[0px] box-border caret-transparent leading-[0px] list-none outline-[3px] bg-[position:0px_0px] pl-[35px]">
          {block.items.map((item, i) => (
            <li key={i} className={liClass}>{renderItemContent(item)}</li>
          ))}
        </ul>
      );

    case "ordered_list":
      return (
        <ol key={index} className="text-[0px] box-border caret-transparent leading-[0px] list-decimal outline-[3px] bg-[position:0px_0px] pl-[35px]">
          {block.items.map((item, i) => (
            <li key={i} className={liClass}>{renderItemContent(item)}</li>
          ))}
        </ol>
      );

    case "testimonial":
      return (
        <MorningVitalityTestimonialCard
          key={index}
          name={block.name}
          age={block.age}
          testimonial={`"${block.quote}"`}
        />
      );

    case "cta": {
      const imageSrc = block.key
        ? (mediaData.images as Record<string, string>)[block.key]
        : undefined;
      return (
        <MorningVitalityCtaSection
          key={index}
          href={cta.href}
          ctaText={cta.text}
          imageSrc={imageSrc}
          imageClassName="box-border caret-transparent max-w-full outline-[3px] mb-[5px] mx-auto"
        />
      );
    }

    default:
      return null;
  }
}

export const MorningVitalityMainArticle = () => {
  const { article } = advData;

  return (
    <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto bg-[position:0px_0px] px-[15px] md:float-left md:w-9/12">
      <h1 className="text-neutral-800 text-[28px] font-black box-border caret-transparent leading-[34px] outline-[3px] bg-[position:0px_0px] mt-5 mb-4 font-roboto md:text-[46px] md:leading-[54px]">
        {article.headline}
      </h1>
      <p className={pClass}>{article.author}</p>
      {(article.body as Block[]).map((block, i) => renderBlock(block, i))}
      <MorningVitalityReferencesFooter />
      <br className="box-border caret-transparent outline-[3px] bg-[position:0px_0px]" />
      <br className="box-border caret-transparent outline-[3px] bg-[position:0px_0px]" />
    </div>
  );
};
