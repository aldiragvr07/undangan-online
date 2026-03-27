"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

function PersonCard({
  name,
  degree,
  role,
  parent,
  index,
  img,
  imgPosition = "center",
}: {
  name: string;
  degree: string;
  role: string;
  parent: string;
  index: number;
  img?: string;
  imgPosition?: string;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="flex flex-col items-center gap-3"
    >
      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-[#C4A882] bg-[#E6D0BA] flex items-center justify-center shadow-md">
        {img ? (
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
            style={{ objectPosition: `center ${imgPosition}` }}
          />
        ) : (
          <svg width="36" height="36" viewBox="0 0 28 28" fill="#8B6F4E">
            <circle cx="14" cy="9" r="5.5" />
            <path d="M4 25 C4 19, 9 15, 14 15 C19 15, 24 19, 24 25Z" />
          </svg>
        )}
      </div>
      <p
        className="text-4xl text-[#6B4F36] text-center leading-tight"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        {name}
      </p>
      <p
        className="text-sm font-semibold tracking-wider text-[#8B6F4E]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {degree}
      </p>
      <p
        className="text-xs text-[#9B8B78] text-center"
        style={{ fontFamily: "'Lora', serif" }}
      >
        {role}
      </p>
      <p
        className="text-xs text-[#8B6F4E] text-center leading-relaxed"
        style={{ fontFamily: "'Lora', serif" }}
        dangerouslySetInnerHTML={{ __html: parent }}
      />
    </motion.div>
  );
}

export default function ProfileSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3E8] px-6 py-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <p
          className="text-lg italic text-[#6B4F36]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Bismillahirrahmanirrahim
        </p>
        <p
          className="mt-2 text-sm text-[#8B6F4E]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>
        <p
          className="mx-auto mt-4 max-w-xs text-xs leading-loose text-[#9B8B78]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
          menyelenggarakan pernikahan putra-putri kami:
        </p>
      </motion.div>

      {/* Profiles */}
      <div className="mx-auto flex max-w-sm flex-col items-center gap-10">
        <PersonCard
          index={0}
          img="/foto-profile-firdan.JPG"
          name="Firdan Nursalfah Toni"
          degree="S.Kom"
          role="Putra pertama dari"
          parent="Bapak Deden Komarudin &<br/>Ibu Neneng Susanti"
        />

        {/* Ampersand divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 w-48"
        >
          <div className="h-px flex-1 bg-[#C4A882]" />
          <p
            className="text-3xl text-[#B8956A]"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            &
          </p>
          <div className="h-px flex-1 bg-[#C4A882]" />
        </motion.div>

        <PersonCard
          index={2}
          img="/foto-profile-amel.JPG"
          imgPosition="65%"
          name="Amelia Firdausya"
          degree="S.Pd"
          role="Putri kedua dari"
          parent="Bapak H. Abdullah Syahid &<br/>Ibu Hj. Aisyah"
        />
      </div>
    </section>
  );
}
