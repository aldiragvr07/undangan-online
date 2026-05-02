"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-05-30T10:00:00+07:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function useCountdown() {
  const [diff, setDiff] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDiff(TARGET.getTime() - Date.now());
    const id = setInterval(() => {
      setDiff(TARGET.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const total = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds, mounted };
}

function Tile({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      key={value}
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-1"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6B4F36] shadow-lg">
        <span
          className="text-3xl font-bold text-[#FAF3E8]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {pad(value)}
        </span>
      </div>
      <p
        className="text-[10px] font-semibold tracking-widest text-[#8B6F4E]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds, mounted } = useCountdown();

  const d = mounted ? days : 0;
  const h = mounted ? hours : 0;
  const m = mounted ? minutes : 0;
  const s = mounted ? seconds : 0;

  return (
    <section className="relative w-full overflow-hidden bg-[#6B4F36] px-6 py-20">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#FAF3E8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-8 text-center"
      >
        <p
          className="text-xs font-semibold tracking-[4px] text-[#C4A882]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          MENGHITUNG HARI
        </p>
        <h2
          className="mt-2 text-4xl text-[#FAF3E8]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Save The Date
        </h2>
        <p
          className="mt-2 text-sm text-[#C4A882]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Minggu, 31 Mei 2026
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-4"
      >
        <Tile value={d} label="HARI" />
        <div className="flex items-center pb-5 text-2xl font-bold text-[#C4A882]">:</div>
        <Tile value={h} label="JAM" />
        <div className="flex items-center pb-5 text-2xl font-bold text-[#C4A882]">:</div>
        <Tile value={m} label="MENIT" />
        <div className="flex items-center pb-5 text-2xl font-bold text-[#C4A882]">:</div>
        <Tile value={s} label="DETIK" />
      </motion.div>
    </section>
  );
}
