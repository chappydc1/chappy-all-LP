const ICON_BASE = "/images/clickbank-checkout";

export const VisaIcon = (): JSX.Element => (
  <img src={`${ICON_BASE}/cc-visa.947247ea.svg`} alt="Visa" className="h-6 w-auto" />
);

export const MastercardIcon = (): JSX.Element => (
  <img src={`${ICON_BASE}/cc-mastercard.fa544d3c.svg`} alt="Mastercard" className="h-6 w-auto" />
);

export const AmexIcon = (): JSX.Element => (
  <img src={`${ICON_BASE}/cc-amex.5194b151.svg`} alt="American Express" className="h-6 w-auto" />
);

export const DiscoverIcon = (): JSX.Element => (
  <img src={`${ICON_BASE}/cc-discover.79cc1fbd.svg`} alt="Discover" className="h-6 w-auto" />
);

export const DinersIcon = (): JSX.Element => (
  <img src={`${ICON_BASE}/cc-diners.4bb9998e.svg`} alt="Diners Club" className="h-6 w-auto" />
);

export const PayPalIcon = (): JSX.Element => (
  <img src={`${ICON_BASE}/PayPal-Color.480a390e.svg`} alt="PayPal" className="h-6 w-auto" />
);
