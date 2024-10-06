-- CreateTable
CREATE TABLE "surveys" (
    "id" SERIAL NOT NULL,
    "unique_key" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" VARCHAR(65535),
    "image_url" VARCHAR(65535),
    "contents" JSONB,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "unique_key" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "survey_id" INTEGER NOT NULL,
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
CREATE INDEX "surveys_unique_key" ON "surveys"("unique_key");

-- CreateIndex
CREATE INDEX "surveys_user_id" ON "surveys"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "surveys_unique_key_key" ON "surveys"("unique_key");

-- CreateIndex
CREATE INDEX "answers_unique_key" ON "answers"("unique_key");

-- CreateIndex
CREATE INDEX "answers_user_id" ON "answers"("user_id");

-- CreateIndex
CREATE INDEX "answers_survey_id" ON "answers"("survey_id");

-- CreateIndex
CREATE UNIQUE INDEX "answers_unique_key_key" ON "answers"("unique_key");

-- CreateIndex
CREATE UNIQUE INDEX "answers_user_id_survey_id_key" ON "answers"("user_id", "survey_id");

-- CreateIndex
CREATE INDEX "users_unique_key" ON "users"("unique_key");

-- CreateIndex
CREATE INDEX "users_firebase_uid" ON "users"("firebase_uid");

-- CreateIndex
CREATE UNIQUE INDEX "users_unique_key_key" ON "users"("unique_key");

-- CreateIndex
CREATE UNIQUE INDEX "users_firebase_uid_key" ON "users"("firebase_uid");

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
