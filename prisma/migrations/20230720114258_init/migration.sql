-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TimeService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dayId" INTEGER NOT NULL,
    "startHour" TEXT NOT NULL,
    "endHour" TEXT NOT NULL,
    CONSTRAINT "TimeService_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "OpenDay" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TimeService" ("dayId", "endHour", "id", "startHour") SELECT "dayId", "endHour", "id", "startHour" FROM "TimeService";
DROP TABLE "TimeService";
ALTER TABLE "new_TimeService" RENAME TO "TimeService";
CREATE TABLE "new_Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Store" ("id", "name", "userId") SELECT "id", "name", "userId" FROM "Store";
DROP TABLE "Store";
ALTER TABLE "new_Store" RENAME TO "Store";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
