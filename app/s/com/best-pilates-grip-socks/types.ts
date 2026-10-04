import copy from "./copy.json";
import media from "./media.json";

export type BestPilatesGripSocksCopy = typeof copy;
export type BestPilatesGripSocksMedia = typeof media;
export type BestPilatesGripSocksProduct = BestPilatesGripSocksCopy["products"][number];
export type BestPilatesGripSocksProductMedia = BestPilatesGripSocksMedia["products"][number];
export type BestPilatesGripSocksRating = BestPilatesGripSocksProduct["ratings"][number];
export type BestPilatesGripSocksTrust = BestPilatesGripSocksProduct["trust"];

export type BestPilatesGripSocksArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; text: string }
  | { type: "ctaImage"; media: keyof BestPilatesGripSocksMedia["images"] }
  | { type: "numberedList"; items: string[] }
  | { type: "reviews"; items: { quote: string; author: string }[] };

const ARTICLE_BLOCK_TYPES = new Set(["paragraph", "heading", "ctaImage", "numberedList", "reviews"]);

export function isArticleBlock(value: unknown): value is BestPilatesGripSocksArticleBlock {
  return typeof value === "object"
    && value !== null
    && "type" in value
    && typeof value.type === "string"
    && ARTICLE_BLOCK_TYPES.has(value.type);
}
