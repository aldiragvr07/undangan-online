"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FloralOrnament from "@/components/ui/FloralOrnament";
import FloatingPetals from "@/components/ui/FloatingPetals";

// ─── Tambahkan foto Anda di sini ────────────────────────────────────────────
const photos = [
  { src: "/foto-cover.jpg",           alt: "Foto 1", rotate: -2.5, col: "left"  },
  { src: "/foto-profile-amel.JPG",   alt: "Foto 2", rotate:  3.0, col: "right" },
  { src: "/foto-profile-firdan.JPG", alt: "Foto 3", rotate:  1.5, col: "left"  },
  { src: "/foto-cover.jpg",           alt: "Foto 4", rotate: -3.5, col: "right" },
  { src: "/foto-profile-amel.JPG",   alt: "Foto 5", rotate:  2.0, col: "left"  },
  { src: "/foto-profile-firdan.JPG", alt: "Foto 6", rotate: -1.5, col: "right" },
];
// ────────────────────────────────────────────────────────────────────────────

// Lightbox modal
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          onClick={onClose}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        {/* Image */}
        <motion.div
          key="lightbox-img"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="relative max-h-[85vh] max-w-full overflow-hidden rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[85vh] max-w-[92vw] object-contain"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  const left  = photos.filter((p) => p.col === "left");
  const right = photos.filter((p) => p.col === "right");

  return (
    <section className="relative w-full bg-[#FAF3E8] px-5 pb-14 pt-12">
      <FloralOrnament position="top-right"   size={110} opacity={0.28} />
      <FloralOrnament position="bottom-left" size={110} opacity={0.28} />
      <FloatingPetals count={7} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-8 px-2"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-4xl text-[#3D2B1F]" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            Galeri
          </h2>
          <div className="flex-1 border-t border-[#C4A882]" />
        </div>
      </motion.div>

      {/* Scattered 2-column grid */}
      <div className="flex gap-3">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-4">
          {left.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected({ src: p.src, alt: p.alt })}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-md"
              style={{ height: i % 2 === 0 ? "230px" : "190px", transformOrigin: "center center" }}
            >
              <img src={p.src} alt={p.alt} className="h-full w-full object-cover" draggable={false} />
              {/* Tap hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 hover:bg-black/15">
                <div className="rounded-full bg-white/0 p-2 transition-all duration-300 hover:bg-white/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-0 group-hover:opacity-100">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-4 pt-8">
          {right.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.05 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected({ src: p.src, alt: p.alt })}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-md"
              style={{ height: i % 2 === 0 ? "200px" : "240px", transformOrigin: "center center" }}
            >
              <img src={p.src} alt={p.alt} className="h-full w-full object-cover" draggable={false} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <Lightbox src={selected.src} alt={selected.alt} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
