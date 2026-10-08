import { ArticleContent, type ArticleContentCopy } from "./ArticleContent";
import { SidebarOffer } from "./SidebarOffer";

type Review = {
  author: string;
  location: string;
  date: string;
  quote: string;
  text: string;
};
type ReviewMedia = { avatarSrc: string; starsSrc: string };
export type ArticleLayoutCopy = ArticleContentCopy & {
  sidebar: { headline: string[]; ctaText: string };
};
type ArticleMedia = {
  authorAvatarSrc: string;
  image1Src: string;
  image2Src: string;
  video1ThumbnailSrc: string;
  video1Src: string;
  video2ThumbnailSrc: string;
  video2Src: string;
  image3Src: string;
  image4Src: string;
  image5Src: string;
  image6Src: string;
  image7Src: string;
  productInEarSrc: string;
  video3ThumbnailSrc: string;
  video3Src: string;
  productPackagingSrc: string;
};
type SidebarMedia = { productImageSrc: string; checkIconBgSrc: string };

type Props = {
  copy: ArticleLayoutCopy;
  ctaUrl: string;
  media: ArticleMedia;
  reviewsCopy: Review[];
  reviewsMedia: ReviewMedia[];
  sidebarMedia: SidebarMedia;
};

export const ArticleLayout = ({ copy, ctaUrl, media, reviewsCopy, reviewsMedia, sidebarMedia }: Props) => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] mt-1.5 md:flex-nowrap md:mt-5">
      <ArticleContent copy={copy} media={media} reviewsCopy={reviewsCopy} reviewsMedia={reviewsMedia} />
      <SidebarOffer
        ctaUrl={ctaUrl}
        titleLine1={copy.sidebar.headline[0] ?? ""}
        titleLine2={copy.sidebar.headline[1] ?? ""}
        ctaLabel={copy.sidebar.ctaText}
        productImageSrc={sidebarMedia.productImageSrc}
        checkIconBgSrc={sidebarMedia.checkIconBgSrc}
      />
    </div>
  );
};
