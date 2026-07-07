import advContent from "./copy.json";
import advMedia from "./media.json";
import { TopBar, type AdvertorialContent, type AdvertorialMedia } from "./sections/TopBar";

export default function NooroPage() {
  return <TopBar content={advContent as AdvertorialContent} media={advMedia as AdvertorialMedia} />;
}
