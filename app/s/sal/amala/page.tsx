import { AmalaApp } from "./AmalaApp";
import advContent from "./content/adv.json";
import advMedia from "./content/adv-media.json";

export default function AmalaLandingPage() {
  return (
    <AmalaApp
      productHero={advContent.productHero}
      contentSections={{
        hiddenDeficiencies: {
          ...advContent.contentSections.hiddenDeficiencies,
          ...advMedia.contentSections.hiddenDeficiencies,
        },
        cellularSupport: {
          ...advContent.contentSections.cellularSupport,
          ...advMedia.contentSections.cellularSupport,
        },
      }}
    />
  );
}
