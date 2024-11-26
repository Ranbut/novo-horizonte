import { Prescription } from '@prisma/client';
import prescriptionsRepository from '../../repositories/prescriptions-repository';
import { notFoundError } from '@/errors';
import clientRepository from '@/repositories/clients-repository';

export async function getPrescription(medicId: number, prescriptionId: number) {
  const prescription = await prescriptionsRepository.getPrescription(medicId, prescriptionId);
  if (!prescription) throw notFoundError();

  return prescription;
}

export async function getAllPrescriptionByUser(medicId: number, userId: number) {
  const prescriptions = await prescriptionsRepository.getAllPrescriptionByUser(medicId, userId);

  if (!prescriptions) throw notFoundError();

  return prescriptions;
}

export async function createPrescription({ medicId, clientId, medications, description, expirationDate }: CreatePrescriptionParams): Promise<Prescription> {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw notFoundError();

  return prescriptionsRepository.create({
    medicId,
    clientId,
    medications,
    description,
    expirationDate,
    requestingRenewal: false
  });
}

export async function requestRenewPrescription(clientId: number, prescriptionId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw notFoundError();

  const prescription = await prescriptionsRepository.findById(prescriptionId);

  if (!prescription) throw notFoundError();

  return prescriptionsRepository.requestRenewPrescription(prescriptionId);
}

async function deletePrescription(medicId: number, prescriptionId: number) {
  await getPrescription(medicId, prescriptionId);

  await prescriptionsRepository.deletePrescription(prescriptionId);
}

async function deleteAllPrescriptionByUser(medicId: number, clientId: number) {
  console.log(clientId);
  const client = await clientRepository.findByID(clientId);

  if (!client) throw notFoundError();

  await prescriptionsRepository.deleteAllPrescriptionByUser(medicId, clientId);
}

export type CreatePrescriptionParams = Pick<Prescription, 'medicId' | 'clientId' |'medications' | 'description' | 'expirationDate'>;

const prescriptionsService = {
    getPrescription,
    getAllPrescriptionByUser,
    requestRenewPrescription,
    createPrescription,
    deletePrescription,
    deleteAllPrescriptionByUser
};

export default prescriptionsService;
