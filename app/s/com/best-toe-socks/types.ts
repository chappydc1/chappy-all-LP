import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";

export type BestToeSocksCopy = typeof copy;
export type BestToeSocksLinks = typeof links;
export type BestToeSocksMedia = typeof media;
export type BestToeSocksProduct = BestToeSocksCopy["productRankings"]["items"][number];
export type BestToeSocksProductMedia = BestToeSocksMedia["products"][number];
export type BestToeSocksRating = BestToeSocksProduct["ratings"][number];
export type BestToeSocksTrust = BestToeSocksProduct["trust"];

export type BestToeSocksArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "ctaImage"; media: keyof BestToeSocksMedia["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

type ArticleInsert = {
  beforeParagraph: number;
  image?: string;
};

function isImageKey(key: string): key is keyof BestToeSocksMedia["images"] {
  return key in media.images;
}

function insertBlocks(insert: ArticleInsert): BestToeSocksArticleBlock[] {
  if (insert.image && isImageKey(insert.image)) {
    return [{ type: "ctaImage", media: insert.image }];
  }
  return [];
}

function withInserts(paragraphs: string[], inserts: ArticleInsert[]): BestToeSocksArticleBlock[] {
  return paragraphs.flatMap((html, index) => [
    ...inserts
      .filter((insert) => insert.beforeParagraph === index)
      .flatMap(insertBlocks),
    { type: "paragraph" as const, html },
  ]);
}

export function buildArticleBlocks(content: BestToeSocksCopy, articleMedia: BestToeSocksMedia): BestToeSocksArticleBlock[] {
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
