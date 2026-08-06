import { ArticleContent } from "./ArticleContent";
import { SidebarOffer } from "./SidebarOffer";

type Review = {
  author: string;
  location: string;
  date: string;
  stars: number;
  quote: string;
  text: string;
};
type ReviewMedia = { avatarSrc: string; starsSrc: string };
type ArticleCopy = {
  breadcrumb: string;
  titleBold: string;
  titleRest: string;
  authorCaption: string;
  ctaUrl: string;
  ctaLabel: string;
  ctaSidebarTitleLine1: string;
  ctaSidebarTitleLine2: string;
  ctaSidebarLabel: string;
  disclaimer: string;
  option1Heading: string;
  option2Heading: string;
  option3Heading: string;
  productName: string;
  productChipName: string;
  regularPrice: string;
  discountPct: string;
  salePrice: string;
  prescriptionAvgCost: string;
  untreatedCount: string;
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
  copy: ArticleCopy;
  media: ArticleMedia;
  reviewsCopy: Review[];
  reviewsMedia: ReviewMedia[];
  sidebarMedia: SidebarMedia;
};

export const ArticleLayout = ({ copy, media, reviewsCopy, reviewsMedia, sidebarMedia }: Props) => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] mt-1.5 md:flex-nowrap md:mt-5">
      <ArticleContent copy={copy} media={media} reviewsCopy={reviewsCopy} reviewsMedia={reviewsMedia} />
      <SidebarOffer
        ctaUrl={copy.ctaUrl}
        titleLine1={copy.ctaSidebarTitleLine1}
        titleLine2={copy.ctaSidebarTitleLine2}
        ctaLabel={copy.ctaSidebarLabel}
        productImageSrc={sidebarMedia.productImageSrc}
        checkIconBgSrc={sidebarMedia.checkIconBgSrc}
      />
    </div>
  );
};
