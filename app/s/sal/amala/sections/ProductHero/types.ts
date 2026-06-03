export type ProductHeroBenefit = {
  iconSrc?: string;
  iconAlt?: string;
  text: string;
};

export type ProductHeroAccordionItem = {
  title: string;
  paragraphs: string[];
};

export type ProductHeroGuarantee = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ProductHeroContent = {
  ratingText: string;
  headline: string;
  descriptionParagraphs: string[];
  imageAlt: string;
  ctaText: string;
  benefits: ProductHeroBenefit[];
  addToCartBenefits: ProductHeroBenefit[];
  guarantee: ProductHeroGuarantee;
  accordionItems: ProductHeroAccordionItem[];
};
