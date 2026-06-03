import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function AmalaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={libreFranklin.className}>
      {children}
    </div>
  );
}
