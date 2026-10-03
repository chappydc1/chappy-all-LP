import { PinksaltAlertBanner } from "./components/PinksaltAlertBanner";
import { PinksaltHeadlineSection } from "./sections/HeadlineSection";
import { PinksaltVideoSection } from "./sections/VideoSection";
import { PinksaltViewerCount } from "./components/PinksaltViewerCount";
import { PinksaltScientificReferences } from "./components/PinksaltScientificReferences";
import { PinksaltCommentsSection } from "./sections/CommentsSection";
import { PinksaltFooter } from "./sections/Footer";
import adv from "./copy.json";
import media from "./media.json";
import links from "./links.json";

export const metadata = {
  title: adv.seo.title,
  description: adv.seo.description,
};

export default function PinksaltPinkSaltVSLPage() {
  return (
    <div className="text-zinc-800 text-base font-normal bg-white">
      <div>
        <div className="relative bg-red-600 flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltAlertBanner city={adv.announcementBar.city} text={adv.announcementBar.text} />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltHeadlineSection
              bold={adv.hero.eyebrow}
              intro={adv.hero.headlineIntro}
              highlight={adv.hero.headlineHighlight}
              middle={adv.hero.headlineMiddle}
              badge={adv.hero.headlineBadge}
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
            <PinksaltViewerCount label={adv.socialProof.viewerCountLabel} />
          </div>
        </div>

        <div className="relative flex flex-col max-w-full w-full mx-auto px-2.5">
          <div className="gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
            <PinksaltScientificReferences showTitle title={adv.references.headline} />
            <PinksaltScientificReferences imageSrc={media.scientificReferences.image} imageAlt="" />
          </div>
        </div>

        <PinksaltCommentsSection
          header={adv.comments.headline}
          comments={adv.comments.items}
          avatars={media.avatars}
          avatarKeys={media.comments}
        />

        <PinksaltFooter
          links={[
            {
              text: adv.footer.links.termsOfUse,
              href: links.footer.termsOfUse,
            },
            {
              text: adv.footer.links.privacyPolicy,
              href: links.footer.privacyPolicy,
            },
          ]}
          disclaimer={adv.footer.disclaimer}
        />
      </div>
    </div>
  );
}
