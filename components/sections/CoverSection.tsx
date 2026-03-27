"use client";

import { motion } from "framer-motion";
import FloralOrnament from "@/components/ui/FloralOrnament";

export default function CoverSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#FAF3E8] px-6 py-20">
      <FloralOrnament position="top-right" size={180} />
      <FloralOrnament position="bottom-left" size={180} />

      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 rounded-full border border-[#C4A882] bg-[#FAF3E8]/80 px-6 py-2 backdrop-blur-sm"
      >
        <p
          className="text-center text-xs font-semibold tracking-[3px] text-[#8B6F4E]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          30 & 31 MEI 2026
        </p>
      </motion.div>

      {/* Bismillah */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mb-4 text-center text-lg italic text-[#8B6F4E]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Bismillahirrahmanirrahim
      </motion.p>

      {/* Photo placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-8 flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-[#C4A882] bg-[#E6D0BA] shadow-lg"
      >
        <img
          src="/foto-cover.jpg"
          alt="Foto Prewedding Firdan & Amelia"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Couple names */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="mb-2 text-center"
      >
        <p
          className="text-5xl leading-tight text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Firdan Nursalfah Toni
        </p>
        <p
          className="my-1 text-2xl text-[#B8956A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &amp;
        </p>
        <p
          className="text-5xl leading-tight text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Amelia Firdausya
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="my-4 text-sm tracking-widest text-[#8B6F4E]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        S.KOM & S.PD
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="my-4 flex items-center gap-3"
      >
        <div className="h-px w-16 bg-[#C4A882]" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C4A882">
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <div className="h-px w-16 bg-[#C4A882]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="text-center text-xs text-[#9B8B78]"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Sabtu & Minggu, 30 – 31 Mei 2026
        <br />
        Jakarta Selatan
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, repeat: Infinity, duration: 1.5 },
        }}
        className="absolute bottom-8 flex flex-col items-center gap-1"
      >
        <p
          className="text-[10px] tracking-widest text-[#9B8B78]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          SCROLL
        </p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4A882"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
