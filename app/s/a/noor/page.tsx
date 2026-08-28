import rawContent from "./copy.json";
import rawMedia from "./media.json";
import { SkinmagV1TopBar } from "./sections/TopBar";
import type { SkinmagV1AdvertorialContent, SkinmagV1AdvertorialMedia } from "./sections/TopBar";

/** Returns a label like "Mon. June 15th, 2026" for the date 1 month ago */
function getDateLabelOneMonthAgo(): string {
  const d = new Date();
  d.setMonth(d.getMonth() - 1);

  const weekdays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const day = d.getDate();
  const ordinal =
    day === 1 || day === 21 || day === 31 ? "st"
    : day === 2 || day === 22 ? "nd"
    : day === 3 || day === 23 ? "rd"
    : "th";

  return `${weekdays[d.getDay()]} ${months[d.getMonth()]} ${day}${ordinal}, ${d.getFullYear()}`;
}

const baseContent = rawContent as unknown as SkinmagV1AdvertorialContent;
const media = rawMedia as unknown as SkinmagV1AdvertorialMedia;

export default function SkinmagV1SkinmagPage() {
  const content: SkinmagV1AdvertorialContent = {
    ...baseContent,
    article: {
      ...baseContent.article,
      // Computed at build time: always 1 month before the deploy date
      dateLabel: getDateLabelOneMonthAgo(),
    },
  };

  return (
    <main>
      <SkinmagV1TopBar content={content} media={media} />
    </main>
  );
}
