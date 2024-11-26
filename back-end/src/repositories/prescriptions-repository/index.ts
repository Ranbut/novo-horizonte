import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

export async function getPrescription(medicId: number, prescriptionId: number) {
  return await prisma.prescription.findFirst({
      where: {
          id: prescriptionId,
          medicId
      },
  });
}

export async function getAllPrescriptionByUser(medicId: number, clientId: number) {
  return await prisma.prescription.findMany({
      where: {
        medicId,
        clientId
      },
  });
}

async function create(data: Prisma.PrescriptionUncheckedCreateInput) {
  return prisma.prescription.create({
    data,
  });
}

export async function deletePrescription(id: number) {
  await prisma.prescription.delete({
      where: {
          id
      },
  });
}


export async function deleteAllPrescriptionByUser(medicId: number, clientId: number) {
  return await prisma.prescription.deleteMany({
      where: {
        medicId,
        clientId
      },
  });
}

const prescriptionsRepository = {
  getPrescription,
  getAllPrescriptionByUser,
  create,
  deletePrescription,
  deleteAllPrescriptionByUser
};

export default prescriptionsRepository;