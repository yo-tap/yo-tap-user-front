-- CreateTable
CREATE TABLE "serveys" (
    "id" SERIAL NOT NULL,
    "unique_key" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "contents" JSONB,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "serveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "unique_key" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "servey_id" INTEGER NOT NULL,
    "contents" JSONB,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "unique_key" VARCHAR(255) NOT NULL,
    "firebase_uid" VARCHAR(255) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "serveys_unique_key" ON "serveys"("unique_key");

-- CreateIndex
CREATE INDEX "serveys_user_id" ON "serveys"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "serveys_unique_key_key" ON "serveys"("unique_key");

-- CreateIndex
CREATE INDEX "answers_unique_key" ON "answers"("unique_key");

-- CreateIndex
CREATE INDEX "answers_user_id" ON "answers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "answers_unique_key_key" ON "answers"("unique_key");

-- CreateIndex
CREATE INDEX "users_unique_key" ON "users"("unique_key");

-- CreateIndex
CREATE INDEX "users_firebase_uid" ON "users"("firebase_uid");

-- CreateIndex
CREATE UNIQUE INDEX "users_unique_key_key" ON "users"("unique_key");

-- CreateIndex
CREATE UNIQUE INDEX "users_firebase_uid_key" ON "users"("firebase_uid");

-- AddForeignKey
ALTER TABLE "serveys" ADD CONSTRAINT "serveys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_servey_id_fkey" FOREIGN KEY ("servey_id") REFERENCES "serveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
