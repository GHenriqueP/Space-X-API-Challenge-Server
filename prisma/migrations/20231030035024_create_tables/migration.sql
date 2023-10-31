-- CreateTable
CREATE TABLE `spacex_launches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flightNumber` INTEGER NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `missionName` VARCHAR(191) NOT NULL,
    `launchDate` DATETIME(3) NOT NULL,
    `success` BOOLEAN NOT NULL,
    `rocket` VARCHAR(191) NOT NULL,
    `ytbUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
