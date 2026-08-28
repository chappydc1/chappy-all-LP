"use client";

import { useAdvertorialData } from "../VitalityDigestTopBar/context";

export const VitalityDigestArticleHeader = (): React.ReactElement => {
  const { content, media } = useAdvertorialData();
  const { header } = content;

  return (
    <section className="items-center bg-sky-950 flex flex-col justify-items-center relative w-full pt-5 px-2.5">
      <div className="flex flex-col max-w-[1170px] relative w-full">
        <div className="items-center flex justify-center w-full">
          <div className="items-center flex flex-col w-full">
            <div className="flex flex-col w-full">
              <div className="flex basis-0 flex-col grow w-[150px] mx-2.5 my-[5px]">
                <img
                  alt="VitalityDigest"
                  src={media.logo}
                  className="h-9 w-auto"
                />
                <div className="border-t-sky-500 border-t-[5px] w-full mt-2" />
              </div>

              <h1 className="text-white text-3xl leading-9 font-bold w-full px-2.5 pt-[5px] pb-2.5 font-merriweather md:text-[56px] md:leading-[67.2px]">
                <span className="hidden md:inline">
                  {header.titleLine1}
                  <br />
                  {header.titleLine2}
                </span>
                <span className="md:hidden">{header.titleMobile}</span>
              </h1>

              <p className="text-white text-[13px] leading-[13px] w-full px-2.5 pt-2.5 pb-[5px] md:text-sm md:leading-[14px]">
                {header.posted}
              </p>

              <p className="text-white text-sm leading-[14px] w-full px-2.5 pt-[5px] pb-2.5">
                {header.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
