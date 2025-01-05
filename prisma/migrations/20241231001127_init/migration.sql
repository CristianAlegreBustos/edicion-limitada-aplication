-- CreateTable
CREATE TABLE "product_images" (
    "image_id" SERIAL NOT NULL,
    "product_id" INTEGER,
    "image_path" VARCHAR(255) NOT NULL,
    "image_description" TEXT,

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "shoes_brand" (
    "brand_id" SERIAL NOT NULL,
    "brand_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "shoes_brand_pkey" PRIMARY KEY ("brand_id")
);

-- CreateTable
CREATE TABLE "shoes_category" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "shoes_category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "shoes_color" (
    "color_id" SERIAL NOT NULL,
    "color_name" VARCHAR(50),

    CONSTRAINT "shoes_color_pkey" PRIMARY KEY ("color_id")
);

-- CreateTable
CREATE TABLE "shoes_model" (
    "model_id" SERIAL NOT NULL,
    "model_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "shoes_model_pkey" PRIMARY KEY ("model_id")
);

-- CreateTable
CREATE TABLE "shoes_product" (
    "product_id" SERIAL NOT NULL,
    "brand_id" INTEGER,
    "model_id" INTEGER,
    "category_id" INTEGER,
    "size_id" INTEGER,
    "product_price" DECIMAL(10,2) NOT NULL,
    "product_currency" VARCHAR(3) NOT NULL,
    "product_description" TEXT,
    "color_id" INTEGER,

    CONSTRAINT "shoes_product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "shoes_size" (
    "size_id" SERIAL NOT NULL,
    "size_name" VARCHAR(50),
    "size_measure" INTEGER,
    "size_unit_measure" VARCHAR(10),

    CONSTRAINT "shoes_size_pkey" PRIMARY KEY ("size_id")
);

-- CreateTable
CREATE TABLE "user_sessions" (
    "session_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "session_token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(6),

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_sessions_session_token_key" ON "user_sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "shoes_product"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shoes_product" ADD CONSTRAINT "fk_shoes_product_color" FOREIGN KEY ("color_id") REFERENCES "shoes_color"("color_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shoes_product" ADD CONSTRAINT "shoes_product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "shoes_brand"("brand_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shoes_product" ADD CONSTRAINT "shoes_product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "shoes_category"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shoes_product" ADD CONSTRAINT "shoes_product_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "shoes_model"("model_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shoes_product" ADD CONSTRAINT "shoes_product_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "shoes_size"("size_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
