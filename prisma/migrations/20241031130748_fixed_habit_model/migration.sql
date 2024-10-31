/*
  Warnings:

  - You are about to drop the `Habbit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Habbit";

-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);
