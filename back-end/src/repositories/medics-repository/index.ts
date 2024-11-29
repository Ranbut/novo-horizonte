import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByCPF(cpf: string) {
  return prisma.medic.findUnique({
    where: {
      cpf,
    },
  });
}

async function findByID(id: number) {
  return prisma.medic.findUnique({
    where: {
      id,
    },
  });
}

async function create(data: Prisma.MedicUncheckedCreateInput) {
  return prisma.medic.create({
    data,
  });
}

async function updateInfo(id: number, body: any) {
  return prisma.medic.update({
    where: {
      id
    },
    data: body,
  });
}

const medicsRepository = {
  findByCPF,
  findByID,
  create,
  updateInfo
};

export default medicsRepository;