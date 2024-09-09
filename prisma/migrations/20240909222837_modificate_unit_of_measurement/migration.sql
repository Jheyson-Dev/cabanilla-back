/*
  Warnings:

  - You are about to drop the column `productId` on the `UnitOfMeasurement` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UnitOfMeasurement_productId_key";

-- AlterTable
ALTER TABLE "UnitOfMeasurement" DROP COLUMN "productId";
