"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FloralOrnament from "@/components/ui/FloralOrnament";

const photos = [
  {
    src: "/fotoedit/IMG_5016.JPG",
    alt: "Galeri foto 1",
    rotate: -1.8,
    height: "h-[210px]",
  },
  {
    src: "/fotoedit/IMG_5004.JPG",
    alt: "Galeri foto 2",
    rotate: 1.6,
    height: "h-[205px]",
  },
  {
    src: "/fotoedit/IMG_5008.JPG",
    alt: "Galeri foto 3",
    rotate: 0.8,
    height: "h-[190px]",
  },
  {
    src: "/fotoedit/IMG_5019.JPG",
    alt: "Galeri foto 4",
    rotate: -2.2,
    height: "h-[220px]",
  },
  {
    src: "/fotoedit/IMG_5023.JPG",
    alt: "Galeri foto 5",
    rotate: -1.2,
    height: "h-[225px]",
  },
  {
    src: "/fotoedit/IMG_5012.JPG",
    alt: "Galeri foto 6",
    rotate: 1.4,
    height: "h-[195px]",
  },
  {
    src: "/fotoedit/IMG_5006.JPG",
    alt: "Galeri foto 7",
    rotate: -1.1,
    height: "h-[210px]",
  },
  {
    src: "/fotoedit/IMG_5020.JPG",
    alt: "Galeri foto 8",
    rotate: 1.7,
    height: "h-[220px]",
  },
  {
    src: "/fotoedit/IMG_5017.JPG",
    alt: "Galeri foto 9",
    rotate: -0.9,
    height: "h-[200px]",
  },
  {
    src: "/fotoedit/IMG_5007.JPG",
    alt: "Galeri foto 10",
    rotate: -0.9,
    height: "h-[200px]",
  },
  {
    src: "/fotoedit/IMG_5010.JPG",
    alt: "Galeri foto 11",
    rotate: -0.9,
    height: "h-[200px]",
  },
  {
    src: "/fotoedit/IMG_5014.JPG",
    alt: "Galeri foto 12",
    rotate: -0.9,
    height: "h-[200px]",
  },
];

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          onClick={onClose}
          aria-label="Tutup foto"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        <motion.div
          key="lightbox-image"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="relative max-h-[88vh] max-w-full overflow-hidden rounded-[28px] border border-white/15 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={2200}
            quality={80}
            sizes="92vw"
            className="max-h-[88vh] max-w-[92vw] object-contain"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(
    null,
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3E8] px-5 pb-14 pt-12">
      <FloralOrnament position="top-right" size={110} opacity={0.18} />
      <FloralOrnament position="bottom-left" size={110} opacity={0.18} />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="mb-8 px-2"
      >
        <div className="flex items-center gap-4">
          <h2
            className="text-4xl text-[#3D2B1F]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            Galeri
          </h2>
          <div className="flex-1 border-t border-[#C4A882]" />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 px-1">
        {photos.map((photo, index) => (
          <motion.button
            key={`${photo.src}-${index}`}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected({ src: photo.src, alt: photo.alt })}
            className={`group relative w-full overflow-hidden rounded-[18px] bg-white shadow-[0_12px_30px_rgba(107,91,78,0.16)] ${photo.height} ${index % 2 === 1 ? "mt-8" : ""}`}
            style={{ rotate: `${photo.rotate}deg` }}
            aria-label={`Lihat foto ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              quality={68}
              sizes="(max-width: 480px) 44vw, 220px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
          </motion.button>
        ))}
      </div>

      {selected && (
        <Lightbox
          src={selected.src}
          alt={selected.alt}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
