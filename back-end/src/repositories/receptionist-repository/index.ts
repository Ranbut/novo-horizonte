import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByEmail(email: string, select?: Prisma.ReceptionistSelect) {
  const params: Prisma.ReceptionistFindUniqueArgs = {
    where: {
      email,
    }
  };

  if (select) {
    params.select = select;
  }

  return prisma.receptionist.findUnique(params);
}

async function findByCPF(cpf: string) {
  return prisma.receptionist.findUnique({
    where: {
      cpf,
    },
  });
}

async function create(data: Prisma.ClientUncheckedCreateInput) {
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
      password
    },
  });
}

const receptionistRepository = {
  findByEmail,
  findByCPF,
  create,
  updateInfo
};

export default receptionistRepository;
