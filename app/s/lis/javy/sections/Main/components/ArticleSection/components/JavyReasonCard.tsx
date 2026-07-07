"use client";

import { useRef, useEffect, useState } from "react";
import { useScrollReveal } from "../../../../../hooks/useScrollReveal";

export type JavyReasonCardProps = {
  videoPoster: string;
  videoSrc: string;
  videoSrcType?: string;
  secondaryVideoPoster?: string;
  secondaryVideoSrc?: string;
  badgeContainerClass?: string;
  badgeText: string;
  heading: React.ReactNode;
  description: React.ReactNode;
  linkHref?: string;
  linkText?: string;
  isVariantWithDoubleVideo?: boolean;
};

export const JavyReasonCard = (props: JavyReasonCardProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoInView, setVideoInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoInView(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="scroll-reveal relative items-center box-border gap-x-12 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto_auto] min-h-[auto] min-w-[auto] gap-y-6 w-full md:grid-cols-[0.75fr_1fr] md:grid-rows-[auto_auto] md:gap-y-4 md:w-auto"
    >
      <div className="box-border col-end-[span_1] col-start-[span_1] row-end-[span_2] row-start-[span_2] min-h-[auto] min-w-[auto]">
        <div className="relative box-border flex flex-col w-full overflow-hidden rounded-lg">
          <div
            className={`relative box-border min-h-[auto] min-w-[auto] overflow-hidden ${props.badgeContainerClass ?? "aspect-square max-w-full w-full mb-5 rounded-t-[15px] md:max-w-[310px]"}`}
          >
            {props.isVariantWithDoubleVideo ? (
              <div className="box-border w-full relative aspect-square max-w-full overflow-hidden mb-5 rounded-t-[15px] md:max-w-[310px]">
                <div className="box-border h-full object-cover w-full md:object-fill">
                  <video
                    ref={videoRef}
                    muted
                    autoPlay
                    loop
                    playsInline
                    poster={props.videoPoster}
                    className="box-border inline-block align-baseline w-full"
                  >
                    <source src={props.videoSrc} />
                  </video>
                </div>
              </div>
            ) : (
              <div className="box-border h-full object-cover w-full md:object-fill">
                <video
                  ref={videoRef}
                  muted
                  autoPlay
                  loop
                  playsInline
                  poster={props.videoPoster}
                  className="box-border inline-block align-baseline w-full"
                >
                  <source src={props.videoSrc} type={props.videoSrcType} />
                </video>
              </div>
            )}
          </div>
          <div className="absolute text-white text-xl font-bold items-center bg-indigo-900 box-border flex h-[52px] justify-center tracking-[-0.2px] leading-[30px] w-full bottom-[0%] inset-x-[0%]">
            <p className="box-border min-h-[auto] min-w-[auto]">{props.badgeText}</p>
          </div>
        </div>
      </div>
      <h2 className="relative text-[28px] font-bold self-end box-border tracking-[-0.8px] leading-[33.6px] min-h-[auto] min-w-[auto] -order-last md:order-none">
        {props.heading}
        <br className="box-border" />
      </h2>
      <div className="items-start box-border gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-8 md:gap-y-8">
        <div className="text-[18.4px] self-start box-border tracking-[-0.368px] leading-[27.6px] min-h-[auto] min-w-[auto]">
          {props.description}
        </div>
        {props.linkHref && props.linkText && (
          <div className="items-center box-border gap-x-1 flex justify-start min-h-[auto] min-w-[auto] gap-y-1 group">
            <p className="text-lg font-bold box-border leading-[27px] min-h-[auto] min-w-[auto] transition-transform duration-200 group-hover:translate-x-1">
              👉
            </p>
            <a
              href="#offer"
              className="text-lg font-bold box-border block leading-[27px] min-h-[auto] min-w-[auto] underline underline-offset-2 decoration-indigo-900/40 hover:decoration-indigo-900 transition-all duration-200 hover:text-indigo-900"
            >
              {props.linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
