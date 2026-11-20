import content from "./copy.json";
import links from "./links.json";
import media from "./media.json";
import { TopBar } from "./sections/TopBar";

export default function SaphirePage() {
  return (
    <main>
      <TopBar
        content={content}
        links={links}
        media={media}
      />
    </main>
  );
}
