import { Noor2TopBar } from "./sections/Noor2TopBar";
import copy from "./copy.json";
import links from "./links.json";
import media from "./media.json";

export default function Noor2Page(): React.ReactElement {
  return (
    <main>
      <Noor2TopBar
        content={copy}
        media={media}
        links={links}
      />
    </main>
  );
}
