-- CreateTable
CREATE TABLE "rsvp" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "attendance" TEXT NOT NULL,
    "guests" INTEGER NOT NULL DEFAULT 1,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rsvp_pkey" PRIMARY KEY ("id")
);
