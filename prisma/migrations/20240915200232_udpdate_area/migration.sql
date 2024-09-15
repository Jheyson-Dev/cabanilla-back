-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_areaId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "areaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;
