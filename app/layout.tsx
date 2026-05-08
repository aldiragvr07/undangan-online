import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Cormorant_Garamond, Lora, Montserrat } from "next/font/google";
import MusicPlayer from "@/components/ui/MusicPlayer";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan | Firdan & Amelia",
  description: "Dengan penuh kebahagiaan kami mengundang Anda untuk hadir di pernikahan kami pada 30 & 31 Mei 2026.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Undangan Pernikahan Firdan & Amelia",
    description: "31 Mei 2026 · Bandung",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`h-full ${greatVibes.variable} ${playfair.variable} ${cormorant.variable} ${lora.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full antialiased bg-[#FAF3E8]" suppressHydrationWarning>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
