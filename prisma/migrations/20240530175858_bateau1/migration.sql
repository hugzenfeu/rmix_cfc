/*
  Warnings:

  - You are about to alter the column `Ncabine` on the `Boat` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,0)` to `SmallInt`.
  - You are about to alter the column `Nreviews` on the `Boat` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,0)` to `SmallInt`.
  - You are about to alter the column `capacite` on the `Boat` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,0)` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE "Boat" ALTER COLUMN "Ncabine" SET DATA TYPE SMALLINT,
ALTER COLUMN "Nreviews" SET DATA TYPE SMALLINT,
ALTER COLUMN "capacite" SET DATA TYPE SMALLINT,
ALTER COLUMN "star" SET DATA TYPE SMALLINT;
