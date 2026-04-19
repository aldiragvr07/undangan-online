"use client";

import { motion } from "framer-motion";

interface FloralDividerProps {
  color?: string;
  bgColor?: string;
}

export default function FloralDivider({
  color = "#C4A882",
  bgColor = "#FAF3E8",
}: FloralDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex w-full items-center justify-center py-2"
      style={{ backgroundColor: bgColor }}
    >
      <svg
        width="280"
        height="36"
        viewBox="0 0 280 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left line */}
        <line x1="0" y1="18" x2="95" y2="18" stroke={color} strokeWidth="0.8" />
        {/* Left small flower */}
        <circle cx="100" cy="18" r="4" fill={color} fillOpacity="0.4" />
        <circle cx="100" cy="18" r="2" fill={color} />
        {/* Left leaf */}
        <path d="M108 14 Q116 18 108 22 Q104 18 108 14Z" fill={color} fillOpacity="0.6" />

        {/* Center ornament */}
        <circle cx="140" cy="18" r="6" fill={color} fillOpacity="0.15" />
        <circle cx="140" cy="18" r="4" fill={color} fillOpacity="0.3" />
        <circle cx="140" cy="18" r="2" fill={color} />
        {/* Center petals */}
        <ellipse cx="140" cy="9"  rx="2.5" ry="5" fill={color} fillOpacity="0.5" />
        <ellipse cx="140" cy="27" rx="2.5" ry="5" fill={color} fillOpacity="0.5" />
        <ellipse cx="131" cy="18" rx="5" ry="2.5" fill={color} fillOpacity="0.5" />
        <ellipse cx="149" cy="18" rx="5" ry="2.5" fill={color} fillOpacity="0.5" />
        {/* Diagonal petals */}
        <ellipse cx="133.5" cy="11.5" rx="2.5" ry="5" fill={color} fillOpacity="0.35" transform="rotate(-45 133.5 11.5)" />
        <ellipse cx="146.5" cy="11.5" rx="2.5" ry="5" fill={color} fillOpacity="0.35" transform="rotate(45 146.5 11.5)" />
        <ellipse cx="133.5" cy="24.5" rx="2.5" ry="5" fill={color} fillOpacity="0.35" transform="rotate(45 133.5 24.5)" />
        <ellipse cx="146.5" cy="24.5" rx="2.5" ry="5" fill={color} fillOpacity="0.35" transform="rotate(-45 146.5 24.5)" />

        {/* Right leaf */}
        <path d="M172 14 Q164 18 172 22 Q176 18 172 14Z" fill={color} fillOpacity="0.6" />
        {/* Right small flower */}
        <circle cx="180" cy="18" r="4" fill={color} fillOpacity="0.4" />
        <circle cx="180" cy="18" r="2" fill={color} />
        {/* Right line */}
        <line x1="185" y1="18" x2="280" y2="18" stroke={color} strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}
