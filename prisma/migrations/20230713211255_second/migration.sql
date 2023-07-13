/*
  Warnings:

  - You are about to drop the column `dayClose` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `dayOpen` on the `Store` table. All the data in the column will be lost.
  - Added the required column `endDay` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDay` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "TimeService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "storeId" INTEGER NOT NULL,
    "startHour" TEXT NOT NULL,
    "endHour" TEXT NOT NULL,
    CONSTRAINT "TimeService_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "startDay" TEXT NOT NULL,
    "endDay" TEXT NOT NULL,
    CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store" ("id", "userId") SELECT "id", "userId" FROM "Store";
DROP TABLE "Store";
ALTER TABLE "new_Store" RENAME TO "Store";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
