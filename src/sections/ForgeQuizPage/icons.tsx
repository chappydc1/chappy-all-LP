import type { IconKey } from "@/sections/ForgeQuizPage/types"

export type IconProps = {
  className?: string
}

const SkinIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <line
      x1="0.5"
      y1="5.793"
      x2="23.5"
      y2="5.793"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M.5,8.772c2.872,0,2.872,2.98,5.744,2.98s2.875-2.98,5.75-2.98,2.876,2.98,5.753,2.98,2.876-2.98,5.753-2.98"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <circle cx="0.625" cy="14.483" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="3.875" cy="17.462" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="7.125" cy="14.483" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="10.375" cy="17.462" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="13.875" cy="14.483" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="16.875" cy="17.462" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="20.375" cy="14.483" r="0.25" style={{ fill: "currentcolor" }} />
    <circle cx="23.375" cy="17.462" r="0.25" style={{ fill: "currentcolor" }} />
  </svg>
)

const StarsIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M7,21.25c7.181,0,8.9-4,13.5-4a3,3,0,0,1,0,6H3.5a3,3,0,0,1,0-6c4.6,0,6.319,4,13.5,4"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M20.5.75A2.231,2.231,0,0,0,23,3.25c-1.615-.006-2.418.86-2.5,2.5A2.211,2.211,0,0,0,18,3.25,2.232,2.232,0,0,0,20.5.75"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M5.5.75C5.489,3.577,6.868,5.183,10,5.25,7.093,5.239,5.648,6.8,5.5,9.75c-.025-2.784-1.273-4.5-4.5-4.5C3.888,5.209,5.489,3.816,5.5.75"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M12,5.25a7.5,7.5,0,0,1,5.484,12.616"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M6.517,17.867A7.474,7.474,0,0,1,4.5,12.75a7.7,7.7,0,0,1,.066-1"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
  </svg>
)

const HydrationIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M10.5,7.248v-2.5a.5.5,0,0,0-.5-.5H7a.5.5,0,0,0-.5.5v2.5"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <line
      x1="8.501"
      y1="1.248"
      x2="8.501"
      y2="4.248"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M10.5,1.248H6.037a1,1,0,0,0-.832.445L4.5,2.748"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M14.5,14.748v6.5a2,2,0,0,1-2,2h-8a2,2,0,0,1-2-2v-12a2,2,0,0,1,2-2h7"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M21.5,9.248a4,4,0,1,1-8,0c0-1.756,2.529-6.409,3.565-8.242a.5.5,0,0,1,.871,0C18.973,2.84,21.5,7.492,21.5,9.248Z"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
  </svg>
)

const AllIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M15.256,9.453c1.95.457,3.262,1.314,3.262,2.3,0,1.507-1.119,2.157-2.6,2.437A22.365,22.365,0,0,1,12,14.4a13.408,13.408,0,0,0-3.224.3c-1.249.323-2.072.956-2.072,2.138,0,2.037,2.37,2.445,5.3,2.445,0,0,3.666,0,2.443,3.259"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M17.051,15.857a1.931,1.931,0,0,1,.244.981c0,2.037-2.371,2.445-5.3,2.445,0,0-3.666,0-2.444,3.259"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M8.743,9.453c-1.95.457-3.261,1.314-3.261,2.3a2.1,2.1,0,0,0,1.211,1.987"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M10.706,12.5C10.321,7.361,10,2.939,10,2.5a2,2,0,0,1,4,0c0,.442-.321,4.864-.706,10.006"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M12.993,16.5c-.173,2.288-.346,4.555-.5,6.54a.5.5,0,0,1-.991,0c-.152-1.985-.324-4.252-.5-6.54"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M10.029,3.089C7.391-.1,3.444,3.6.868,4.351a.51.51,0,0,0-.348.34.49.49,0,0,0,.107.467C2.134,6.827,6.261,8.171,10.32,7.28"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
    <path
      d="M13.971,3.089C16.609-.1,20.556,3.6,23.132,4.351a.51.51,0,0,1,.348.34.49.49,0,0,1-.107.467C21.866,6.827,17.739,8.171,13.68,7.28"
      style={{ fill: "none", stroke: "currentcolor", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
  </svg>
)

const ICONS: Record<IconKey, (props: IconProps) => React.ReactElement> = {
  skin: SkinIcon,
  stars: StarsIcon,
  hydration: HydrationIcon,
  all: AllIcon,
}

export const GoalIcon = ({ icon, className }: { icon: IconKey; className?: string }): React.ReactElement => {
  const Icon = ICONS[icon]
  return <Icon className={className} />
}
