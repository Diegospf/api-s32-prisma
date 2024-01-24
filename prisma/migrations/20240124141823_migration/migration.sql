/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "s32list" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,

    CONSTRAINT "s32list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mylist" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" INTEGER NOT NULL,

    CONSTRAINT "mylist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "week" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "movies" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "week_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rate" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "rate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mylist" ADD CONSTRAINT "mylist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "week" ADD CONSTRAINT "week_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rate" ADD CONSTRAINT "rate_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
