/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `UnitOfMeasurement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `UnitOfMeasurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UnitOfMeasurement" ADD COLUMN     "productId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UnitOfMeasurement_productId_key" ON "UnitOfMeasurement"("productId");

-- AddForeignKey
ALTER TABLE "UnitOfMeasurement" ADD CONSTRAINT "UnitOfMeasurement_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
