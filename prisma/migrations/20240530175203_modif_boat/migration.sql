/*
  Warnings:

  - Added the required column `Ncabine` to the `Boat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Nreviews` to the `Boat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacite` to the `Boat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prix` to the `Boat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `star` to the `Boat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boat" ADD COLUMN     "Ncabine" DECIMAL(3,0) NOT NULL,
ADD COLUMN     "Nreviews" DECIMAL(8,0) NOT NULL,
ADD COLUMN     "capacite" DECIMAL(8,0) NOT NULL,
ADD COLUMN     "prix" DECIMAL(8,2) NOT NULL,
ADD COLUMN     "star" DECIMAL(1,0) NOT NULL;
