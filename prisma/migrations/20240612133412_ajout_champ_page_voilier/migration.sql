/*
  Warnings:

  - You are about to drop the column `AltImages` on the `Boat` table. All the data in the column will be lost.
  - You are about to alter the column `prix` on the `Boat` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(8,2)`.
  - You are about to alter the column `description` on the `Boat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2080)` to `VarChar(1024)`.

*/
-- AlterTable
ALTER TABLE "Boat" DROP COLUMN "AltImages",
ADD COLUMN     "caution" DECIMAL(8,2) NOT NULL DEFAULT 0,
ADD COLUMN     "fuel" SMALLINT NOT NULL DEFAULT 0,
ADD COLUMN     "prixJour" DECIMAL(8,2) NOT NULL DEFAULT 0,
ADD COLUMN     "prixWeekend" DECIMAL(8,2) NOT NULL DEFAULT 0,
ADD COLUMN     "speed" SMALLINT NOT NULL DEFAULT 0,
ALTER COLUMN "prix" SET DATA TYPE DECIMAL(8,2),
ALTER COLUMN "description" SET DEFAULT 'description',
ALTER COLUMN "description" SET DATA TYPE VARCHAR(1024);
