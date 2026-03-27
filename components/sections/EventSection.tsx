"use client";

import { motion } from "framer-motion";

function MapPinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  index: number;
  icon: React.ReactNode;
}

function EventCard({
  title,
  date,
  time,
  venue,
  address,
  mapUrl,
  index,
  icon,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl bg-[#F5ECD8] p-7 shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6D0BA] text-[#6B4F36]">
        {icon}
      </div>
      <h3
        className="text-center text-lg font-bold tracking-widest text-[#6B4F36]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <div className="h-px w-16 bg-[#C4A882]" />
      <p
        className="text-center text-sm leading-relaxed text-[#8B6F4E]"
        style={{ fontFamily: "'Lora', serif" }}
      >
        {date}
        <br />
        {time}
      </p>
      <p
        className="text-center text-xs leading-relaxed text-[#9B8B78]"
        style={{ fontFamily: "'Lora', serif" }}
      >
        {venue}
        <br />
        {address}
      </p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 flex items-center gap-2 rounded-full border border-[#C4A882] px-5 py-2 text-[#8B6F4E] transition-colors hover:bg-[#C4A882] hover:text-white"
      >
        <MapPinIcon />
        <span
          className="text-xs font-semibold tracking-widest"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          LIHAT LOKASI
        </span>
      </motion.a>
    </motion.div>
  );
}

const RingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="8" cy="12" r="6" />
    <circle cx="16" cy="12" r="6" />
  </svg>
);

const ChampagneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 22h8M12 11v11M3 3l9 8 9-8H3z" />
  </svg>
);

export default function EventSection() {
  return (
    <section className="relative w-full bg-[#FAF3E8] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <p
          className="text-xs font-semibold tracking-[4px] text-[#B8956A]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          SIMPAN TANGGALNYA
        </p>
        <h2
          className="mt-2 text-4xl text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Tanggal Pernikahan
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3 w-48">
          <div className="h-px flex-1 bg-[#C4A882]" />
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#C4A882">
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <div className="h-px flex-1 bg-[#C4A882]" />
        </div>
      </motion.div>

      <div className="mx-auto flex max-w-md flex-col items-center gap-6">
        <EventCard
          index={0}
          title="AKAD NIKAH"
          date="Sabtu, 30 Mei 2026"
          time="Pukul 10:00 – 12:00 WIB"
          venue="Masjid Al-Ikhlas"
          address="Jl. Merdeka No. 123, Jakarta Selatan"
          mapUrl="https://maps.google.com"
          icon={<RingIcon />}
        />
        <EventCard
          index={1}
          title="RESEPSI"
          date="Minggu, 31 Mei 2026"
          time="Pukul 11:00 – 14:00 WIB"
          venue="Gedung Serbaguna Cendrawasih"
          address="Jl. Mawar No. 45, Jakarta Selatan"
          mapUrl="https://maps.google.com"
          icon={<ChampagneIcon />}
        />
      </div>
    </section>
  );
}
