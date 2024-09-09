/*
  Warnings:

  - Added the required column `table` to the `RolsPermissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RolsPermissions" ADD COLUMN     "table" VARCHAR(255) NOT NULL;
