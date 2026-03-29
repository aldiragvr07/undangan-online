"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to");

  // Setiap kali gate muncul (refresh/pertama buka), pastikan scroll ke atas
  useEffect(() => {
    if (!opened) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    // Scroll ke atas konten setelah gate hilang
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 850); // setelah animasi exit selesai
  };

  return (
    <>
      {/* Main invitation content — always mounted tapi tersembunyi di belakang gate */}
      <div
        className={opened ? "pointer-events-auto" : "pointer-events-none select-none"}
        aria-hidden={!opened}
      >
        {children}
      </div>

      {/* Opening gate overlay */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(160deg, #2d1b0e 0%, #5c3317 40%, #3b1f0b 100%)" }}
          >
            {/* Ornament top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 left-0 right-0 flex justify-center pt-10 opacity-30"
            >
              <svg width="320" height="60" viewBox="0 0 320 60" fill="none">
                <path d="M0 50 Q80 10 160 30 Q240 50 320 10" stroke="#C4A882" strokeWidth="1" fill="none" />
                <path d="M0 40 Q80 0 160 20 Q240 40 320 0" stroke="#C4A882" strokeWidth="0.5" fill="none" />
                <circle cx="160" cy="25" r="4" fill="#C4A882" />
                <circle cx="0" cy="45" r="2" fill="#C4A882" />
                <circle cx="320" cy="5" r="2" fill="#C4A882" />
              </svg>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col items-center gap-6 px-8 text-center">
              {/* Bismillah */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-sm italic"
                style={{ color: "#C4A882", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Bismillahirrahmanirrahim
              </motion.p>

              {/* Undangan Pernikahan label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#9B7B55", fontFamily: "'Montserrat', sans-serif" }}
              >
                Undangan Pernikahan
              </motion.p>

              {/* Nama tamu — hanya muncul jika ada ?to= */}
              {guestName && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62, duration: 0.7 }}
                  className="flex flex-col items-center gap-1"
                >
                  <p
                    className="text-xs tracking-widest"
                    style={{ color: "#9B7B55", fontFamily: "'Lora', serif" }}
                  >
                    Kepada Yth.
                  </p>
                  <p
                    className="text-2xl"
                    style={{ color: "#F5E6D0", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    {guestName}
                  </p>
                </motion.div>
              )}

              {/* Divider ornament */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="flex items-center gap-3 w-56"
              >
                <div className="h-px flex-1" style={{ backgroundColor: "#C4A882" }} />
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5Z" fill="#C4A882" />
                </svg>
                <div className="h-px flex-1" style={{ backgroundColor: "#C4A882" }} />
              </motion.div>

              {/* Nama mempelai */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.8 }}
                className="flex flex-col items-center gap-1"
              >
                <p
                  className="text-5xl leading-tight"
                  style={{ color: "#F5E6D0", fontFamily: "'Great Vibes', cursive" }}
                >
                  Firdan
                </p>
                <p
                  className="text-2xl"
                  style={{ color: "#C4A882", fontFamily: "'Great Vibes', cursive" }}
                >
                  &amp;
                </p>
                <p
                  className="text-5xl leading-tight"
                  style={{ color: "#F5E6D0", fontFamily: "'Great Vibes', cursive" }}
                >
                  Amelia
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-center gap-3 w-56"
              >
                <div className="h-px flex-1" style={{ backgroundColor: "#C4A882" }} />
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5Z" fill="#C4A882" />
                </svg>
                <div className="h-px flex-1" style={{ backgroundColor: "#C4A882" }} />
              </motion.div>

              {/* Tanggal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.7 }}
                className="text-sm tracking-widest"
                style={{ color: "#9B7B55", fontFamily: "'Lora', serif" }}
              >
                Sabtu, 21 Juni 2025
              </motion.p>

              {/* Tombol buka */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOpen()}
                className="mt-4 flex items-center gap-3 rounded-full border px-8 py-3 text-sm tracking-widest uppercase transition-colors"
                style={{
                  borderColor: "#C4A882",
                  color: "#F5E6D0",
                  fontFamily: "'Montserrat', sans-serif",
                  background: "rgba(196, 168, 130, 0.12)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Buka Undangan
              </motion.button>
            </div>

            {/* Ornament bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 flex justify-center pb-10 opacity-30"
            >
              <svg width="320" height="60" viewBox="0 0 320 60" fill="none">
                <path d="M0 10 Q80 50 160 30 Q240 10 320 50" stroke="#C4A882" strokeWidth="1" fill="none" />
                <path d="M0 20 Q80 60 160 40 Q240 20 320 60" stroke="#C4A882" strokeWidth="0.5" fill="none" />
                <circle cx="160" cy="35" r="4" fill="#C4A882" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
