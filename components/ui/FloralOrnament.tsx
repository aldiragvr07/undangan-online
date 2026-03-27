"use client";

type Props = {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  opacity?: number;
  size?: number;
};

export default function FloralOrnament({
  position,
  opacity = 0.4,
  size = 160,
}: Props) {
  const positionClass = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0 scale-x-[-1]",
    "bottom-right": "bottom-0 right-0 scale-y-[-1]",
    "bottom-left": "bottom-0 left-0 scale-x-[-1] scale-y-[-1]",
  }[position];

  return (
    <div
      className={`pointer-events-none absolute ${positionClass}`}
      style={{ width: size, height: size, opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main branch */}
        <path
          d="M160 0 Q120 50, 90 110 Q100 70, 140 30 Q150 15, 160 0Z"
          fill="#C4A882"
        />
        <path
          d="M155 5 Q125 55, 80 120 Q70 135, 65 160"
          stroke="#8B6F4E"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Leaves */}
        <path d="M115 55 Q130 44, 136 28 Q124 40, 115 55Z" fill="#C4A882" />
        <path d="M95 82 Q80 66, 70 50 Q78 68, 95 82Z" fill="#B8956A" />
        <path d="M80 100 Q68 88, 60 78 Q70 90, 80 100Z" fill="#C4A882" />
        {/* Small flowers */}
        <circle cx="65" cy="160" r="12" fill="#D4B896" />
        <circle cx="65" cy="160" r="7" fill="#C4A882" />
        <circle cx="65" cy="160" r="3" fill="#8B6F4E" />
        <circle cx="40" cy="148" r="6" fill="#D4B896" />
        <circle cx="40" cy="148" r="3.5" fill="#C4A882" />
        <circle cx="40" cy="148" r="1.5" fill="#8B6F4E" />
        {/* Tiny dots */}
        <circle cx="110" cy="60" r="3" fill="#C4A882" />
        <circle cx="88" cy="92" r="2.5" fill="#B8956A" />
        <circle cx="72" cy="112" r="2" fill="#C4A882" />
      </svg>
    </div>
  );
}
