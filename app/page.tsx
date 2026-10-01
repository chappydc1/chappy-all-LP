import { redirect } from "next/navigation";

// Mirrors the "/" redirect in vercel.json so `next dev` and the static export
// land on the same page (next.config redirects are ignored with output: "export").
export default function RootPage() {
  redirect("/s/com/forbes/");
}
