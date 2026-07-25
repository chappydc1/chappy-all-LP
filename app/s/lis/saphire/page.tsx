import content from "./copy.json";
import media from "./media.json";
import { TopBar } from "./sections/TopBar";

export default function SaphirePage() {
  return (
    <main>
      <TopBar content={content} media={media} />
    </main>
  );
}
