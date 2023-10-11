-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `middleName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `mobile` VARCHAR(15) NOT NULL,
    `email` VARCHAR(15) NOT NULL,
    `passwordHash` VARCHAR(32) NOT NULL,
    `intro` TINYTEXT NOT NULL,
    `profile` TEXT NOT NULL,
    `registeredAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastLogin` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
