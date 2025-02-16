/*
  Warnings:

  - Added the required column `achievedAt` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectDate` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "achievements" ADD COLUMN     "achievedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "projectDate" TIMESTAMP(3) NOT NULL;
