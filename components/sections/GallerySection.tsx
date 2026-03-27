"use client";

import { motion } from "framer-motion";

const photos = [
  { height: "h-48" },
  { height: "h-36" },
  { height: "h-52" },
  { height: "h-40" },
  { height: "h-44" },
  { height: "h-36" },
];

function PhotoPlaceholder({ height, index }: { height: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      className={`relative w-full overflow-hidden rounded-xl border border-[#C4A882] bg-[#E6D0BA] ${height} flex items-center justify-center cursor-pointer transition-shadow hover:shadow-lg`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8956A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#6B4F36]/10 to-transparent p-2">
        <p
          className="text-[9px] font-semibold tracking-widest text-[#8B6F4E] opacity-0 group-hover:opacity-100"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          PREWEDDING
        </p>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section className="relative w-full bg-[#FAF3E8] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p
          className="text-xs font-semibold tracking-[4px] text-[#B8956A]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          MOMEN KAMI
        </p>
        <h2
          className="mt-2 text-4xl text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Our Gallery
        </h2>
        <div className="mx-auto mt-3 flex items-center justify-center gap-3 w-40">
          <div className="h-px flex-1 bg-[#C4A882]" />
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#C4A882">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div className="h-px flex-1 bg-[#C4A882]" />
        </div>
      </motion.div>

      {/* Masonry-style 2-col grid */}
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        {photos.map((p, i) => (
          <PhotoPlaceholder key={i} height={p.height} index={i} />
        ))}
      </div>
    </section>
  );
}
