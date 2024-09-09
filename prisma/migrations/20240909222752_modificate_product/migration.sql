/*
  Warnings:

  - A unique constraint covering the columns `[unitOfMeasurementId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unitOfMeasurementId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UnitOfMeasurement" DROP CONSTRAINT "UnitOfMeasurement_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "unitOfMeasurementId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_unitOfMeasurementId_key" ON "Product"("unitOfMeasurementId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_unitOfMeasurementId_fkey" FOREIGN KEY ("unitOfMeasurementId") REFERENCES "UnitOfMeasurement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
