import copy from "../copy.json"

export type CeylonVariant = (typeof copy.checkout.variants)[number]

export function getCartUrl(variantId: string): string {
  return copy.checkout.cartUrlTemplate.replace("{variantId}", variantId)
}

export const DEFAULT_CART_URL = getCartUrl(copy.checkout.defaultVariantId)

export const PRODUCT_ANCHOR_ID = "ceylon-product"
