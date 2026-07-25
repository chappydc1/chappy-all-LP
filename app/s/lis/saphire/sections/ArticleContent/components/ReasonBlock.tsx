import Image from "next/image";
import type { ReasonEntry } from "../../TopBar/types";

interface ReasonBlockProps {
  reason: ReasonEntry;
  imageSrc: string;
}

export function ReasonBlock({ reason, imageSrc }: ReasonBlockProps) {
  return (
    <section className="mx-auto max-w-[800px] px-4 pb-8 md:px-5 md:pb-10">
      <div className="flex flex-col gap-3.5 md:gap-5">
        <h2
          className="text-xl font-bold leading-[1.3] tracking-[0.5px] text-black md:text-[32px] md:leading-[1.26]"
          dangerouslySetInnerHTML={{ __html: `${reason.number}. ${reason.titleHtml}` }}
        />
        <div className="mx-auto w-4/5 overflow-hidden rounded-lg md:rounded-xl">
          <Image
            src={imageSrc}
            alt={reason.imageAlt}
            width={640}
            height={480}
            className="h-auto w-full"
            sizes="(min-width: 768px) 640px, 80vw"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          {reason.paragraphsHtml.map((paragraph, index) => (
            <p
              key={index}
              className="text-[15px] leading-[1.55] text-[#333] md:text-[17px] md:leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
