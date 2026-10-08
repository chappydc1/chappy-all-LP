import { AmalaApp } from "./AmalaApp";
import advContent from "./copy.json";
import advMedia from "./media.json";

export default function AmalaLandingPage() {
  return (
    <AmalaApp
      productHero={{
        ...advContent.hero,
        guarantee: {
          ...advContent.hero.guarantee,
          imageSrc: advMedia.hero.guaranteeImageSrc,
        },
      }}
      contentSections={{
        hiddenDeficiencies: {
          ...advContent.problem,
          ...advMedia.problem,
          showDivider: true,
          showBottomSection: true,
        },
        cellularSupport: {
          ...advContent.solution,
          ...advMedia.solution,
          desktopImageAlignment: "center",
        },
      }}
    />
  );
}
