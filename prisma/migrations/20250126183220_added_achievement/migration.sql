/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `achievements` table. All the data in the column will be lost.
  - Added the required column `achievementImageUrl` to the `achievements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "achievements" DROP COLUMN "imageUrl",
ADD COLUMN     "achievementImageUrl" TEXT NOT NULL;
