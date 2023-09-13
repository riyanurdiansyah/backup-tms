-- CreateTable
CREATE TABLE `tb_bank` (
    `bank_id` VARCHAR(64) NOT NULL,
    `nama` VARCHAR(255) NOT NULL,
    `bunga` DOUBLE NOT NULL DEFAULT 0,
    `bunga12` DOUBLE NOT NULL DEFAULT 0,
    `bunga24` DOUBLE NOT NULL DEFAULT 0,
    `bunga36` DOUBLE NOT NULL DEFAULT 0,
    `bunga48` DOUBLE NOT NULL DEFAULT 0,
    `bunga50` DOUBLE NOT NULL DEFAULT 0,

    PRIMARY KEY (`bank_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;
