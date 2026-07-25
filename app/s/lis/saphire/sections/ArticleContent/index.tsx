import { useAdvertorialData } from "../TopBar/context";
import { ReasonBlock } from "./components/ReasonBlock";
import { MidCta } from "./components/MidCta";
import { FinalCta } from "./components/FinalCta";

export function ArticleContent() {
  const { content, media } = useAdvertorialData();
  const { reasons } = content;

  return (
    <>
      {reasons.slice(0, 5).map((reason, index) => (
        <ReasonBlock key={reason.number} reason={reason} imageSrc={media.reasonImages[index]} />
      ))}
      <MidCta />
      {reasons.slice(5).map((reason, index) => (
        <ReasonBlock key={reason.number} reason={reason} imageSrc={media.reasonImages[index + 5]} />
      ))}
      <FinalCta />
    </>
  );
}
