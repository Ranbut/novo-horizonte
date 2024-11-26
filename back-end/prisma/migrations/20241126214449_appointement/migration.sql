/*
  Warnings:

  - Added the required column `appointementDate` to the `Appointement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Appointement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointement" ADD COLUMN     "appointementDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
