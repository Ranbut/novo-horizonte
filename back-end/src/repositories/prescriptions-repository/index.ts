import { Prisma } from '@prisma/client';
import { prisma } from '../../config';


async function create(data: Prisma.PrescriptionUncheckedCreateInput) {
  return prisma.prescription.create({
    data,
  });
}

const prescriptionsRepository = {
  create,
};

export default prescriptionsRepository;