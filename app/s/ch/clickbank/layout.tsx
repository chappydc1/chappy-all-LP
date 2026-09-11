import type { ReactNode } from "react";

const FONT_FACE_CSS = `
@font-face {
  font-family: "clickbank-checkout";
  src: url("/lp-images-files-videos-fonts/fonts/clickbank-checkout.woff2") format("woff2");
  font-weight: 400 800;
  font-style: normal;
  font-display: swap;
}
`;

type ClickbankCheckoutLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Checkout",
};

export default function ClickbankCheckoutLayout({
  children,
}: ClickbankCheckoutLayoutProps): JSX.Element {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <style>{FONT_FACE_CSS}</style>
      <div style={{ fontFamily: "'clickbank-checkout', Arial, sans-serif" }}>
        {children}
      </div>
    </>
  );
}
