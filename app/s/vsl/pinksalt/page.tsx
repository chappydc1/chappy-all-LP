import { PinksaltAlertBanner } from "./components/AlertBanner";
import { PinksaltHeadlineSection } from "./sections/HeadlineSection";
import { PinksaltVideoSection } from "./sections/VideoSection";
import { PinksaltViewerCount } from "./components/ViewerCount";
import { PinksaltScientificReferences } from "./components/ScientificReferences";
import { PinksaltCommentsSection } from "./sections/CommentsSection";
import { PinksaltFooter } from "./sections/Footer";
import adv from "./adv.json";
import media from "./media.json";

export const metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function PinksaltPinkSaltVSLPage() {
  return (
    <div className="text-zinc-800 text-base font-normal bg-white">
      <div>
        <div className="relative bg-red-600 flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltAlertBanner city={adv.alertBanner.city} text={adv.alertBanner.text} />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltHeadlineSection
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
            <PinksaltVideoSection
              iconSrc={media.video.icon}
              errorText={adv.video.errorText}
              brand={adv.video.brand}
            />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltViewerCount
              label={adv.viewerCount.label}
              baseCount={adv.viewerCount.baseCount}
              min={adv.viewerCount.min}
              max={adv.viewerCount.max}
            />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltScientificReferences showTitle title={adv.scientificReferences.title} />
            <PinksaltScientificReferences imageSrc={media.scientificReferences.image} imageAlt="" />
          </div>
        </div>

        <PinksaltCommentsSection
          header={adv.commentsSection.header}
          comments={adv.commentsSection.comments}
          avatars={media.avatars}
        />

        <PinksaltFooter
          links={adv.footer.links}
          disclaimer={adv.footer.disclaimer}
        />
      </div>
    </div>
  );
}
