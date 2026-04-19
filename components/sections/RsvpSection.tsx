"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitRSVP, RSVPState } from "@/app/actions/rsvp";
import { getMessages, RSVPEntry } from "@/app/actions/messages";

const initialState: RSVPState = { status: "idle", message: "" };

// ─── Kartu Ucapan ────────────────────────────────────────────────────────────
function MessageCard({ entry, index }: { entry: RSVPEntry; index: number }) {
  const isHadir = entry.attendance === "hadir";
  const date = new Date(entry.createdAt);
  const dateStr = date.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-2xl bg-[#FAF3E8] p-4 shadow-sm"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        {/* Avatar + nama */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8B7355] text-sm font-semibold text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {entry.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>
              {entry.name}
            </p>
            <p className="text-[10px] text-[#9B8B78]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {dateStr}
            </p>
          </div>
        </div>
        {/* Badge hadir/tidak */}
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${
            isHadir ? "bg-[#C4A882]/30 text-[#6B4F36]" : "bg-gray-100 text-gray-500"
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {isHadir ? "✓ Hadir" : "✗ Tidak Hadir"}
        </span>
      </div>

      {entry.message && (
        <p className="ml-10 text-sm italic leading-relaxed text-[#7A6555]" style={{ fontFamily: "'Lora', serif" }}>
          &ldquo;{entry.message}&rdquo;
        </p>
      )}
    </motion.div>
  );
}

// ─── Daftar Ucapan ───────────────────────────────────────────────────────────
function MessageList({ refreshTrigger }: { refreshTrigger: number }) {
  const [entries, setEntries] = useState<RSVPEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setLoading(true);
    startTransition(async () => {
      const data = await getMessages();
      setEntries(data);
      setLoading(false);
    });
  }, [refreshTrigger]);

  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-6 w-6 rounded-full border-2 border-[#C4A882] border-t-transparent"
        />
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-[#9B8B78]" style={{ fontFamily: "'Lora', serif" }}>
        Belum ada ucapan. Jadilah yang pertama! 🌸
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {entries.map((e, i) => (
        <MessageCard key={e.id} entry={e} index={i} />
      ))}
    </div>
  );
}

// ─── Section Utama ───────────────────────────────────────────────────────────
export default function RsvpSection() {
  const [state, formAction, pending] = useActionState(submitRSVP, initialState);
  const [refreshCount, setRefreshCount] = useState(0);

  // Refresh pesan setelah submit berhasil
  useEffect(() => {
    if (state.status === "success") {
      setRefreshCount((c) => c + 1);
    }
  }, [state.status]);

  return (
    <section className="relative w-full overflow-hidden bg-[#F5ECD8] px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-semibold tracking-[4px] text-[#B8956A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          KONFIRMASI KEHADIRAN
        </p>
        <h2 className="mt-2 text-4xl text-[#6B4F36]" style={{ fontFamily: "'Great Vibes', cursive" }}>
          RSVP
        </h2>
        <p className="mx-auto mt-4 max-w-xs text-xs leading-loose text-[#9B8B78]" style={{ fontFamily: "'Lora', serif" }}>
          Mohon konfirmasikan kehadiran Anda paling lambat 1 minggu sebelum acara.
        </p>
      </motion.div>

      {/* Form */}
      <AnimatePresence mode="wait">
        {state.status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto max-w-sm rounded-2xl bg-[#6B4F36] px-8 py-10 text-center"
          >
            <div className="mb-4 flex justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <p className="text-lg text-[#FAF3E8]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {state.message}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            action={formAction}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mx-auto flex max-w-sm flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                NAMA LENGKAP *
              </label>
              <input name="name" required placeholder="Masukkan nama Anda"
                className="rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none placeholder:text-[#C4A882] focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                KEHADIRAN *
              </label>
              <select name="attendance" required defaultValue=""
                className="rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }}>
                <option value="" disabled>Pilih...</option>
                <option value="hadir">Insya Allah Hadir</option>
                <option value="tidak-hadir">Tidak Dapat Hadir</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                JUMLAH TAMU
              </label>
              <input name="guests" type="number" min={1} max={10} defaultValue={1}
                className="rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                PESAN & DOA
              </label>
              <textarea name="message" rows={3} placeholder="Tuliskan ucapan atau doa Anda..."
                className="resize-none rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none placeholder:text-[#C4A882] focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }} />
            </div>

            {state.status === "error" && (
              <p className="text-center text-xs text-red-500">{state.message}</p>
            )}

            <motion.button type="submit" disabled={pending}
              whileHover={{ scale: pending ? 1 : 1.03 }} whileTap={{ scale: pending ? 1 : 0.97 }}
              className="mt-2 rounded-full bg-[#6B4F36] px-8 py-3 text-sm font-semibold tracking-widest text-[#FAF3E8] shadow-md transition-opacity disabled:opacity-60"
              style={{ fontFamily: "'Montserrat',sans-serif" }}>
              {pending ? "MENGIRIM..." : "KIRIM KONFIRMASI"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* ─── Riwayat Ucapan ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-12 max-w-sm"
      >
        <div className="mb-5 flex items-center gap-3">
          <h3 className="whitespace-nowrap text-2xl text-[#6B4F36]" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            Ucapan & Doa
          </h3>
          <div className="flex-1 border-t border-[#C4A882]" />
        </div>
        <MessageList refreshTrigger={refreshCount} />
      </motion.div>
    </section>
  );
}
