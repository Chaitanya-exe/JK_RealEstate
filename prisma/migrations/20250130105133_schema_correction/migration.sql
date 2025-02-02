/*
  Warnings:

  - You are about to drop the column `tyep` on the `Query` table. All the data in the column will be lost.
  - Added the required column `type` to the `Query` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Query" RENAME COLUMN "tyep" TO "type";