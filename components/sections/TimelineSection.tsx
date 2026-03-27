"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  time: string;
  title: string;
  desc: string;
  align: "left" | "right";
  icon: React.ReactNode;
}

const RingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
    <circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" />
  </svg>
);
const GlassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 22h8M12 11v11M3 3l9 8 9-8H3z" />
  </svg>
);
const CakeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" />
    <line x1="12" y1="11" x2="12" y2="3" />
  </svg>
);
const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const items: TimelineItem[] = [
  {
    time: "08:00 WIB",
    title: "Persiapan & Kedatangan Tamu",
    desc: "Pengantin dan keluarga bersiap-siap. Tamu mulai berdatangan.",
    align: "left",
    icon: <StarIcon />,
  },
  {
    time: "10:00 WIB",
    title: "Akad Nikah",
    desc: "Pembukaan oleh MC, Pembacaan Ayat Suci Al-Qur'an, Khutbah Nikah, Ijab Kabul, Doa.",
    align: "right",
    icon: <RingIcon />,
  },
  {
    time: "11:00 WIB",
    title: "Resepsi Pernikahan",
    desc: "Sambutan dari keluarga. Hiburan (musik, tarian tradisional, atau penampilan lainnya).",
    align: "left",
    icon: <GlassIcon />,
  },
  {
    time: "14:00 WIB",
    title: "Acara Puncak",
    desc: "Hiburan dan makan siang. Acara berlangsung hingga selesai.",
    align: "right",
    icon: <CakeIcon />,
  },
];

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const isLeft = item.align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-4"
    >
      {/* Left content */}
      <div className={`flex flex-col ${isLeft ? "items-end text-right" : "items-start text-left col-start-3"}`}>
        {isLeft && (
          <>
            <p className="text-sm font-bold text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>{item.title}</p>
            <div className="my-1 w-full border-t-2 border-dotted border-[#C4A882]" />
            <p className="text-[11px] leading-relaxed text-[#9B8B78]" style={{ fontFamily: "'Lora',serif" }}>{item.desc}</p>
          </>
        )}
        {!isLeft && (
          <p className="text-sm font-medium text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>{item.time}</p>
        )}
      </div>

      {/* Center icon */}
      <div className={`col-start-2 flex flex-col items-center ${index === 0 ? "pt-4" : ""}`}>
        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#E6D0BA] text-[#6B4F36] shadow">
          {item.icon}
        </div>
      </div>

      {/* Right content */}
      <div className={`flex flex-col ${!isLeft ? "items-start text-left col-start-3" : "items-end text-right col-start-1"}`}>
        {!isLeft && (
          <>
            <p className="text-sm font-bold text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>{item.title}</p>
            <div className="my-1 w-full border-t-2 border-dotted border-[#C4A882]" />
            <p className="text-[11px] leading-relaxed text-[#9B8B78]" style={{ fontFamily: "'Lora',serif" }}>{item.desc}</p>
          </>
        )}
        {isLeft && (
          <p className="text-sm font-medium text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>{item.time}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5ECD8] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-semibold tracking-[4px] text-[#B8956A]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
          RUNDOWN ACARA
        </p>
        <h2 className="mt-2 text-4xl text-[#6B4F36]" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Susunan Acara
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-md">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-full w-0.5 origin-top -translate-x-1/2 bg-gradient-to-b from-[#C4A882] via-[#B8956A] to-[#C4A882]"
        />
        <div className="flex flex-col gap-10">
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
