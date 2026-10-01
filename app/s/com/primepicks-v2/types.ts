import copy from "./copy.json";
import media from "./media.json";

export type PrimepicksV2Copy = typeof copy;
export type PrimepicksV2Media = typeof media;
export type PrimepicksV2Product = PrimepicksV2Copy["products"][number];
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

const ARTICLE_BLOCK_TYPES = new Set(["paragraph", "heading", "video", "ctaImage", "numberedList", "reviews"]);

export function isArticleBlock(value: unknown): value is PrimepicksV2ArticleBlock {
  return typeof value === "object"
    && value !== null
    && "type" in value
    && typeof value.type === "string"
    && ARTICLE_BLOCK_TYPES.has(value.type);
}
