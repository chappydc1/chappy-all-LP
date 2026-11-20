import copy from "../../../copy.json"
import media from "../../../media.json"

export type PricingOption = {
  variantId: string
  title: string
  badge: string
  save: string
  image: string
  price: string
  compareAtPrice: string
}

export const pricingOptions: PricingOption[] = copy.pricingCards.cards.map((card, i) => {
  const variant = copy.checkout.variants.find((v) => v.id === card.variantId)
  return {
    ...card,
    image: media.pricingCards.cardImages[i] ?? "",
    price: variant?.price ?? "",
    compareAtPrice: variant?.compareAtPrice ?? "",
  }
})
