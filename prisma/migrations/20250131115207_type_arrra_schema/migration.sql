/*
  Warnings:

  - Changed the column `type` on the `Query` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- AlterTable
-- ALTER TABLE "Query" ALTER COLUMN "type" SET DEFAULT ARRAY[]::"Inquiry"[],
-- ALTER COLUMN "type" SET DATA TYPE "Inquiry"[];


ALTER TABLE "Query" DROP COLUMN "type";
ALTER TABLE "Query" ADD COLUMN "type" "Inquiry"[] DEFAULT '{}';
