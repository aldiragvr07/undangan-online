"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  photoPosition?: string;
  index: number;
}

function EventCard({
  title,
  date,
  dayName,
  month,
  year,
  time,
  venue,
  address,
  mapUrl,
  photoSrc,
  photoPosition = "center center",
  index,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative w-full overflow-hidden rounded-[30px] border border-[#E7D6BF] bg-[#F6EEDC] shadow-[0_16px_38px_rgba(93,75,53,0.16)]"
    >
      <div className="relative h-[560px] w-full overflow-hidden rounded-t-[30px] bg-[#E9DDC7]">
        <Image
          src={photoSrc}
          alt={title}
          fill
          quality={72}
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover"
          style={{ objectPosition: photoPosition }}
        />
      </div>

      <div className="flex items-stretch">
        <div className="flex w-[48px] shrink-0 items-center justify-center bg-[#9C835E]">
          <p
            className="whitespace-nowrap text-[11px] font-medium tracking-[0.32em] text-white/95"
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

        <div className="flex-1 px-5 pb-5 pt-6 sm:px-6">
          <div className="mb-5 flex items-start gap-4">
            <p
              className="leading-none text-[3.5rem] font-light text-[#5A381C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {date}
            </p>
            <div
              className="flex flex-col pt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p className="text-[0.95rem] font-semibold leading-tight text-[#BF9555]">
                {dayName}
              </p>
              <p className="text-[0.95rem] leading-tight text-[#B8A48A]">
                {month}
              </p>
              <p className="text-[0.95rem] leading-tight text-[#B8A48A]">
                {year}
              </p>
            </div>
          </div>
          <div className="mb-5 h-px bg-[#C7AF86]" />

          <div className="mb-5 flex items-center gap-2.5 text-[#6C5640]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A48A63"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <p
              className="text-[1.02rem] text-[#7A6144]"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {time}
            </p>
          </div>

          <div className="mb-5">
            <p
              className="mb-1.5 text-[0.8rem] font-bold tracking-[0.12em] text-[#2F1E12]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              LOKASI ACARA
            </p>
            <p
              className="mb-1 text-[1.03rem] font-semibold leading-snug text-[#422A18]"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {venue}
            </p>
            <p
              className="max-w-[250px] text-[0.97rem] leading-relaxed text-[#9F896D]"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {address}
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center justify-center rounded-[4px] border border-[#8E714C] px-5 py-2 text-[0.82rem] font-semibold tracking-[0.18em] text-[#4A311F] transition-colors hover:bg-[#8E714C] hover:text-white"
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
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="bg-[#8B7355] px-7 py-12"
      >
        <div className="flex items-start gap-4">
          <h2
            className="text-3xl leading-snug text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            Acara
            <br />
            Pernikahan
          </h2>
          <div className="mt-4 flex-1 border-t border-white/30" />
        </div>
        <p
          className="mt-4 text-sm leading-relaxed text-white/70"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Dengan segala kerendahan hati kami bermaksud ingin mengundang
          Bapak/Ibu/Saudara/i sekalian guna hadir didalam acara pernikahan kami
          yang akan diselenggarakan pada:
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6 px-5 py-8">
        <EventCard
          index={0}
          title="Resepsi"
          date="31"
          dayName="Minggu"
          month="Mei"
          year="2026"
          time="10.00 s/d. selesai"
          venue="Halaman Madrasah Nurul Hidayah"
          address="
Jl. Yasaadi RT 003/RW 001, Ds.Sukamanah, Kec. Rancaekek, Bandung."
          mapUrl="https://www.google.com/maps/search/?api=1&query=-6.992191304664199,107.74682459457573"
          photoSrc="/fotoedit/IMG_5022.JPG"
          photoPosition="center 32%"
        />
      </div>
    </section>
  );
}
