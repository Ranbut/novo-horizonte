-- CreateTable
CREATE TABLE "Receptionist" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "password" VARCHAR(255) NOT NULL,
    "adress" VARCHAR(255),
    "phone" VARCHAR(25),
    "birthday" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Receptionist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receptionist_cpf_key" ON "Receptionist"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Receptionist_email_key" ON "Receptionist"("email");
