"use client";

import { motion } from "framer-motion";

// ─── KONFIGURASI FOTO ───────────────────────────────────────────────────────
// Tambahkan foto Anda di sini. Taruh file foto ke folder public/
// dan sesuaikan path-nya.
const BRIDE_PHOTOS = [
  { src: "/foto-profile-amel.JPG",   alt: "Amelia 1" },
  { src: "/foto-profile-amel2.JPG",  alt: "Amelia 2" },
  { src: "/foto-profile-amel3.JPG",  alt: "Amelia 3" },
  { src: "/foto-profile-amel4.JPG",  alt: "Amelia 4" },
  { src: "/foto-profile-amel5.JPG",  alt: "Amelia 5" },
  // Duplikat untuk loop mulus
  { src: "/foto-profile-amel.JPG",   alt: "Amelia 1b" },
  { src: "/foto-profile-amel2.JPG",  alt: "Amelia 2b" },
  { src: "/foto-profile-amel3.JPG",  alt: "Amelia 3b" },
];

const GROOM_PHOTOS = [
  { src: "/foto-profile-firdan.JPG", alt: "Firdan 1" },
  { src: "/foto-profile-firdan2.jpg", alt: "Firdan 2" },
  { src: "/foto-profile-firdan3.JPG", alt: "Firdan 3" },
  { src: "/foto-profile-firdan4.JPG", alt: "Firdan 4" },
  { src: "/foto-profile-firdan5.JPG", alt: "Firdan 5" },
  // Duplikat untuk loop mulus
  { src: "/foto-profile-firdan.JPG", alt: "Firdan 1b" },
  { src: "/foto-profile-firdan2.jpg", alt: "Firdan 2b" },
  { src: "/foto-profile-firdan3.JPG", alt: "Firdan 3b" },
];
// ────────────────────────────────────────────────────────────────────────────

const PHOTO_W = 130;   // lebar tiap foto dalam px
const PHOTO_H = 190;   // tinggi tiap foto dalam px
const GAP     = 10;    // jarak antar foto
const DURATION = 45;   // detik 1 putaran (lebih kecil = lebih cepat)

interface AutoScrollStripProps {
  photos: { src: string; alt: string }[];
  direction?: "left" | "right";
}

function AutoScrollStrip({ photos, direction = "left" }: AutoScrollStripProps) {
  // Duplikasi foto agar loop terlihat infinite
  const doubled = [...photos, ...photos];

  const animClass = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className="overflow-hidden w-full">
      {/* Keyframes diinject via style tag */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .scroll-left {
          animation: scrollLeft ${DURATION}s linear infinite;
          will-change: transform;
        }
        .scroll-right {
          animation: scrollRight ${DURATION}s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
        className={`flex ${animClass}`}
        style={{ gap: GAP, width: "max-content" }}
      >
        {doubled.map((p, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden rounded-2xl"
            style={{ width: PHOTO_W, height: PHOTO_H }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="h-full w-full object-cover object-top"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

interface PersonBlockProps {
  label: string;
  name: string;
  degree: string;
  role: string;
  parent: string;
  photos: { src: string; alt: string }[];
  scrollDirection?: "left" | "right";
  index: number;
}

function PersonBlock({
  label, name, degree, role, parent,
  photos, scrollDirection = "left", index,
}: PersonBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="w-full bg-[#EEEBE6] pb-8"
    >
      {/* Vertical label + scroll strip row */}
      <div className="flex items-stretch" style={{ minHeight: PHOTO_H + 32 }}>
        {/* Vertical text label */}
        <div className="flex w-10 shrink-0 items-center justify-center bg-[#8B7355]">
          <p
            className="whitespace-nowrap text-[11px] font-semibold tracking-[0.35em] text-white"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            {label}
          </p>
        </div>

        {/* Photo carousel strip */}
        <div className="flex-1 overflow-hidden py-4 pl-3">
          <AutoScrollStrip photos={photos} direction={scrollDirection} />
        </div>
      </div>

      {/* Info block below */}
      <div className="px-7 pt-5">
        <h2
          className="text-3xl text-[#2C2017]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          {name}, <span className="text-2xl">{degree}</span>
        </h2>
        <div className="mb-2 mt-1 h-0.5 w-10 bg-[#8B7355]" />
        <p
          className="text-xs font-semibold text-[#6B5B4E]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {role}
        </p>
        <p
          className="mt-1 text-sm text-[#6B5B4E]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {parent}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProfileSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#FAF3E8] px-7 py-12"
      >
        <p
          className="mb-1 text-xs uppercase tracking-[0.3em] text-[#9B8B78]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Bismillahirrahmanirrahim
        </p>
        <div className="mt-4 flex items-start gap-4">
          <h2
            className="text-3xl leading-snug text-[#3D2B1F]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Mempelai
          </h2>
          <div className="mt-3 flex-1 border-t border-[#C4A882]" />
        </div>
        <p
          className="mt-3 text-sm leading-relaxed text-[#7A6555]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Dengan penuh kebahagiaan kami mengumumkan pernikahan putra-putri kami.
          Assalamu&apos;alaikum Warahmatullahi Wabarakatuh.
        </p>
      </motion.div>

      {/* Mempelai Wanita — scroll ke kiri */}
      <PersonBlock
        index={0}
        label="MEMPELAI WANITA"
        name="Amelia Firdausya"
        degree="S.H"
        role="Putri Ketiga dari"
        parent="Bpk. H. Abdullah Syahid & Ibu Hj. Aisyah"
        photos={BRIDE_PHOTOS}
        scrollDirection="left"
      />

      {/* Spacer divider */}
      <div className="h-2 bg-[#FAF3E8]" />

      {/* Mempelai Pria — scroll ke kanan (berlawanan arah) */}
      <PersonBlock
        index={1}
        label="MEMPELAI PRIA"
        name="Firdan Nursalfah Toni"
        degree="S.Tr.Kom"
        role="Putra pertama dari"
        parent="Bpk. Deden Komarudin & Ibu Neneng Susanti"
        photos={GROOM_PHOTOS}
        scrollDirection="right"
      />
    </section>
  );
}
