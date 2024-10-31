-- CreateTable
CREATE TABLE "Habbit" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Habbit_pkey" PRIMARY KEY ("id")
);
