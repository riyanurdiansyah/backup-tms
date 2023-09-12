/*
  Warnings:

  - You are about to drop the column `benefit` on the `tb_career` table. All the data in the column will be lost.
  - You are about to drop the column `kualifikasi` on the `tb_career` table. All the data in the column will be lost.
  - You are about to drop the column `persyaratan` on the `tb_career` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tb_career` DROP COLUMN `benefit`,
    DROP COLUMN `kualifikasi`,
    DROP COLUMN `persyaratan`;
