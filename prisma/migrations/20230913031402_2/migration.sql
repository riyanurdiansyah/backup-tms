/*
  Warnings:

  - Added the required column `role_id` to the `tb_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_user` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `role_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `tb_user_role` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(128) NOT NULL,

    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_user` ADD CONSTRAINT `tb_user_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `tb_user_role`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
