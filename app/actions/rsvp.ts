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
  const name = formData.get("name") as string;
  const attendance = formData.get("attendance") as string;
  const guests = parseInt(formData.get("guests") as string) || 1;
  const message = formData.get("message") as string;

  if (!name || !attendance) {
    return { status: "error", message: "Nama dan konfirmasi kehadiran wajib diisi." };
  }

  try {
    await prisma.rSVP.create({
      data: {
        name: name.trim(),
        attendance,
        guests: attendance === "hadir" ? guests : 0,
        message: message?.trim() || null,
      },
    });
    revalidatePath("/");
    return { status: "success", message: `Terima kasih, ${name}! Konfirmasi Anda telah kami terima.` };
  } catch {
    return { status: "error", message: "Terjadi kesalahan. Silakan coba lagi." };
  }
}
