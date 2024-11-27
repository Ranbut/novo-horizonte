-- CreateTable
CREATE TABLE "Exam" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER,
    "medicId" INTEGER,
    "title" VARCHAR(255) NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_medicId_fkey" FOREIGN KEY ("medicId") REFERENCES "Medic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
