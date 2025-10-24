-- CreateEnum
CREATE TYPE "PetStatus" AS ENUM ('available', 'adopted');

-- CreateTable
CREATE TABLE "Adopter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,

    CONSTRAINT "Adopter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "age" INTEGER,
    "description" TEXT,
    "status" "PetStatus" NOT NULL DEFAULT 'available',

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adoption" (
    "id" SERIAL NOT NULL,
    "petId" INTEGER NOT NULL,
    "adopterId" INTEGER NOT NULL,
    "adoptionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Adoption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adopter_email_key" ON "Adopter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Adoption_petId_key" ON "Adoption"("petId");

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "Adopter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
