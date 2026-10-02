import copy from "./copy.json";
import media from "./media.json";

export type BestToeSocksCopy = typeof copy;
export type BestToeSocksMedia = typeof media;
export type BestToeSocksProduct = BestToeSocksCopy["products"][number];
export type BestToeSocksProductMedia = BestToeSocksMedia["products"][number];
export type BestToeSocksRating = BestToeSocksProduct["ratings"][number];
export type BestToeSocksTrust = BestToeSocksProduct["trust"];

export type BestToeSocksArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "ctaImage"; media: keyof BestToeSocksMedia["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

const ARTICLE_BLOCK_TYPES = new Set(["paragraph", "heading", "ctaImage", "numberedList", "reviews"]);

export function isArticleBlock(value: unknown): value is BestToeSocksArticleBlock {
  return typeof value === "object"
    && value !== null
    && "type" in value
    && typeof value.type === "string"
    && ARTICLE_BLOCK_TYPES.has(value.type);
}
