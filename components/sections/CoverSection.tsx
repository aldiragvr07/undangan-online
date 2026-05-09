"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloralOrnament from "@/components/ui/FloralOrnament";
import FloatingPetals from "@/components/ui/FloatingPetals";

export default function CoverSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-end justify-end overflow-hidden">
      {/* Full-screen background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_6147.JPG"
          alt="Cover"
          fill
          preload
          quality={72}
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover object-center scale-[1.15]"
        />
        {/* Dark gradient overlay - stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* Floating petals overlay */}
      <FloatingPetals count={18} className="z-10" />

      {/* Corner ornaments */}
      <FloralOrnament position="top-right" size={160} opacity={0.35} />
      <FloralOrnament position="top-left" size={160} opacity={0.35} />
      <FloralOrnament position="bottom-right" size={130} opacity={0.25} />
      <FloralOrnament position="bottom-left" size={130} opacity={0.25} />

      {/* Content - bottom left aligned like reference */}
      <div className="relative z-10 w-full px-8 pb-16 pt-24">
        {/* "The Wedding Of" label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-2 text-sm tracking-[0.25em] text-white/70"
          style={{ fontFamily: "'Lora', serif" }}
        >
          The Wedding Of
        </motion.p>

        {/* Couple names */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mb-8 text-5xl font-light leading-tight text-white"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          Firdan &amp; Amelia
        </motion.h1>

        {/* Countdown */}
        <CountdownInline />

        {/* Save to calendar */}
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          href={`data:text/calendar;charset=utf8,BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20260530T030000Z\nDTEND:20260530T070000Z\nSUMMARY:Pernikahan Firdan & Amelia\nLOCATION:Jakarta Selatan\nEND:VEVENT\nEND:VCALENDAR`}
          download="undangan.ics"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Simpan di Kalender
        </motion.a>
      </div>

      {/* Floral accent top-right (lighter for dark bg) */}
      <FloralOrnament position="top-right" size={140} opacity={0.2} />
    </section>
  );
}

// ------ Inline countdown (no SSR mismatch) ------
import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-30T10:00:00+07:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function CountdownInline() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0, ready: false });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, Math.floor((TARGET.getTime() - Date.now()) / 1000));
      setTime({
        d: Math.floor(diff / 86400),
        h: Math.floor((diff % 86400) / 3600),
        m: Math.floor((diff % 3600) / 60),
        s: diff % 60,
        ready: true,
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const tiles = [
    { val: time.d, label: "Hari" },
    { val: time.h, label: "Jam" },
    { val: time.m, label: "Menit" },
    { val: time.s, label: "Detik" },
  ];

  if (!time.ready) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.55 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="flex gap-3"
    >
      {tiles.map((t) => (
        <div key={t.label} className="flex flex-col items-center gap-0.5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            <span
              className="text-2xl font-medium text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {pad(t.val)}
            </span>
          </div>
          <p className="text-[10px] tracking-widest text-white/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
