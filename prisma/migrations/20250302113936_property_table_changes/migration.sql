/*
  Warnings:

  - Added the required column `status` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('COMMERCIAL', 'INDUSTRIAL', 'RESIDENCE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SALE', 'RENT');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "type" "PropertyType" NOT NULL;
