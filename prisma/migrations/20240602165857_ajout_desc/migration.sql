-- AlterTable
ALTER TABLE "Boat" ADD COLUMN     "AltImages" VARCHAR(1024)[] DEFAULT ARRAY['boat']::VARCHAR(1024)[],
ADD COLUMN     "description" VARCHAR(2080) NOT NULL DEFAULT 'ceci est un bateau';
