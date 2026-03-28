"use client";

type Props = {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  opacity?: number;
  size?: number;
};

export default function FloralOrnament({ position, opacity = 0.45, size = 160 }: Props) {
  const positionClass = {
    "top-right":    "top-0 right-0",
    "top-left":     "top-0 left-0 scale-x-[-1]",
    "bottom-right": "bottom-0 right-0 scale-y-[-1]",
    "bottom-left":  "bottom-0 left-0 scale-x-[-1] scale-y-[-1]",
  }[position];

  return (
    <div
      className={`pointer-events-none absolute ${positionClass}`}
      style={{ width: size, height: size, opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main curved branch */}
        <path d="M200 0 Q155 60 110 130 Q75 170 60 200" stroke="#8B6F4E" strokeWidth="1.5" fill="none" />
        <path d="M200 0 Q160 55 118 125 Q82 165 65 200" stroke="#C4A882" strokeWidth="0.8" fill="none" />

        {/* Large top rose */}
        <circle cx="178" cy="22" r="18" fill="#D4B896" fillOpacity="0.25"/>
        <ellipse cx="178" cy="8"  rx="7" ry="12" fill="#C4A882" fillOpacity="0.7" />
        <ellipse cx="178" cy="36" rx="7" ry="12" fill="#C4A882" fillOpacity="0.7" />
        <ellipse cx="165" cy="22" rx="12" ry="7" fill="#C4A882" fillOpacity="0.7" />
        <ellipse cx="191" cy="22" rx="12" ry="7" fill="#C4A882" fillOpacity="0.7" />
        <ellipse cx="168" cy="12" rx="7" ry="12" fill="#B8956A" fillOpacity="0.55" transform="rotate(-45 168 12)" />
        <ellipse cx="188" cy="12" rx="7" ry="12" fill="#B8956A" fillOpacity="0.55" transform="rotate(45 188 12)" />
        <ellipse cx="168" cy="32" rx="7" ry="12" fill="#B8956A" fillOpacity="0.55" transform="rotate(45 168 32)" />
        <ellipse cx="188" cy="32" rx="7" ry="12" fill="#B8956A" fillOpacity="0.55" transform="rotate(-45 188 32)" />
        <circle cx="178" cy="22" r="6" fill="#C4A882" />
        <circle cx="178" cy="22" r="3" fill="#8B6F4E" />

        {/* Mid branch leaves */}
        <path d="M155 65 Q172 52 175 36 Q164 54 155 65Z" fill="#C4A882" fillOpacity="0.85" />
        <path d="M145 75 Q128 60 122 42 Q133 64 145 75Z" fill="#B8956A" fillOpacity="0.7" />
        <path d="M135 90 Q155 82 162 68 Q148 84 135 90Z" fill="#C4A882" fillOpacity="0.8" />

        {/* Mid small rose */}
        <circle cx="140" cy="108" r="12" fill="#D4B896" fillOpacity="0.2"/>
        <ellipse cx="140" cy="98"  rx="5" ry="9" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="140" cy="118" rx="5" ry="9" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="130" cy="108" rx="9" ry="5" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="150" cy="108" rx="9" ry="5" fill="#C4A882" fillOpacity="0.65" />
        <circle cx="140" cy="108" r="5" fill="#C4A882" />
        <circle cx="140" cy="108" r="2.5" fill="#8B6F4E" />

        {/* Lower leaves */}
        <path d="M112 128 Q98 112 90 96 Q100 114 112 128Z" fill="#C4A882" fillOpacity="0.7" />
        <path d="M105 138 Q120 128 128 115 Q114 130 105 138Z" fill="#B8956A" fillOpacity="0.7" />

        {/* Bottom rose */}
        <circle cx="78" cy="175" r="18" fill="#D4B896" fillOpacity="0.25"/>
        <ellipse cx="78" cy="161" rx="7" ry="12" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="78" cy="189" rx="7" ry="12" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="64"  cy="175" rx="12" ry="7" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="92"  cy="175" rx="12" ry="7" fill="#C4A882" fillOpacity="0.65" />
        <ellipse cx="67"  cy="164" rx="7" ry="12" fill="#B8956A" fillOpacity="0.5" transform="rotate(-45 67 164)" />
        <ellipse cx="89"  cy="164" rx="7" ry="12" fill="#B8956A" fillOpacity="0.5" transform="rotate(45 89 164)" />
        <ellipse cx="67"  cy="186" rx="7" ry="12" fill="#B8956A" fillOpacity="0.5" transform="rotate(45 67 186)" />
        <ellipse cx="89"  cy="186" rx="7" ry="12" fill="#B8956A" fillOpacity="0.5" transform="rotate(-45 89 186)" />
        <circle cx="78" cy="175" r="6" fill="#C4A882" />
        <circle cx="78" cy="175" r="3" fill="#8B6F4E" />

        {/* Small buds */}
        <circle cx="165" cy="50"  r="5"  fill="#D4B896" fillOpacity="0.8" />
        <circle cx="165" cy="50"  r="2.5" fill="#C4A882" />
        <circle cx="125" cy="150" r="4"  fill="#D4B896" fillOpacity="0.7" />
        <circle cx="125" cy="150" r="2"  fill="#C4A882" />

        {/* Tiny dots along branch */}
        <circle cx="170" cy="44"  r="1.5" fill="#C4A882" fillOpacity="0.6" />
        <circle cx="152" cy="80"  r="1.5" fill="#C4A882" fillOpacity="0.6" />
        <circle cx="133" cy="105" r="1.5" fill="#C4A882" fillOpacity="0.6" />
        <circle cx="110" cy="135" r="1.5" fill="#C4A882" fillOpacity="0.6" />
        <circle cx="88"  cy="160" r="1.5" fill="#C4A882" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
