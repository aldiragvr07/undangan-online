"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface RSVPState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitRSVP(
  prevState: RSVPState,
  formData: FormData
): Promise<RSVPState> {
  const name       = (formData.get("name") as string)?.trim();
  const attendance = formData.get("attendance") as string;
  const guests     = parseInt(formData.get("guests") as string) || 1;
  const message    = (formData.get("message") as string)?.trim() || null;

  if (!name || !attendance) {
    return { status: "error", message: "Nama dan konfirmasi kehadiran wajib diisi." };
  }

  try {
    await prisma.rsvp.create({
      data: {
        name,
        attendance,
        guests: attendance === "hadir" ? guests : 0,
        message,
      },
    });

    revalidatePath("/");
    return {
      status: "success",
      message: `Terima kasih, ${name}! Konfirmasi Anda telah kami terima.`,
    };
  } catch (error) {
    console.error("[RSVP] Prisma error:", error);
    return { status: "error", message: "Terjadi kesalahan saat menyimpan data." };
  }
}
