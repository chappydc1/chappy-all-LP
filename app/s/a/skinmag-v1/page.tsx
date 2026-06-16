import rawContent from "./adv.json";
import rawMedia from "./adv-media.json";
import { TopBar } from "./sections/TopBar";
import type { AdvertorialContent, AdvertorialMedia } from "./sections/TopBar";

const content = rawContent as unknown as AdvertorialContent;
const media = rawMedia as unknown as AdvertorialMedia;

export default function SkinmagPage() {
  return (
    <main>
      <TopBar content={content} media={media} />
    </main>
  );
}
