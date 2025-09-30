-- CreateEnum
CREATE TYPE "public"."PetStatus" AS ENUM ('available', 'adopted');

-- CreateTable
CREATE TABLE "public"."Adopter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,

    CONSTRAINT "Adopter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "age" INTEGER,
    "description" TEXT,
    "status" "public"."PetStatus" NOT NULL DEFAULT 'available',

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Adoption" (
    "id" SERIAL NOT NULL,
    "petId" INTEGER NOT NULL,
    "adopterId" INTEGER NOT NULL,
    "adoptionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Adoption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adopter_email_key" ON "public"."Adopter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Adoption_petId_key" ON "public"."Adoption"("petId");

-- AddForeignKey
ALTER TABLE "public"."Adoption" ADD CONSTRAINT "Adoption_petId_fkey" FOREIGN KEY ("petId") REFERENCES "public"."Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Adoption" ADD CONSTRAINT "Adoption_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "public"."Adopter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
