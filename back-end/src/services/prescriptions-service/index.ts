import { Prescription } from '@prisma/client';
import prescriptionsRepository from '../../repositories/prescriptions-repository';
import { clientNotFoundError, prescriptionNotFoundError } from '@/errors';
import clientRepository from '@/repositories/clients-repository';

export async function getPrescription(medicId: number, prescriptionId: number) {
  const prescription = await prescriptionsRepository.getPrescription(medicId, prescriptionId);
  if (!prescription) throw prescriptionNotFoundError();

  return prescription;
}

export async function getAllPrescriptionByUser(medicId: number, userId: number) {
  const client = await clientRepository.findByID(userId);

  if (!client) throw clientNotFoundError();

  const prescriptions = await prescriptionsRepository.getAllPrescriptionByUser(medicId, userId);

  if (!prescriptions) throw prescriptionNotFoundError();

  return prescriptions;
}

export async function createPrescription({ medicId, clientId, medications, description }: CreatePrescriptionParams): Promise<Prescription> {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  var today = new Date();
  const expirationDate = new Date(new Date().setDate(today.getDate() + 30)).toISOString();

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

  if (!client) throw clientNotFoundError();

  const prescription = await prescriptionsRepository.findById(prescriptionId);

  if (!prescription) throw prescriptionNotFoundError();

  return prescriptionsRepository.requestRenewPrescription(prescriptionId);
}

export async function acceptRenewPrescription(medicId: number, prescriptionId: number) {
  const prescription = await prescriptionsRepository.findByMedicPrescriptionId(medicId,prescriptionId);

  if (!prescription || prescription.requestingRenewal == false) throw prescriptionNotFoundError();

  var today = new Date();
  const renewDate = new Date(new Date().setDate(today.getDate() + 30)).toISOString();

  return prescriptionsRepository.acceptRenewPrescription(prescriptionId, renewDate);
}


async function deletePrescription(medicId: number, prescriptionId: number) {
  await getPrescription(medicId, prescriptionId);

  await prescriptionsRepository.deletePrescription(prescriptionId);
}

async function deleteAllPrescriptionByUser(medicId: number, clientId: number) {
  console.log(clientId);
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  await prescriptionsRepository.deleteAllPrescriptionByUser(medicId, clientId);
}

export type CreatePrescriptionParams = Pick<Prescription, 'medicId' | 'clientId' |'medications' | 'description'>;

const prescriptionsService = {
    getPrescription,
    getAllPrescriptionByUser,
    requestRenewPrescription,
    acceptRenewPrescription,
    createPrescription,
    deletePrescription,
    deleteAllPrescriptionByUser
};

export default prescriptionsService;
