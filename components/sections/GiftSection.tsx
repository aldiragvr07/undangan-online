"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloralOrnament from "@/components/ui/FloralOrnament";
import FloatingPetals from "@/components/ui/FloatingPetals";

interface BankAccount {
  bank: string;
  name: string;
  number: string;
  logo: React.ReactNode;
}

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AccountCard({ account }: { account: BankAccount }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(account.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex w-full max-w-sm flex-col gap-4 rounded-2xl bg-[#FAF3E8] p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-[#6B4F36]">
          <span
            className="text-lg font-bold text-[#FAF3E8]"
            style={{ fontFamily: "'Montserrat',sans-serif" }}
          >
            {account.bank}
          </span>
        </div>
        <div>
          <p
            className="text-xs text-[#9B8B78]"
            style={{ fontFamily: "'Montserrat',sans-serif" }}
          >
            A/N
          </p>
          <p
            className="text-sm font-semibold text-[#6B4F36]"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            {account.name}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-[#F5ECD8] px-4 py-3">
        <p
          className="text-base font-semibold tracking-widest text-[#6B4F36]"
          style={{ fontFamily: "'Montserrat',sans-serif" }}
        >
          {account.number}
        </p>
        <motion.button
          onClick={handleCopy}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1 rounded-lg bg-[#C4A882] px-3 py-1.5 text-white transition-colors hover:bg-[#8B6F4E]"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-1 text-xs"
              >
                <CheckIcon />
                Tersalin
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-1 text-xs"
              >
                <CopyIcon />
                Salin
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}

const accounts: BankAccount[] = [
  {
    bank: "BCA",
    name: "Firdan Nursalfah Toni",
    number: "1234567890",
    logo: null,
  },
  {
    bank: "BNI",
    name: "Amelia Firdausya",
    number: "0987654321",
    logo: null,
  },
];

export default function GiftSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3E8] px-6 py-20">
      <FloralOrnament position="top-right" size={120} opacity={0.3} />
      <FloralOrnament position="bottom-left" size={120} opacity={0.3} />
      <FloatingPetals count={8} />
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
          AMPLOP DIGITAL
        </p>
        <h2
          className="mt-2 text-4xl text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Hadiah Pernikahan
        </h2>
        <p
          className="mx-auto mt-4 max-w-xs text-xs leading-loose text-[#9B8B78]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Jika Bapak/Ibu/Saudara/i ingin memberikan hadiah, dengan rendah hati
          kami menerima melalui rekening berikut:
        </p>
      </motion.div>

      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        {accounts.map((acc, i) => (
          <AccountCard key={i} account={acc} />
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-16 text-center"
      >
        <p
          className="text-2xl italic text-[#8B6F4E]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3 w-40">
          <div className="h-px flex-1 bg-[#C4A882]" />
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#C4A882">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div className="h-px flex-1 bg-[#C4A882]" />
        </div>
        <p
          className="mt-4 text-4xl text-[#6B4F36]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Firdan Nursalfah Toni &amp; Amelia Firdausya
        </p>
        <p
          className="mt-2 text-xs text-[#9B8B78]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          31 Mei 2026
        </p>
      </motion.div>
    </section>
  );
}
