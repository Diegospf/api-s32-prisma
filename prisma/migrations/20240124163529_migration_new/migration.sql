-- CreateTable
CREATE TABLE "rate" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,

    CONSTRAINT "rate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rate" ADD CONSTRAINT "rate_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
