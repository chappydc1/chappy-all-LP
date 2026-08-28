"use client";

import { useAdvertorialData } from "../VitalityDigestTopBar/context";

export const VitalityDigestDisclaimer = (): React.ReactElement => {
  const { content, media } = useAdvertorialData();
  const { footer } = content;

  return (
    <section className="items-center bg-zinc-800 flex flex-col justify-items-center relative w-full px-2.5 py-5">
      <div className="flex flex-col max-w-[1170px] w-full">
        <div className="text-white text-xs leading-[18px] w-full p-2.5">
          {footer.copyrightLines.map((line, index) => (
            <p key={index} className="m-0">
              {line}
            </p>
          ))}
        </div>

        <div className="text-stone-300 text-xs leading-[18px] w-full p-2.5">
          {footer.disclaimerParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 last:mb-0"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center w-full m-2.5">
          <img alt="" src={media.footerLogo} className="max-h-full w-[100px]" />
        </div>
      </div>
    </section>
  );
};
