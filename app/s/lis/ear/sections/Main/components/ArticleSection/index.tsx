import copy from "../../../../copy.json";
import media from "../../../../media.json";
import { EarCleanerReasonCard } from "./components/EarCleanerReasonCard";

type ReasonImageKey = keyof typeof media.reasons;

export const EarCleanerArticleSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-hidden">
      <div className="box-border caret-transparent w-full z-[999] px-4 md:px-10">
        <div className="box-border caret-transparent max-w-screen-md w-full mx-auto">
          <div className="box-border caret-transparent py-8 md:py-[46px]">
            <div className="box-border caret-transparent flex flex-col gap-y-12 md:gap-y-16">
              {copy.reasons.map((reason) => {
                const image = media.reasons[reason.image as ReasonImageKey];
                return (
                  <EarCleanerReasonCard
                    key={reason.heading}
                    imageSrc={image.src}
                    imageAlt={image.alt}
                    badgeText={reason.badge}
                    heading={reason.heading}
                    descriptionHtml={reason.description_html}
                    linkText={reason.link_text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
