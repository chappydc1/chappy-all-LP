import Image from "next/image";
import { useAdvertorialData } from "../../TopBar/context";

export function ComparisonTable() {
  const { content, media } = useAdvertorialData();
  const { labels, winner, loser } = content.comparison;

  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[800px] items-stretch justify-center px-2 pb-[10px] pt-5 md:px-[15px] md:pb-5 md:pt-[30px]">
        <div className="flex shrink-0 w-1/5 flex-col justify-start pt-[90px] pr-1 md:w-auto md:min-w-[100px] md:pr-[10px] md:pt-[70px]">
          {labels.map((label) => (
            <div
              key={label}
              className="flex min-h-[48px] items-center border-b border-dashed border-[#e0e0e0] py-1 text-[9px] font-bold text-[#333] last:border-b-0 md:min-h-[60px] md:py-2 md:text-sm"
            >
              {label}
            </div>
          ))}
        </div>

        <div className="relative z-[2] mr-[3px] flex flex-1 min-w-0 scale-100 flex-col rounded-[14px] border-2 border-adv-orange bg-[#fff8f0] px-[5px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] md:mr-[5px] md:min-w-[160px] md:max-w-[320px] md:scale-[1.03] md:rounded-[20px] md:border-4 md:px-[10px]">
          <div className="flex min-h-[85px] flex-col items-center justify-center gap-2 border-b border-adv-orange/20 px-1 py-1.5 md:min-h-[60px] md:py-2.5">
            <Image
              src={media.comparison.winnerImage}
              alt="Saphire Happy Chews"
              width={80}
              height={80}
              className="h-10 w-10 object-contain md:h-20 md:w-20"
            />
            <span
              className="text-center text-[9px] font-bold leading-tight text-adv-orange md:text-base"
              dangerouslySetInnerHTML={{ __html: winner.headerHtml }}
            />
          </div>
          {winner.rows.map((row, index) => (
            <div
              key={row}
              className="flex min-h-[48px] items-center border-b border-adv-orange/15 px-1 py-1 text-[8.5px] leading-[1.3] text-[#1a1a2e] last:border-b-0 md:min-h-[60px] md:px-2 md:py-2 md:text-sm"
            >
              <p>
                {row} <span className="ml-1 font-bold text-adv-check">✓</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-1 min-w-0 flex-col rounded-[14px] md:min-w-[160px] md:max-w-[320px] md:rounded-[20px] md:mt-[10px] md:mb-[10px]">
          <div className="flex min-h-[80px] flex-col items-center justify-center gap-2 border border-dashed border-[#C9C9C9] bg-[#f5f5f5] px-1 py-1.5 md:min-h-[60px] md:py-2.5">
            <Image
              src={media.comparison.loserImage}
              alt="Stimulant Medications"
              width={80}
              height={80}
              className="h-10 w-10 object-contain md:h-20 md:w-20"
            />
            <span
              className="text-center text-[9px] font-bold leading-tight text-[#888] md:text-base"
              dangerouslySetInnerHTML={{ __html: loser.headerHtml }}
            />
          </div>
          {loser.rows.map((row) => (
            <div
              key={row}
              className="flex min-h-[48px] items-center border-b border-dashed border-[#e8e8e8] px-1 py-1 text-[8px] leading-[1.3] text-[#666] last:border-b-0 md:min-h-[60px] md:px-2 md:py-2 md:text-sm"
            >
              <p>
                {row}{" "}
                {row === loser.rows[0] && (
                  <span className="ml-1 font-bold text-adv-check">✓</span>
                )}
                <span className="ml-1 font-bold text-adv-cross">
                  {row === loser.rows[0] ? "/✗" : "✗"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
