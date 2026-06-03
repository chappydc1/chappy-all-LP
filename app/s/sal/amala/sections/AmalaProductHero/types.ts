export type AmalaProductHeroBenefit = {
  iconSrc?: string;
  iconAlt?: string;
  text: string;
};

export type AmalaProductHeroAccordionItem = {
  title: string;
  paragraphs: string[];
};

export type AmalaProductHeroGuarantee = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type AmalaProductHeroContent = {
  ratingText: string;
  headline: string;
  descriptionParagraphs: string[];
  imageAlt: string;
  ctaText: string;
  benefits: AmalaProductHeroBenefit[];
  addToCartBenefits: AmalaProductHeroBenefit[];
  guarantee: AmalaProductHeroGuarantee;
  accordionItems: AmalaProductHeroAccordionItem[];
};
