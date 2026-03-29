"use server";

import { supabase } from "@/lib/supabase";
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

  // Generate id sendiri karena kolom id bertipe text tanpa auto-generate di DB
  const id = crypto.randomUUID();

  const { error } = await supabase.from("rsvp").insert([{
    id,
    name,
    attendance,
    guests: attendance === "hadir" ? guests : 0,
    message,
  }]);

  if (error) {
    console.error("[RSVP] Supabase error:", error.code, error.message);
    return { status: "error", message: `Kesalahan: ${error.message}` };
  }

  revalidatePath("/");
  return {
    status: "success",
    message: `Terima kasih, ${name}! Konfirmasi Anda telah kami terima.`,
  };
}
