/*
  Warnings:

  - You are about to drop the column `bunga50` on the `tb_bank` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tb_bank` DROP COLUMN `bunga50`,
    ADD COLUMN `bunga60` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
