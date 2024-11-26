import { Prescription } from '@prisma/client';
import prescriptionsRepository from '../../repositories/prescriptions-repository';

export async function createPrescription({ medicId, clientId, medications, description, expirationDate }: CreatePrescriptionParams): Promise<Prescription> {
  return prescriptionsRepository.create({
    medicId,
    clientId,
    medications,
    description,
    expirationDate,
    requestingRenewal: false
  });
}

export type CreatePrescriptionParams = Pick<Prescription, 'medicId' | 'clientId' |'medications' | 'description' | 'expirationDate'>;

const prescriptionsService = {
    createPrescription
};

export default prescriptionsService;
