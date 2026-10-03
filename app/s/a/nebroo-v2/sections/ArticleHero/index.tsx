import { AlertBanner } from "./components/AlertBanner";
import { ArticleLayout, type ArticleLayoutCopy } from "./components/ArticleLayout";

type Review = { author: string; location: string; date: string; quote: string; text: string };
type ReviewMedia = { avatarSrc: string; starsSrc: string };
type ArticleMedia = {
  authorAvatarSrc: string;
  image1Src: string; image2Src: string; image3Src: string;
  image4Src: string; image5Src: string; image6Src: string; image7Src: string;
  productInEarSrc: string; productPackagingSrc: string;
  video1ThumbnailSrc: string; video1Src: string;
  video2ThumbnailSrc: string; video2Src: string;
  video3ThumbnailSrc: string; video3Src: string;
};
type Props = {
  alertBanner: { label: string; text: string };
  copy: ArticleLayoutCopy;
  ctaUrl: string;
  media: ArticleMedia;
  reviewsCopy: Review[];
  reviewsMedia: ReviewMedia[];
  sidebarMedia: { productImageSrc: string; checkIconBgSrc: string };
};

export const ArticleHero = ({ alertBanner, copy, ctaUrl, media, reviewsCopy, reviewsMedia, sidebarMedia }: Props) => {
  return (
    <div className="items-center self-center box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] pt-[5px] pb-[15px] px-0 md:flex-nowrap md:px-2.5">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1200px] min-h-[25px] outline-[3px] w-min pt-0 pb-2.5 px-2.5 md:basis-0 md:pt-2.5">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <AlertBanner label={alertBanner.label} body={alertBanner.text} />
          <ArticleLayout
            copy={copy}
            ctaUrl={ctaUrl}
            media={media}
            reviewsCopy={reviewsCopy}
            reviewsMedia={reviewsMedia}
            sidebarMedia={sidebarMedia}
          />
        </div>
      </div>
    </div>
  );
};
