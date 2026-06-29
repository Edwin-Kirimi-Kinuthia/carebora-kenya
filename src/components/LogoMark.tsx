interface LogoMarkProps {
  variant?: "green" | "white";
  size?: number;
}

export default function LogoMark({ variant = "green", size = 44 }: LogoMarkProps) {
  const p = variant === "white" ? "#ffffff" : "#006B3F"; // primary
  const a = "#C8902E"; // gold accent — always same

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {/* Kenya map outline */}
      <path
        fill="none"
        stroke={p}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M15,50 L20,30 L40,18 L65,10 L100,8 L132,10 L158,18 L176,30
           L184,46 L188,65 L188,84 L183,102 L186,116 L178,132
           L165,146 L148,156 L124,164 L100,166 L76,164 L52,155
           L36,142 L22,126 L14,104 L12,80 L14,58 Z"
      />

      {/* Sun rays */}
      <g stroke={a} strokeWidth="2.2" strokeLinecap="round">
        <line x1="100" y1="17" x2="100" y2="9" />
        <line x1="109" y1="21" x2="115" y2="15" />
        <line x1="113" y1="30" x2="122" y2="30" />
        <line x1="109" y1="39" x2="115" y2="46" />
        <line x1="100" y1="43" x2="100" y2="52" />
        <line x1="91"  y1="39" x2="85"  y2="46" />
        <line x1="87"  y1="30" x2="78"  y2="30" />
        <line x1="91"  y1="21" x2="85"  y2="15" />
      </g>

      {/* Sun circle */}
      <circle cx="100" cy="30" r="9" fill={a} />

      {/* Centre person — head */}
      <circle cx="100" cy="55" r="9" fill={p} />

      {/* Centre person — arms curving into heart lobes */}
      <path
        fill="none"
        stroke={p}
        strokeWidth="3"
        strokeLinecap="round"
        d="M93,64 C87,70 80,76 77,85 M107,64 C113,70 120,76 123,85"
      />

      {/* Heart */}
      <path
        fill={p}
        d="M100,145
           C77,132 56,116 56,98 C56,81 67,72 80,74
           C88,75 96,83 100,91
           C104,83 112,75 120,74
           C133,72 144,81 144,98 C144,116 123,132 100,145 Z"
      />

      {/* ECG / pulse line */}
      <path
        fill="none"
        stroke={a}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M58,100 L68,100 L72,88 L77,112 L81,94 L85,100 L140,100"
      />

      {/* Left person — head */}
      <circle cx="54" cy="96" r="7" fill={a} />
      {/* Left person — raised arm */}
      <path
        fill="none"
        stroke={a}
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M48,103 C40,93 33,80 29,67 M54,103 L52,117"
      />

      {/* Right person — head */}
      <circle cx="146" cy="96" r="7" fill={a} />
      {/* Right person — raised arm */}
      <path
        fill="none"
        stroke={a}
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M152,103 C160,93 167,80 171,67 M146,103 L148,117"
      />
    </svg>
  );
}
