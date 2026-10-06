import copy from "./copy.json";
import media from "./media.json";

export type EarCleaner2Copy = typeof copy;
export type EarCleaner2Media = typeof media;
export type EarCleaner2Product = EarCleaner2Copy["products"][number];
export type EarCleaner2ProductMedia = EarCleaner2Media["products"][number];
export type EarCleaner2Rating = EarCleaner2Product["ratings"][number];
export type EarCleaner2Trust = EarCleaner2Product["trust"];

export type EarCleaner2ArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "ctaImage"; media: keyof EarCleaner2Media["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

const ARTICLE_BLOCK_TYPES = new Set(["paragraph", "heading", "ctaImage", "numberedList", "reviews"]);

export function isArticleBlock(value: unknown): value is EarCleaner2ArticleBlock {
  return typeof value === "object"
    && value !== null
    && "type" in value
    && typeof value.type === "string"
    && ARTICLE_BLOCK_TYPES.has(value.type);
}
