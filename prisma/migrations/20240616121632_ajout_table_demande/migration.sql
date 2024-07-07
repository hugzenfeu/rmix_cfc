-- CreateTable
CREATE TABLE "Demande" (
    "id" SERIAL NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "guests" SMALLINT NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "telephone" VARCHAR(255) NOT NULL,

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("id")
);
