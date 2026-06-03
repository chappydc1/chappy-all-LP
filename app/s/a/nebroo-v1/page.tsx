import { TopBar, type AdvContent, type AdvMedia } from "./sections/TopBar";
import contentJson from "./adv.json";
import mediaJson from "./adv-media.json";

export default function NebrooV1Page(): React.JSX.Element {
  return (
    <main>
      <TopBar
        content={contentJson as AdvContent}
        media={mediaJson as AdvMedia}
      />
    </main>
  );
}
