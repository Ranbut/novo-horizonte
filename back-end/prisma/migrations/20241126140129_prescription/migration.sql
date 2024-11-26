/*
  Warnings:

  - Added the required column `description` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medications` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestingRenewal` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" VARCHAR NOT NULL,
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "medications" JSONB NOT NULL,
ADD COLUMN     "requestingRenewal" BOOLEAN NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
