"use client";

import { motion } from "framer-motion";
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

export default function GallerySection() {
  const left  = photos.filter((p) => p.col === "left");
  const right = photos.filter((p) => p.col === "right");

  return (
    <section className="relative w-full bg-[#FAF3E8] px-5 pb-14 pt-12">
      <FloralOrnament position="top-right"  size={110} opacity={0.28} />
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
          <h2
            className="text-4xl text-[#3D2B1F]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
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
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="relative overflow-hidden rounded-xl shadow-md"
              style={{
                height: i % 2 === 0 ? "230px" : "190px",
                transformOrigin: "center center",
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Right column — offset vertically for scattered look */}
        <div className="flex flex-1 flex-col gap-4 pt-8">
          {right.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.05 }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="relative overflow-hidden rounded-xl shadow-md"
              style={{
                height: i % 2 === 0 ? "200px" : "240px",
                transformOrigin: "center center",
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
