/*
  Warnings:

  - Added the required column `benefit` to the `tb_career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kualifikasi` to the `tb_career` table without a default value. This is not possible if the table is not empty.
  - Added the required column `persyaratan` to the `tb_career` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_career` ADD COLUMN `benefit` VARCHAR(510) NOT NULL,
    ADD COLUMN `kualifikasi` VARCHAR(510) NOT NULL,
    ADD COLUMN `persyaratan` VARCHAR(510) NOT NULL;
