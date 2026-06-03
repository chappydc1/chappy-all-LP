import { App } from "./App";

// force-dynamic: skip static prerendering (Next.js 16 Turbopack workaround)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "5 Reasons Why People are Switching to Microdosed Gummies | Feals",
  description:
    "Get the relaxing buzz without the hangover, calories, or regret. Try Feals Relax Gummies risk-free.",
};

export default function FealsLPPage() {
  return <App />;
}
