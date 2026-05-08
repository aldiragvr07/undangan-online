"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRIDE_PROFILE = {
  src: "/fotoedit/IMG_6077.JPG",
  alt: "Amelia Firdausya",
  objectPosition: "100% 85%",
};

const GROOM_PROFILE = {
  src: "/foto-profile-firdan.JPG",
  alt: "Firdan Nursalfah Toni",
  objectPosition: "70% 38%",
};

interface PersonBlockProps {
  label: string;
  name: string;
  degree: string;
  role: string;
  parent: string;
  photo: { src: string; alt: string; objectPosition: string };
  index: number;
  compactName?: boolean;
}

function PersonBlock({
  label,
  name,
  degree,
  role,
  parent,
  photo,
  index,
  compactName = false,
}: PersonBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, delay: index * 0.12 }}
      className="w-full bg-[#EEEBE6] px-6 pb-10 pt-9"
    >
      <div className="mx-auto max-w-[360px] text-center">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#8B7355]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {label}
        </p>

        <h2
          className={`mt-5 text-[#2C2017] ${compactName ? "text-[2rem] leading-none" : "text-[2.35rem] leading-tight"}`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
          }}
        >
          <span className={compactName ? "whitespace-nowrap" : undefined}>
            {name}
          </span>
          <span
            className={`ml-2 text-[#8B7355] ${compactName ? "text-[1.35rem]" : "text-[1.7rem]"}`}
          >
            {degree}
          </span>
        </h2>

        <div className="mx-auto mt-4 h-0.5 w-14 bg-[#C4A882]" />

        <p
          className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#6B5B4E]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {role}
        </p>
        <p
          className="mt-2 text-sm leading-relaxed text-[#6B5B4E]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {parent}
        </p>

        <div className="relative mt-7">
          <div className="absolute inset-x-7 -top-3 h-full rounded-[30px] bg-[#DCC5A5]/55 blur-2xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-[#DED0BD] bg-[#F7F0E6] p-3 shadow-[0_22px_60px_rgba(107,91,78,0.14)]">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={960}
              height={1200}
              quality={72}
              sizes="(max-width: 480px) calc(100vw - 72px), 360px"
              className="aspect-[4/5] h-auto w-full rounded-[24px] object-cover object-top"
              style={{ objectPosition: photo.objectPosition }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProfileSection() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
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
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
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

      <PersonBlock
        index={0}
        label="Mempelai Wanita"
        name="Amelia Firdausya"
        degree="S.H"
        role="Putri Bungsu dari"
        parent="Bpk. Wana Ridwan (alm) / Bpk. Ujang Wawan & Ibu Aas Kurniawati"
        photo={BRIDE_PROFILE}
      />

      <div className="h-2 bg-[#FAF3E8]" />

      <PersonBlock
        index={1}
        label="Mempelai Pria"
        name="Firdan Nursalfah Toni"
        degree="S.Tr.Kom"
        role="Putra pertama dari"
        parent="Bpk. Deden Komarudin & Ibu Neneng Susanti"
        photo={GROOM_PROFILE}
        compactName
      />
    </section>
  );
}
