import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByCPF(cpf: string) {
  return prisma.receptionist.findUnique({
    where: {
      cpf,
    },
  });
}

async function create(data: Prisma.ReceptionistUncheckedCreateInput) {
  return prisma.receptionist.create({
    data,
  });
}

async function updateInfo(id: number, adress: string, phone: string, email: string, password: string) {
  return prisma.receptionist.update({
    where: {
      id
    },
    data: {
      adress,
      phone,
      email,
      password,
      updatedAt: new Date()
    },
  });
}

const receptionistRepository = {
  findByCPF,
  create,
  updateInfo
};

export default receptionistRepository;