/*
  Warnings:

  - You are about to drop the column `responsableID` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Voucher` table. All the data in the column will be lost.
  - Added the required column `responsableId` to the `Area` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_personId_fkey";

-- AlterTable
ALTER TABLE "Area" DROP COLUMN "responsableID",
ADD COLUMN     "responsableId" INTEGER NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "descripcion" VARCHAR(255);

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Rol" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "UsersRols" ADD COLUMN     "descripcion" VARCHAR(255);

-- AlterTable
ALTER TABLE "Voucher" DROP COLUMN "estado",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Pendiente';

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
