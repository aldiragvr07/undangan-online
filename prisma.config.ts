import { defineConfig } from "prisma/config";
import path from "path";
import { config } from "dotenv";

// Prisma CLI tidak otomatis baca .env.local, jadi kita load manual
config({ path: path.resolve(process.cwd(), ".env.local") });

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
