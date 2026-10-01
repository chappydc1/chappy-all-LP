import copy from "./copy.json";
import media from "./media.json";

export type Sleeping2Copy = typeof copy;
export type Sleeping2Media = typeof media;
export type Sleeping2Product = Sleeping2Copy["products"][number];
export type Sleeping2ProductMedia = Sleeping2Media["products"][number];
export type Sleeping2Rating = Sleeping2Product["ratings"][number];
export type Sleeping2Trust = Sleeping2Product["trust"];

export type Sleeping2ArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "ctaImage"; media: keyof Sleeping2Media["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

const ARTICLE_BLOCK_TYPES = new Set(["paragraph", "heading", "ctaImage", "numberedList", "reviews"]);

export function isArticleBlock(value: unknown): value is Sleeping2ArticleBlock {
  return typeof value === "object"
    && value !== null
    && "type" in value
    && typeof value.type === "string"
    && ARTICLE_BLOCK_TYPES.has(value.type);
}
