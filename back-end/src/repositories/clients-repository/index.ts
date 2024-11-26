import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByCPF(cpf: string) {
  return prisma.client.findUnique({
    where: {
      cpf,
    },
  });
}

async function findByID(id: number) {
  return prisma.client.findUnique({
    where: {
      id,
    },
  });
}


async function create(data: Prisma.ClientUncheckedCreateInput) {
  return prisma.client.create({
    data,
  });
}

async function updateInfo(id: number, adress: string, phone: string, email: string, password: string) {
  return prisma.client.update({
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

const clientRepository = {
  findByCPF,
  findByID,
  create,
  updateInfo
};

export default clientRepository;
