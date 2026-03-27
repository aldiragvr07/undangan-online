"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitRSVP, RSVPState } from "@/app/actions/rsvp";

const initialState: RSVPState = { status: "idle", message: "" };

export default function RsvpSection() {
  const [state, formAction, pending] = useActionState(submitRSVP, initialState);

  return (
    <section className="relative w-full overflow-hidden bg-[#F5ECD8] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p
          className="text-xs font-semibold tracking-[4px] text-[#B8956A]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          KONFIRMASI KEHADIRAN
        </p>
        <h2
          className="mt-2 text-4xl text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          RSVP
        </h2>
        <p
          className="mx-auto mt-4 max-w-xs text-xs leading-loose text-[#9B8B78]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Mohon konfirmasikan kehadiran Anda paling lambat 1 minggu sebelum acara.
        </p>
      </motion.div>

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
            viewport={{ once: true }}
            className="mx-auto flex max-w-sm flex-col gap-4"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                NAMA LENGKAP *
              </label>
              <input
                name="name"
                required
                placeholder="Masukkan nama Anda"
                className="rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none placeholder:text-[#C4A882] focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }}
              />
            </div>

            {/* Attendance */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                KEHADIRAN *
              </label>
              <select
                name="attendance"
                required
                defaultValue=""
                className="rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }}
              >
                <option value="" disabled>Pilih...</option>
                <option value="hadir">Insya Allah Hadir</option>
                <option value="tidak-hadir">Tidak Dapat Hadir</option>
              </select>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                JUMLAH TAMU
              </label>
              <input
                name="guests"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-widest text-[#8B6F4E]" style={{ fontFamily: "'Montserrat',sans-serif" }}>
                PESAN & DOA
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tuliskan ucapan atau doa Anda..."
                className="resize-none rounded-xl border border-[#C4A882] bg-[#FAF3E8] px-4 py-3 text-sm text-[#6B4F36] outline-none placeholder:text-[#C4A882] focus:border-[#8B6F4E] transition-colors"
                style={{ fontFamily: "'Lora',serif" }}
              />
            </div>

            {state.status === "error" && (
              <p className="text-center text-xs text-red-500">{state.message}</p>
            )}

            <motion.button
              type="submit"
              disabled={pending}
              whileHover={{ scale: pending ? 1 : 1.03 }}
              whileTap={{ scale: pending ? 1 : 0.97 }}
              className="mt-2 rounded-full bg-[#6B4F36] px-8 py-3 text-sm font-semibold tracking-widest text-[#FAF3E8] shadow-md transition-opacity disabled:opacity-60"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              {pending ? "MENGIRIM..." : "KIRIM KONFIRMASI"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
