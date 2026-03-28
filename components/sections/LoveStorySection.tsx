"use client";

import { motion } from "framer-motion";
import FloralOrnament from "@/components/ui/FloralOrnament";
import FloatingPetals from "@/components/ui/FloatingPetals";

const stories = [
  {
    emoji: "✨",
    tahun: "2020",
    judul: "Pertama Bertemu",
    isi: "Takdir mempertemukan kami untuk pertama kali di sebuah kesempatan yang tidak pernah kami duga. Sebuah pertemuan sederhana yang ternyata menjadi awal dari segalanya.",
    color: "#F5ECD8",
    accent: "#C4A882",
  },
  {
    emoji: "💌",
    tahun: "2021",
    judul: "Berpacaran",
    isi: "Dari teman menjadi lebih dari sekadar teman. Perjalanan indah dimulai — belajar saling mengenal, saling memahami, dan menemukan kecocokan di setiap langkah.",
    color: "#EDE4D4",
    accent: "#8B7355",
  },
  {
    emoji: "💍",
    tahun: "2026",
    judul: "Menuju Pelaminan",
    isi: "Dan kini, dengan ridho Allah SWT dan restu kedua orang tua, kami siap melangkah ke babak baru kehidupan bersama. Menyatukan dua keluarga dalam satu ikatan suci.",
    color: "#F5ECD8",
    accent: "#C4A882",
  },
];

export default function LoveStorySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3E8] px-5 pb-14 pt-12">
      <FloralOrnament position="top-left"     size={100} opacity={0.25} />
      <FloralOrnament position="bottom-right" size={100} opacity={0.25} />
      <FloatingPetals count={7} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mb-10 px-1"
      >
        <p
          className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#9B8B78]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Perjalanan Kami
        </p>
        <div className="flex items-center gap-3">
          <h2
            className="whitespace-nowrap text-3xl text-[#3D2B1F]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Kisah Cinta
          </h2>
          <div className="flex-1 border-t border-[#C4A882]" />
        </div>
      </motion.div>

      {/* Timeline — vertical line kiri, kartu kanan */}
      <div className="relative pl-4">
        {/* Garis vertikal */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-[#C4A882] via-[#8B7355] to-[#C4A882]"
        />

        <div className="flex flex-col gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex items-start gap-5"
            >
              {/* Dot di garis */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.25, type: "spring", stiffness: 200 }}
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg shadow-md"
                style={{
                  backgroundColor: s.color,
                  border: `2.5px solid ${s.accent}`,
                  marginLeft: "-20px", // center dot on the line
                }}
              >
                {s.emoji}
              </motion.div>

              {/* Kartu */}
              <div
                className="flex-1 rounded-2xl p-5 shadow-sm"
                style={{ backgroundColor: s.color }}
              >
                <p
                  className="mb-1 text-[10px] font-semibold tracking-widest text-[#9B8B78]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {s.tahun}
                </p>
                <h3
                  className="mb-2 text-xl leading-snug text-[#3D2B1F]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {s.judul}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#7A6555]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {s.isi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-10 rounded-2xl bg-[#E6D0BA] px-6 py-6 text-center"
      >
        <p
          className="text-sm italic leading-loose text-[#6B5B4E]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
          kepadanya.&rdquo;
        </p>
        <p
          className="mt-3 text-[10px] tracking-widest text-[#9B8B78]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          — QS. AR-RUM : 21 —
        </p>
      </motion.div>
    </section>
  );
}
