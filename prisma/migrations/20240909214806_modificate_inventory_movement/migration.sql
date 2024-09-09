/*
  Warnings:

  - You are about to drop the column `storeId` on the `InventoryMovement` table. All the data in the column will be lost.
  - Added the required column `movementDate` to the `InventoryMovement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movementType` to the `InventoryMovement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `InventoryMovement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_storeId_fkey";

-- DropIndex
DROP INDEX "InventoryMovement_productId_key";

-- DropIndex
DROP INDEX "InventoryMovement_storeId_key";

-- AlterTable
ALTER TABLE "InventoryMovement" DROP COLUMN "storeId",
ADD COLUMN     "destinationStoreId" INTEGER,
ADD COLUMN     "movementDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "movementType" TEXT NOT NULL,
ADD COLUMN     "originStoreId" INTEGER,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_originStoreId_fkey" FOREIGN KEY ("originStoreId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_destinationStoreId_fkey" FOREIGN KEY ("destinationStoreId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;
