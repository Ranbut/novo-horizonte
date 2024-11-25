import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByEmail(email: string, select?: Prisma.ClientSelect) {
  const params: Prisma.ClientFindUniqueArgs = {
    where: {
      email,
    }
  };

  if (select) {
    params.select = select;
  }

  return prisma.client.findUnique(params);
}

async function findByCPF(cpf: string) {
  return prisma.client.findUnique({
    where: {
      cpf,
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
      password
    },
  });
}

const userRepository = {
  findByEmail,
  findByCPF,
  create,
  updateInfo
};

export default userRepository;
