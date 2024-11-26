import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function createClient(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function createReceptionist(data: Prisma.SessionReceptionistUncheckedCreateInput) {
  return prisma.sessionReceptionist.create({
    data,
  });
}

async function createMedic(data: Prisma.SessionMedicUncheckedCreateInput) {
  return prisma.sessionMedic.create({
    data,
  });
}

const sessionRepository = {
  createClient,
  createReceptionist,
  createMedic,
};

export default sessionRepository;