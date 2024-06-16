-- AlterTable
ALTER TABLE "Boat" ADD COLUMN     "Ncabines" SMALLINT NOT NULL DEFAULT 0,
ADD COLUMN     "caracteristique" VARCHAR(1024) NOT NULL DEFAULT 'caractéristique',
ADD COLUMN     "confort" VARCHAR(1024) NOT NULL DEFAULT 'confort',
ADD COLUMN     "electronique" VARCHAR(1024) NOT NULL DEFAULT 'electronique',
ADD COLUMN     "equipement" VARCHAR(1024) NOT NULL DEFAULT 'equipement';
