import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

export async function findById(id: number) {
  return await prisma.exam.findFirst({
    where: {
      id
    },
  });
}

export async function findByMedicExamId(medicId: number, examId: number) {
  return await prisma.exam.findFirst({
    where: {
      id: examId,
      medicId
    },
  });
}

export async function getAllExamsByClient(medicId: number, clientId: number) {
  return await prisma.exam.findMany({
    where: {
      medicId,
      clientId
    },
  });
}

async function create(data: Prisma.ExamUncheckedCreateInput) {
  return prisma.exam.create({
    data,
  });
}

async function editExam(examId: number, title: string, text: string) {
  return prisma.exam.update({
    where: {
      id: examId,
    },
    data: {
      title,
      text,
      updatedAt: new Date()
    },
  });
}

export async function deleteExam(id: number) {
  await prisma.exam.delete({
    where: {
      id
    },
  });
}


export async function deleteAllExamsByClient(medicId: number, clientId: number) {
  return await prisma.exam.deleteMany({
    where: {
      medicId,
      clientId
    },
  });
}

const examsRepository = {
  findById,
  findByMedicExamId,
  getAllExamsByClient,
  create,
  editExam,
  deleteExam,
  deleteAllExamsByClient
};

export default examsRepository;