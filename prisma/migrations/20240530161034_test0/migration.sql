-- CreateTable
CREATE TABLE "Boat" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "year" SMALLINT NOT NULL,
    "boatType" VARCHAR(255) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "length" DECIMAL(8,4) NOT NULL,
    "thumbnail" VARCHAR(1024) NOT NULL,
    "images" VARCHAR(1024)[],

    CONSTRAINT "Boat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Boat_slug_key" ON "Boat"("slug");
