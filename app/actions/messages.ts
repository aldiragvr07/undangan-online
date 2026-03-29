"use server";

import { supabase } from "@/lib/supabase";

export interface RSVPEntry {
  id: string;
  name: string;
  attendance: string;
  message: string | null;
  createdAt: string; // kolom Prisma pakai camelCase
}

export async function getMessages(): Promise<RSVPEntry[]> {
  const { data, error } = await supabase
    .from("rsvp")
    .select("id, name, attendance, message, createdAt")
    .not("message", "is", null)
    .order("createdAt", { ascending: false })
    .limit(30);

  if (error) {
    console.error("[Messages] Supabase error:", error.message);
    return [];
  }

  return (data ?? []) as RSVPEntry[];
}
