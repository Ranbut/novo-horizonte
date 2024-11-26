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

export async function findById(id: number) {
  return await prisma.prescription.findFirst({
      where: {
          id
      },
  });
}

export async function findByMedicPrescriptionId(medicId: number, prescriptionId: number) {
  return await prisma.prescription.findFirst({
      where: {
          id: prescriptionId,
          medicId
      },
  });
}


export async function requestRenewPrescription(id: number) {
  return await prisma.prescription.update({
      where: {
        id
      },
      data:{
        requestingRenewal: true
      }
  });
}

export async function acceptRenewPrescription(id: number, renewDate: string) {
  return await prisma.prescription.update({
      where: {
        id
      },
      data:{
        requestingRenewal: false,
        expirationDate: renewDate
      }
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
  findById,
  getAllPrescriptionByUser,
  requestRenewPrescription,
  acceptRenewPrescription,
  findByMedicPrescriptionId,
  create,
  deletePrescription,
  deleteAllPrescriptionByUser
};

export default prescriptionsRepository;