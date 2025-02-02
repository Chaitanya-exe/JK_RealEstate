-- CreateEnum
CREATE TYPE "Inquiry" AS ENUM ('CONSULTATION', 'DESIGN', 'MAINTANENCE', 'INSTALLATION', 'OTHER');

-- CreateTable
CREATE TABLE "Query" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "inquiry" TEXT NOT NULL,
    "tyep" "Inquiry" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Query_id_key" ON "Query"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Query_number_key" ON "Query"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Query_email_key" ON "Query"("email");
