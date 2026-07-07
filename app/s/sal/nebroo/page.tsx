import { NebrooPage } from "./sections/NebrooPage";
import adv from "./adv.json";
import media from "./media.json";

export default function NebrooPageRoute() {
  return <NebrooPage adv={adv} media={media} />;
}
