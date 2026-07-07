import { AlertBanner } from "./components/AlertBanner";
import { HeadlineSection } from "./sections/HeadlineSection";
import { VideoSection } from "./sections/VideoSection";
import { ViewerCount } from "./components/ViewerCount";
import { ScientificReferences } from "./components/ScientificReferences";
import { CommentsSection } from "./sections/CommentsSection";
import { Footer } from "./sections/Footer";
import adv from "./copy.json";
import media from "./media.json";

export const metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function PinkSaltVSLPage() {
  return (
    <div className="text-zinc-800 text-base font-normal bg-white">
      <div>
        <div className="relative bg-red-600 flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <AlertBanner city={adv.alertBanner.city} text={adv.alertBanner.text} />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <HeadlineSection
              bold={adv.headline.bold}
              intro={adv.headline.intro}
              highlight={adv.headline.highlight}
              middle={adv.headline.middle}
              badge={adv.headline.badge}
            />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <VideoSection
              iconSrc={media.video.icon}
              errorText={adv.video.errorText}
              brand={adv.video.brand}
            />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <ViewerCount
              label={adv.viewerCount.label}
              baseCount={adv.viewerCount.baseCount}
              min={adv.viewerCount.min}
              max={adv.viewerCount.max}
            />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <ScientificReferences showTitle title={adv.scientificReferences.title} />
            <ScientificReferences imageSrc={media.scientificReferences.image} imageAlt="" />
          </div>
        </div>

        <CommentsSection
          header={adv.commentsSection.header}
          comments={adv.commentsSection.comments}
          avatars={media.avatars}
        />

        <Footer
          links={adv.footer.links}
          disclaimer={adv.footer.disclaimer}
        />
      </div>
    </div>
  );
}
