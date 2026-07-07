import { TopBar, type AdvContent, type AdvMedia } from "./sections/TopBar";
import contentJson from "./copy.json";
import mediaJson from "./media.json";

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
