"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── GANTI PATH LAGU DI SINI ────────────────────────────────────────────────
// Taruh file lagu di folder: public/
// Contoh: public/lagu.mp3 → path: "/lagu.mp3"
const MUSIC_SRC = "/song-lagu-pernikahan.mp3";
// ────────────────────────────────────────────────────────────────────────────

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Auto-hide hint after 4 detik
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // Set loop dan volume saat mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.5;
    audio.addEventListener("canplaythrough", () => setReady(true));
    return () => audio.pause();
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setShowHint(false);
      } catch {
        // autoplay blocked
      }
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" />

      {/* Floating button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2"
      >
        {/* Hint bubble */}
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="rounded-full bg-[#6B4F36]/90 px-3 py-1.5 text-[10px] tracking-wide text-white shadow-lg backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              🎵 Putar musik
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggle}
          disabled={!ready}
          aria-label={playing ? "Pause musik" : "Putar musik"}
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#6B4F36] shadow-xl disabled:opacity-50"
          style={{ border: "2px solid #C4A882" }}
        >
          {/* Ripple animation when playing */}
          {playing && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full bg-[#C4A882]"
                animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full bg-[#C4A882]"
                animate={{ scale: [1, 1.9], opacity: [0.25, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
              />
            </>
          )}

          {/* Icon */}
          <AnimatePresence mode="wait">
            {playing ? (
              <motion.span
                key="pause"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {/* Pause icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FAF3E8">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              </motion.span>
            ) : (
              <motion.span
                key="play"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                {/* Musical note icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FAF3E8">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
}
