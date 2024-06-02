/*
  Warnings:

  - You are about to alter the column `prix` on the `Boat` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Boat" ALTER COLUMN "prix" SET DATA TYPE INTEGER;
