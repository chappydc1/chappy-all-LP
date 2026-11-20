import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";

export type Sleeping2Copy = typeof copy;
export type Sleeping2Links = typeof links;
export type Sleeping2Media = typeof media;
export type Sleeping2Product = Sleeping2Copy["productRankings"]["items"][number];
export type Sleeping2ProductMedia = Sleeping2Media["products"][number];
export type Sleeping2Rating = Sleeping2Product["ratings"][number];
export type Sleeping2Trust = Sleeping2Product["trust"];

export type Sleeping2ArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "ctaImage"; media: keyof Sleeping2Media["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

type ArticleInsert = {
  beforeParagraph: number;
  image?: string;
};

function isImageKey(key: string): key is keyof Sleeping2Media["images"] {
  return key in media.images;
}

function insertBlocks(insert: ArticleInsert): Sleeping2ArticleBlock[] {
  if (insert.image && isImageKey(insert.image)) {
    return [{ type: "ctaImage", media: insert.image }];
  }
  return [];
}

function withInserts(paragraphs: string[], inserts: ArticleInsert[]): Sleeping2ArticleBlock[] {
  return paragraphs.flatMap((html, index) => [
    ...inserts
      .filter((insert) => insert.beforeParagraph === index)
      .flatMap(insertBlocks),
    { type: "paragraph" as const, html },
  ]);
}

export function buildArticleBlocks(content: Sleeping2Copy, articleMedia: Sleeping2Media): Sleeping2ArticleBlock[] {
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
