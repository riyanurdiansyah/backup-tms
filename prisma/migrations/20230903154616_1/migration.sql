-- CreateTable
CREATE TABLE `tb_user` (
    `user_id` VARCHAR(64) NOT NULL,
    `username` VARCHAR(64) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `tb_user_username_key`(`username`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_slider` (
    `slider_id` VARCHAR(64) NOT NULL,
    `nama` VARCHAR(128) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`slider_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_owner_manual_book` (
    `book_id` VARCHAR(64) NOT NULL,
    `nama` VARCHAR(128) NOT NULL,
    `file` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career` (
    `career_id` VARCHAR(64) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `subtitle` VARCHAR(255) NOT NULL,
    `published` VARCHAR(128) NOT NULL,
    `expired` VARCHAR(128) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `status` VARCHAR(32) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `description` VARCHAR(510) NOT NULL,

    PRIMARY KEY (`career_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `career_content_id` VARCHAR(64) NOT NULL,
    `career_id` VARCHAR(64) NOT NULL,
    `title` VARCHAR(128) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    INDEX `career_id`(`career_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_rank` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `career_rank_id` VARCHAR(64) NOT NULL,
    `career_id` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `career_level_id` VARCHAR(64) NOT NULL,
    `career_id` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_rank_base` (
    `career_rank_id` VARCHAR(64) NOT NULL,
    `rank` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`career_rank_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_level_base` (
    `career_level_id` VARCHAR(64) NOT NULL,
    `level` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`career_level_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_list_category` (
    `category_list_id` VARCHAR(64) NOT NULL,
    `category_id` VARCHAR(64) NOT NULL,
    `career_id` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`category_list_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_career_category` (
    `category_id` VARCHAR(64) NOT NULL,
    `name` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_product_type` (
    `product_type_id` VARCHAR(64) NOT NULL,
    `product_type_name` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`product_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_product` (
    `product_id` VARCHAR(64) NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `image_bg` VARCHAR(255) NOT NULL,
    `cabin` VARCHAR(255) NOT NULL,
    `gvw` VARCHAR(255) NOT NULL,
    `max_power` VARCHAR(255) NOT NULL,
    `max_torque` VARCHAR(255) NOT NULL,
    `product_type_id` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_product_content` (
    `product_content_id` VARCHAR(64) NOT NULL,
    `product_id` VARCHAR(64) NOT NULL,
    `text` VARCHAR(128) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `position` VARCHAR(64) NOT NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`product_content_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_product_spesification` (
    `product_spesification_id` VARCHAR(64) NOT NULL,
    `product_id` VARCHAR(64) NOT NULL,
    `category` VARCHAR(128) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(16) NOT NULL,
    `keterangan` VARCHAR(255) NOT NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`product_spesification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_manual_book` (
    `manual_book_id` VARCHAR(64) NOT NULL,
    `nama` VARCHAR(128) NOT NULL,
    `file` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`manual_book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_dealer_cabang` (
    `cabang_id` VARCHAR(64) NOT NULL,
    `name` VARCHAR(128) NOT NULL,

    PRIMARY KEY (`cabang_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_dealer` (
    `dealer_id` VARCHAR(64) NOT NULL,
    `cabang_id` VARCHAR(64) NOT NULL,
    `name` VARCHAR(128) NOT NULL,
    `subtitle` VARCHAR(128) NOT NULL,
    `phone` VARCHAR(16) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,

    PRIMARY KEY (`dealer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_service` (
    `service_id` VARCHAR(64) NOT NULL,
    `title` VARCHAR(128) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_patner` (
    `partner_id` VARCHAR(64) NOT NULL,
    `nama` VARCHAR(128) NOT NULL,
    `image` VARCHAR(128) NOT NULL,
    `video` VARCHAR(128) NOT NULL,

    PRIMARY KEY (`partner_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_brochure` (
    `brochure_id` VARCHAR(64) NOT NULL,
    `title` VARCHAR(128) NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL,
    `brochure` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`brochure_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_sosmed` (
    `sosmed_id` VARCHAR(64) NOT NULL,
    `facebook` VARCHAR(255) NOT NULL,
    `twitter` VARCHAR(255) NOT NULL,
    `instagram` VARCHAR(255) NOT NULL,
    `whatsapp` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`sosmed_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- CreateTable
CREATE TABLE `tb_booking_service` (
    `booking_id` VARCHAR(64) NOT NULL,
    `no_hp` VARCHAR(64) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `date` VARCHAR(64) NOT NULL,
    `time` VARCHAR(64) NOT NULL,
    `location` VARCHAR(32) NOT NULL,
    `outlet_id` VARCHAR(64) NOT NULL,
    `no_kendaraan` VARCHAR(64) NOT NULL,
    `model` VARCHAR(128) NOT NULL,
    `tahun` VARCHAR(64) NOT NULL,
    `jenis_service` VARCHAR(128) NOT NULL,

    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci Engine innoDB;

-- AddForeignKey
ALTER TABLE `tb_career_content` ADD CONSTRAINT `tb_career_content_career_id_fkey` FOREIGN KEY (`career_id`) REFERENCES `tb_career`(`career_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_career_rank` ADD CONSTRAINT `tb_career_rank_career_id_fkey` FOREIGN KEY (`career_id`) REFERENCES `tb_career`(`career_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_career_rank` ADD CONSTRAINT `tb_career_rank_career_rank_id_fkey` FOREIGN KEY (`career_rank_id`) REFERENCES `tb_career_rank_base`(`career_rank_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_career_level` ADD CONSTRAINT `tb_career_level_career_id_fkey` FOREIGN KEY (`career_id`) REFERENCES `tb_career`(`career_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_career_level` ADD CONSTRAINT `tb_career_level_career_level_id_fkey` FOREIGN KEY (`career_level_id`) REFERENCES `tb_career_level_base`(`career_level_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_product` ADD CONSTRAINT `tb_product_product_type_id_fkey` FOREIGN KEY (`product_type_id`) REFERENCES `tb_product_type`(`product_type_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_product_content` ADD CONSTRAINT `tb_product_content_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `tb_product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_product_spesification` ADD CONSTRAINT `tb_product_spesification_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `tb_product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_dealer` ADD CONSTRAINT `tb_dealer_cabang_id_fkey` FOREIGN KEY (`cabang_id`) REFERENCES `tb_dealer_cabang`(`cabang_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
