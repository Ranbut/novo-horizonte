import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByCPF(cpf: string) {
  return prisma.medic.findUnique({
    where: {
      cpf,
    },
  });
}

async function create(data: Prisma.MedicUncheckedCreateInput) {
  return prisma.medic.create({
    data,
  });
}

async function updateInfo(id: number, adress: string, phone: string, email: string, password: string) {
  return prisma.medic.update({
    where: {
      id
    },
    data: {
      adress,
      phone,
      email,
      password
    },
  });
}

const medicsRepository = {
  findByCPF,
  create,
  updateInfo
};

export default medicsRepository;