import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurologist Reveals Morning Ritual That Restores Memory | ABC News",
  description:
    "A leading neurologist exposes the simple morning ritual shown to restore lost memories and sharpen aging minds. Watch the video before it's taken down.",
  icons: { icon: "/favicons/abc-news.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
