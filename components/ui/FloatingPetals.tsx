"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Bentuk kelopak bunga
const PETALS = [
  // Rose petal
  (key: number, color: string) => (
    <svg key={key} width="18" height="22" viewBox="0 0 18 22" fill={color}>
      <path d="M9 0 Q18 6 15 14 Q12 22 9 22 Q6 22 3 14 Q0 6 9 0Z" />
    </svg>
  ),
  // Round petal
  (key: number, color: string) => (
    <svg key={key} width="14" height="14" viewBox="0 0 14 14" fill={color}>
      <ellipse cx="7" cy="7" rx="5" ry="7" />
    </svg>
  ),
  // Small flower
  (key: number, color: string) => (
    <svg key={key} width="16" height="16" viewBox="0 0 16 16" fill={color}>
      <circle cx="8" cy="3" r="3" />
      <circle cx="13" cy="8" r="3" />
      <circle cx="8" cy="13" r="3" />
      <circle cx="3" cy="8" r="3" />
      <circle cx="8" cy="8" r="2.5" fill="#FAF3E8" />
    </svg>
  ),
  // Leaf
  (key: number, color: string) => (
    <svg key={key} width="12" height="20" viewBox="0 0 12 20" fill={color}>
      <path d="M6 0 Q12 8 8 16 Q6 20 4 16 Q0 8 6 0Z" />
    </svg>
  ),
];

const COLORS = ["#C4A882", "#D4B896", "#B8956A", "#E6C9A4", "#C9A87C", "#dcb896"];

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  type: number;
  color: string;
  drift: number;
  rotate: number;
}

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

export default function FloatingPetals({ count = 14, className = "" }: FloatingPetalsProps) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        size: 0.6 + Math.random() * 0.8,
        type: Math.floor(Math.random() * PETALS.length),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        drift: (Math.random() - 0.5) * 80,
        rotate: Math.random() * 360,
      }))
    );
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0"
          style={{ left: `${p.x}%`, scale: p.size, originX: "50%", originY: "50%" }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.drift],
            rotate: [p.rotate, p.rotate + 360],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {PETALS[p.type](p.id, p.color)}
        </motion.div>
      ))}
    </div>
  );
}
