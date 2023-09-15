/*
  Warnings:

  - You are about to drop the column `cabang_id` on the `tb_dealer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_dealer` DROP FOREIGN KEY `tb_dealer_cabang_id_fkey`;

-- AlterTable
ALTER TABLE `tb_dealer` DROP COLUMN `cabang_id`;
