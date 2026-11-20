import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";

export type PrimepicksV2Copy = typeof copy;
export type PrimepicksV2Links = typeof links;
export type PrimepicksV2Media = typeof media;
export type PrimepicksV2Product = PrimepicksV2Copy["productRankings"]["items"][number];
export type PrimepicksV2ProductMedia = PrimepicksV2Media["products"][number];
export type PrimepicksV2Rating = PrimepicksV2Product["ratings"][number];
export type PrimepicksV2Trust = PrimepicksV2Product["trust"];

export type PrimepicksV2ArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "video"; media: keyof PrimepicksV2Media["videos"] }
  | { type: "ctaImage"; media: keyof PrimepicksV2Media["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

type ArticleInsert = {
  beforeParagraph: number;
  video?: string;
  image?: string;
};

function isVideoKey(key: string): key is keyof PrimepicksV2Media["videos"] {
  return key in media.videos;
}

function isImageKey(key: string): key is keyof PrimepicksV2Media["images"] {
  return key in media.images;
}

function insertBlocks(insert: ArticleInsert): PrimepicksV2ArticleBlock[] {
  if (insert.video && isVideoKey(insert.video)) {
    return [{ type: "video", media: insert.video }];
  }
  if (insert.image && isImageKey(insert.image)) {
    return [{ type: "ctaImage", media: insert.image }];
  }
  return [];
}

function withInserts(paragraphs: string[], inserts: ArticleInsert[]): PrimepicksV2ArticleBlock[] {
  return paragraphs.flatMap((html, index) => [
    ...inserts
      .filter((insert) => insert.beforeParagraph === index)
      .flatMap(insertBlocks),
    { type: "paragraph" as const, html },
  ]);
}

export function buildArticleBlocks(content: PrimepicksV2Copy, articleMedia: PrimepicksV2Media): PrimepicksV2ArticleBlock[] {
  const inserts = articleMedia.articleInserts;

  return [
    ...withInserts(content.discovery.body, inserts.discovery),
    { type: "heading", text: content.proof.headline },
    ...withInserts(content.proof.body, inserts.proof),
    { type: "numberedList", items: content.proof.results },
    { type: "paragraph", html: content.proof.closing },
    { type: "heading", text: content.pricing.headline },
    ...withInserts(content.pricing.body, inserts.pricing),
    { type: "heading", text: content.solution.headline },
    ...withInserts(content.solution.body, inserts.solution),
    { type: "heading", text: content.testimonials.headline },
    { type: "reviews", items: content.testimonials.items },
    { type: "heading", text: content.purchaseProcess.headline },
    ...withInserts(content.purchaseProcess.body, inserts.purchaseProcess),
    { type: "heading", text: content.offer.headline },
    ...withInserts(content.offer.body, inserts.offer),
    { type: "numberedList", items: content.offer.steps },
  ];
}
