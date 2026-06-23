-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "ImageUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
