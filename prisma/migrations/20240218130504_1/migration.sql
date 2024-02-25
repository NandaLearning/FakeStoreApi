-- CreateTable
CREATE TABLE "store" (
    "id" SERIAL NOT NULL,
    "nama_product" TEXT NOT NULL,
    "gambar_product" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "store_pkey" PRIMARY KEY ("id")
);
