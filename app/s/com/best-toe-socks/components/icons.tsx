const STAR_PATH = "M15.5754 5.71885L10.6567 4.96639L8.45208 0.263392C8.28741 -0.0877974 7.71208 -0.0877974 7.54741 0.263392L5.34342 4.96639L0.424765 5.71885C0.0207661 5.78094 -0.140567 6.27301 0.142766 6.56344L3.71609 10.2316L2.87143 15.4173C2.80409 15.8292 3.24342 16.1384 3.60676 15.9361L8.00008 13.5044L12.3934 15.9367C12.7534 16.137 13.1967 15.8339 13.1287 15.418L12.2841 10.2322L15.8574 6.56411C16.1407 6.27301 15.9787 5.78094 15.5754 5.71885Z";

export function CheckIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.93103 5.86207L0 7.7931L5.7931 13.5862L15.4483 3.93103L13.5172 2L5.7931 9.72414L1.93103 5.86207Z"
        fill="#00A871"
      />
    </svg>
  );
}

export function CrossIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M15.0984 3.10039L12.8984 0.900391L7.99844 5.90039L3.09844 0.900391L0.898438 3.10039L5.89844 8.00039L0.898438 12.9004L3.09844 15.1004L7.99844 10.1004L12.8984 15.1004L15.0984 12.9004L10.0984 8.00039L15.0984 3.10039Z"
        fill="#D2152D"
      />
    </svg>
  );
}

export function ChevronRightIcon({ className = "" }: { className?: string }): JSX.Element {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.758424 14.1582C0.985924 14.3861 1.28459 14.5 1.58311 14.5C1.8817 14.5 2.1803 14.387 2.40817 14.1573L8.24149 8.32435C8.69723 7.86867 8.69723 7.13043 8.24149 6.67473L2.40817 0.841776C1.95243 0.386075 1.21415 0.386075 0.758424 0.841776C0.302693 1.29747 0.302693 2.03571 0.758424 2.49141L5.76853 7.50045L0.758424 12.5086C0.302693 12.9643 0.302693 13.7025 0.758424 14.1582Z"
        fill="#fff"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }: { className?: string }): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M13.0698 18.8971L23.5572 8.55807C24.1476 7.97367 24.1476 7.0237 23.5572 6.4393C22.9668 5.8534 22.0079 5.8534 21.4175 6.4393L12.0001 15.7235L2.58261 6.4393C1.99222 5.8534 1.03329 5.8534 0.442909 6.4393C-0.147472 7.0252 -0.147472 7.97367 0.442909 8.55807L10.9303 18.8956C11.498 19.4604 12.5004 19.4619 13.0698 18.8971Z"
        fill="#E0E0E0"
      />
    </svg>
  );
}

export function HeartIcon(): JSX.Element {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M13.0062 0.614321C10.312 -1.39456 7.49988 2.16672 7.49988 2.16672C7.49988 2.16672 4.68772 -1.39456 1.99355 0.614321C-1.28163 3.05482 0.951287 8.08324 7.49988 11.9998C14.0503 8.08146 16.2814 3.05482 13.0062 0.614321Z"
        fill="#D2152D"
      />
    </svg>
  );
}

export function CheckCircleIcon(): JSX.Element {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 12C7.28793 12 8.06815 11.8448 8.7961 11.5433C9.52405 11.2417 10.1855 10.7998 10.7426 10.2426C11.2998 9.68549 11.7417 9.02405 12.0433 8.2961C12.3448 7.56815 12.5 6.78793 12.5 6C12.5 5.21207 12.3448 4.43185 12.0433 3.7039C11.7417 2.97595 11.2998 2.31451 10.7426 1.75736C10.1855 1.20021 9.52405 0.758251 8.7961 0.456723C8.06815 0.155195 7.28793 -1.17411e-08 6.5 0C4.9087 2.37122e-08 3.38258 0.632141 2.25736 1.75736C1.13214 2.88258 0.5 4.4087 0.5 6C0.5 7.5913 1.13214 9.11742 2.25736 10.2426C3.38258 11.3679 4.9087 12 6.5 12ZM6.34533 8.42667L9.67867 4.42667L8.65467 3.57333L5.788 7.01267L4.30467 5.52867L3.362 6.47133L5.362 8.47133L5.878 8.98733L6.34533 8.42667Z"
        fill="#DFDFDF"
      />
    </svg>
  );
}

export function BackToTopIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.99995 15.5832C4.12932 15.5832 0.999878 12.4537 0.999878 8.58308C0.999878 4.71245 4.12932 1.58301 7.99995 1.58301C11.8706 1.58301 15 4.71245 15 8.58308C15 12.4537 11.8706 15.5832 7.99995 15.5832ZM7.99995 2.40655C4.58227 2.40655 1.82342 5.1654 1.82342 8.58308C1.82342 12.0008 4.58227 14.7596 7.99995 14.7596C11.4176 14.7596 14.1765 12.0008 14.1765 8.58308C14.1765 5.1654 11.4176 2.40655 7.99995 2.40655Z"
        fill="white"
      />
      <path d="M11.4197 9.28255L8.00197 5.86487L4.58429 9.28255L4.00781 8.70607L8.00197 4.71191L11.9961 8.70607L11.4197 9.28255Z" fill="white" />
      <path d="M7.58594 5.28613H8.40948V12.2862H7.58594V5.28613Z" fill="white" />
    </svg>
  );
}

export function GoldStarsIcon({ size = 16 }: { size?: number }): JSX.Element {
  const gap = size / 4;
  const width = size * 5 + gap * 4;
  return (
    <svg
      width={width}
      height={size}
      viewBox={`0 0 ${width} ${size}`}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <path
          key={index}
          d={STAR_PATH}
          fill="#FFCB13"
          transform={`translate(${index * (size + gap)} 0) scale(${size / 16})`}
        />
      ))}
    </svg>
  );
}
