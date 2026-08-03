import copy from "./copy.json";
import media from "./media.json";
import { LandingPage } from "./sections/LandingPage";

export default function SanlavaPage(): React.JSX.Element {
  return <LandingPage copy={copy} media={media} />;
}
