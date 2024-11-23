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

const userRepository = {
  findByEmail,
  findByCPF,
  create
};

export default userRepository;
