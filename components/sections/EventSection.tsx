"use client";

import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  dayName: string;
  month: string;
  year: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  photoSrc: string;
  index: number;
}

function EventCard({
  title, date, dayName, month, year,
  time, venue, address, mapUrl, photoSrc, index,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative w-full overflow-hidden rounded-3xl bg-[#F5ECD8] shadow-md"
    >
      {/* Top photo */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={photoSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content block */}
      <div className="flex items-stretch">
        {/* Left: vertical event name */}
        <div className="flex w-12 shrink-0 items-center justify-center bg-[#8B7355]">
          <p
            className="whitespace-nowrap text-[11px] font-medium tracking-[0.3em] text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "15px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            {title}
          </p>
        </div>

        {/* Right: details */}
        <div className="flex-1 px-5 py-5">
          {/* Date block */}
          <div className="mb-4 flex items-start gap-4">
            <p
              className="text-5xl font-light text-[#3D2B1F] leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {date}
            </p>
            <div className="flex flex-col pt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <p className="text-xs font-semibold text-[#8B7355]">{dayName}</p>
              <p className="text-xs text-[#9B8B78]">{month}</p>
              <p className="text-xs text-[#9B8B78]">{year}</p>
            </div>
          </div>
          <div className="mb-4 h-px bg-[#C4A882]" />

          {/* Time */}
          <div className="mb-4 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p className="text-sm text-[#6B5B4E]" style={{ fontFamily: "'Lora', serif" }}>
              {time}
            </p>
          </div>

          {/* Venue */}
          <div className="mb-4">
            <p className="mb-1 text-xs font-bold tracking-widest text-[#3D2B1F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              LOKASI ACARA
            </p>
            <p className="mb-0.5 text-sm font-semibold text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>
              {venue}
            </p>
            <p className="text-xs leading-relaxed text-[#9B8B78]" style={{ fontFamily: "'Lora', serif" }}>
              {address}
            </p>
          </div>

          {/* Maps button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border border-[#6B5B4E] px-5 py-2 text-xs font-semibold tracking-widest text-[#3D2B1F] transition-colors hover:bg-[#6B5B4E] hover:text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            GOOGLE MAPS
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventSection() {
  return (
    <section className="w-full bg-[#FAF3E8]">
      {/* Section header — matching reference style */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#8B7355] px-7 py-12"
      >
        <div className="flex items-start gap-4">
          <h2
            className="text-3xl leading-snug text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Acara<br />Pernikahan
          </h2>
          <div className="mt-4 flex-1 border-t border-white/30" />
        </div>
        <p
          className="mt-4 text-sm leading-relaxed text-white/70"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Dengan segala kerendahan hati kami bermaksud ingin mengundang Bapak/Ibu/Saudara/i sekalian guna hadir
          didalam acara pernikahan kami yang akan diselenggarakan pada:
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6 px-5 py-8">
        <EventCard
          index={0}
          title="Akad Nikah"
          date="30"
          dayName="Sabtu"
          month="Mei"
          year="2026"
          time="09.00 – 10.00 WIB"
          venue="Kediaman Mempelai Wanita"
          address="Jl. Contoh No. 1, Jakarta Selatan"
          mapUrl="https://maps.google.com"
          photoSrc="/foto-cover.jpg"
        />
        <EventCard
          index={1}
          title="Resepsi"
          date="31"
          dayName="Minggu"
          month="Mei"
          year="2026"
          time="11.00 – 14.00 WIB"
          venue="Gedung Serbaguna Cendrawasih"
          address="Jl. Mawar No. 45, Jakarta Selatan"
          mapUrl="https://maps.google.com"
          photoSrc="/foto-cover.jpg"
        />
      </div>
    </section>
  );
}
