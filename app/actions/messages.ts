"use server";

import { prisma } from "@/lib/prisma";

export interface RSVPEntry {
  id: string;
  name: string;
  attendance: string;
  message: string | null;
  createdAt: string; // kolom Prisma pakai camelCase
}

export async function getMessages(): Promise<RSVPEntry[]> {
  try {
    const data = await prisma.rsvp.findMany({
      where: {
        message: { not: null },
      },
      select: {
        id: true,
        name: true,
        attendance: true,
        message: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      take: 30,
    });

    return data.map((entry) => ({
      ...entry,
      createdAt: entry.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error("[Messages] Prisma error:", error);
    return [];
  }
}
