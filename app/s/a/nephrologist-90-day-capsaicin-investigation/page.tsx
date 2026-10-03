import {
  NebrooV1TopBar,
  type NebrooV1AdvContent,
  type NebrooV1AdvLinks,
  type NebrooV1AdvMedia,
} from "./sections/TopBar";
import contentJson from "./copy.json";
import linksJson from "./links.json";
import mediaJson from "./media.json";

export default function NebrooV1Page(): React.JSX.Element {
  return (
    <main>
      <NebrooV1TopBar
        content={contentJson as NebrooV1AdvContent}
        links={linksJson as NebrooV1AdvLinks}
        media={mediaJson as NebrooV1AdvMedia}
      />
    </main>
  );
}
