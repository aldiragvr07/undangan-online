-- ============================================================
-- JALANKAN SEMUA INI DI: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Hapus tabel sisa Prisma (tidak dipakai lagi)
DROP TABLE IF EXISTS _prisma_migrations;

-- 2. Buat tabel rsvp (kalau belum ada)
CREATE TABLE IF NOT EXISTS rsvp (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  attendance  text NOT NULL,
  guests      integer DEFAULT 1,
  message     text,
  created_at  timestamptz DEFAULT now()
);

-- 3. Aktifkan Row Level Security
ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

-- 4. Izinkan siapa saja (tamu) bisa mengisi form RSVP
CREATE POLICY "Allow public insert"
  ON rsvp FOR INSERT TO anon
  WITH CHECK (true);

-- 5. Izinkan siapa saja membaca ucapan
CREATE POLICY "Allow public select"
  ON rsvp FOR SELECT TO anon
  USING (true);
