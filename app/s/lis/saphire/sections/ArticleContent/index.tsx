import { useAdvertorialData } from "../TopBar/context";
import { ReasonBlock } from "./components/ReasonBlock";
import { MidCta } from "./components/MidCta";
import { FinalCta } from "./components/FinalCta";

export function ArticleContent() {
  const { content, media } = useAdvertorialData();
  const { reasonsWhy } = content;

  return (
    <>
      {reasonsWhy.slice(0, 5).map((reason, index) => (
        <ReasonBlock
          key={reason.imageAlt}
          number={index + 1}
          reason={reason}
          imageSrc={media.reasonImages[index]}
        />
      ))}
      <MidCta />
      {reasonsWhy.slice(5).map((reason, index) => (
        <ReasonBlock
          key={reason.imageAlt}
          number={index + 6}
          reason={reason}
          imageSrc={media.reasonImages[index + 5]}
        />
      ))}
      <FinalCta />
    </>
  );
}
