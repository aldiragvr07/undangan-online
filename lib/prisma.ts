import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prisma 7: URL di-supply lewat prisma.config.ts (untuk CLI).
// Di runtime, Next.js otomatis memuat .env.local sehingga
// process.env.DATABASE_URL tersedia dan PrismaClient bisa berjalan.
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
